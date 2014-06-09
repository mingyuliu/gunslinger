//Config
var THR_HAND_CONFIDENCE = 0.4;


var leapDeviceMgr = (function() {

    var api = {};
    var _controllers = [];

    getFilteredFingers = function(frame) {
        if (frame.hands.length > 0) {
            var hand = frame.hands[0];
            if (hand.confidence < THR_HAND_CONFIDENCE) {
                return [];
            }
            //TODO finger filtering
            var fingers = hand.fingers;
            var len = fingers.length;
            while (len--) {
                if (!fingers[len].extended) {
                    fingers.splice(len, 1);
                }
            }
            return fingers;
        }
        return [];
    };


    api.numberOfDev = function() {
        return controllers.length;
    };


    api.addDevice = function(url, tag, gestureList) {
        var controller = new Leap.Controller({
            host: url,
            port: 6437,
            enableGestures: true,
            frameEventName: 'animationFrame',
            useAllPlugins: true
        });

        controller.tag = tag;
        controller.gestureList = gestureList;
        controller.analyzer = new quanAnalyzer(gestureList, gestureList);
        controller.on('connect', function() {
            //Init
        });

        controller.connect();
        controller.use('handHold');


        _controllers.push(controller);


    };

    api.start = function() {
        //for test gui
        createProgress();
        for (var i = 0; i < _controllers.length; i++) {
            _controllers[i].loop(function(frame) {
                //for test gui
                drawGestures();


                //Filter out folded fingers
                drawFingers(frame, this.tag);
                var fingers = getFilteredFingers(frame);


                this.analyzer.update(fingers, this.tag);
                updateProgressBar(this.analyzer.getList(), this.tag, this.analyzer.getMinIndex());

            });

        }
    };



    api.getController = function(controllerIndex) {
        return _controllers[controllerIndex];
    };

    return api;
})();

var LENGTH_WEIGHT = 0.5;
var ANGLE_WEIGHT = 0.5;

function quanAnalyzer(list) {
    this._list = [];
    for (var i = 0; i < list.length; i++) {

        var item = {
            type: list[i],
            val: 1
        };
        this._list.push(item);
    }

    this.angleBtLines = function angleBtLines(v1, v2) {
        var m1, n1, p1, m2, n2, p2;

        m1 = v1[0];
        n1 = v1[1];
        p1 = v1[2];


        m2 = v2[0];
        n2 = v2[1];
        p2 = v2[2];

        var cos = (m1 * m2 + n1 * n2 + p1 * p2) / (Math.sqrt(m1 * m1 + n1 * n1 + p1 * p1) * Math.sqrt(m2 * m2 + n2 * n2 + p2 * p2));
        return Math.acos(cos) * 180.0 / Math.PI;
    };



    this.update = function(fingers, whichhand) {
        //this._list is an array and stores each posture name and its current distance value

        //two distance measurement
        var finLength;
        var finAngle;


        var volGestures = (whichhand == "right" ? rightHandGesture : leftHandGesture);

        if (fingers.length > 0) { //if there is at least one finger in the frame
            var finCount = fingers.length;

            for (var i = 0; i < volGestures.length; i++) { //volGestures stores our posture vocabulary
                var finCountInVol = volGestures[i].count;
                var minCount = Math.min(finCountInVol, finCount);
                var maxCount = Math.max(finCountInVol, finCount);

                //Length difference
                var accumDistance = 0;
                for (var j = 0; j < minCount; j++) {
                    accumDistance += (fingers[j].length - volGestures[i].finLen[j]) * (fingers[j].length - volGestures[i].finLen[j]);
                }
                accumDistance += Math.abs(finCount - finCountInVol) * 120 * 120;
                var normalizer = maxCount * 120 * 120;
                finLength = Math.sqrt(accumDistance / normalizer);

                //Angle difference
                accumDistance = 0;
                var downDir = [0, 0, -1];
                for (var j = 0; j < minCount; j++) {
                    var angle = this.angleBtLines(downDir, fingers[j].direction);

                    if (fingers[j].direction[0] < 0) {
                        angle = -angle;
                    }

                    accumDistance += (angle - volGestures[i].finAngle[j]) * (angle - volGestures[i].finAngle[j]);
                }
                accumDistance += Math.abs(finCount - finCountInVol) * 180 * 180;
                normalizer = maxCount * 180 * 180;
                finAngle = Math.sqrt(accumDistance / normalizer);

                //Combine angle and length using predefined weights
                this._list[i].val = finLength * LENGTH_WEIGHT + finAngle * ANGLE_WEIGHT;
            }
        } else { //if there is no finger in the frame, clear data in the list.
            for (var i = 0; i < volGestures.length; i++) {
                this._list[i].val = 1;
            }
            this._list[0].val = 0;
        }

        // if (whichhand == "right") console.log(this.getMinIndex());

    };

    this.getMinIndex = function() {
        {
            var minVal = Number.MAX_VALUE;
            var minIndex = 0;
            for (var i = 0; i < this._list.length; i++) {
                if (minVal > this._list[i].val) {
                    minVal = this._list[i].val;
                    minIndex = i;
                }
                // console.log("type " + this._list[i].type + " val: " + this._list[i].val);
                // console.log(this._list);
            }
            return minIndex;
        }
    };

    this.getList = function() {
        return this._list;
    };
}



var GESTURE_ALL_RIGHT = [];
for (var i = 0; i < rightHandGesture.length; i++) {
    GESTURE_ALL_RIGHT.push(rightHandGesture[i].type);
}
var GESTURE_ALL_LEFT = [];
for (var i = 0; i < leftHandGesture.length; i++) {
    GESTURE_ALL_LEFT.push(leftHandGesture[i].type);
}



//TEST
// leapDeviceMgr.addDevice("localhost", "right");
leapDeviceMgr.addDevice("localhost", "right", GESTURE_ALL_RIGHT);
leapDeviceMgr.addDevice("192.168.20.128", "left", GESTURE_ALL_LEFT);

leapDeviceMgr.start();