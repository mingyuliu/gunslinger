//Config
var THR_HAND_CONFIDENCE = 0.4;
var ORDINAL_DISTANCE_WEIGHT = 0.33;
var THUMB_TIP_WEIGHT = 0.33;
var NB_FINGER_WEIGHT = 0.34;

var leapDeviceMgr = (function() {

    var api = {};
    var _controllers = [];

    getFilteredFrame = function(frame) {
        //TODO
    }

    getFilteredFingers = function(frame, tag) {

        if (frame.hands.length > 0) {
            var hand = frame.hands[0];
            if (hand.confidence < THR_HAND_CONFIDENCE) {
                return [];
            }
            //TODO finger filtering
            var fingers = hand.fingers;


            var len = fingers.length;
            while (len > 2) {
                len--;
                if (Leap.vec3.distance(fingers[len].tipPosition, fingers[len - 1].tipPosition) < 20) {
                    if (fingers[len].type != 0) {
                        fingers.splice(len, 1);

                    }

                }
            }
            len = fingers.length;
            while (len--) {
                if (!fingers[len].extended && fingers[len].type != 0) {
                    fingers.splice(len, 1);
                }
            }
            //compare bones in thumb to determine whether it's extended or not
            if (fingers.length > 1) {
                var differ = fingers[0].tipPosition[0] - hand.fingers[1].carpPosition[0];
                if (differ > -15) {
                    fingers.splice(0, 1);
                }
            } else if (fingers.length == 1) {
                if (!fingers[0].extended) {
                    fingers.splice(0, 1);
                }
            }

            //elimilate mid and fin mix issue
            if (fingers.length > 2 && fingers.length < 5) {
                if (fingers[0].type == 0 && fingers[1].type == 1) {
                    //var len = fingers.length - 1;
                    while (fingers.length > 2) {
                        fingers.splice(fingers.length - 1, 1);
                    }
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
        controller.analyzer = new quanAnalyzer(tag);

        controller.use('riggedHand');
        controller.connect();

        controller.setBackground(true); //enable

        _controllers.push(controller);

    };

    api.start = function() {
        //for test gui
        createProgress();
        for (var i = 0; i < _controllers.length; i++) {
            _controllers[i].loop(function(frame) {
                //for test gui
                drawGestures();

                // drawFingers(frame, this.tag);
                //Filter out folded fingers
                // var fingers = getFilteredFingers(frame, this.tag);
                var hand = frame.hands[0];
                var fingers = [];
                if (hand != undefined) {

                    fingers = frame.hands[0].fingers;
                }
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

function quanAnalyzer(tag) {
    this._list = [];
    this._gestures;
    switch (tag) {
        case "right":
            this._gestures = JSON.parse(localStorage.rightGestures);
            break;
        case "left":
            this._gestures = JSON.parse(localStorage.leftGestures);

            break;
    }
    for (var i = 0; i < this._gestures.length; i++) {

        var item = {
            type: this._gestures[i].type,
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

    this.resetVal = function() {
        for (var i = 0; i < this._gestures.length; i++) {
            this._list[i].val = 1;
        }
        this._list[0].val = 0;
    }

    this.update = function(fingers) {
        if (fingers.length == 0) {
            this.resetVal();
            return;
        }
        var distanceStr = "";
        for (var p = 0; p < this._gestures.length; p++) { // for each vocabulary posture

            // Step 2: difference in number of raised digits between the vocabulary gesture and the candidate gesture
            var nbDigitDistance = 0;

            // Step 3: ordinal distance between the digits of the vocabulary gesture and the candidate gesture
            var diffArray = [];
            for (var d = 1; d < 5; d++) { // digits (index to pinky fingers); I'm assuming thumb is 0 and pinky is 4

                /*
            Basically what this loop does is compute an array that represents the difference between the vocabulary and candidate postures:
              - 2 means "this finger is raised in both postures"
              - 0 means "this finger is raised in none of the postures"
              - 1 means "this finger is raised in the vocabulary posture but not in the candidate posture"
              - -1 means "this finger is raised in the candidate posture but not in the vocabulary posture"

            So for example, if we have:
                Vocabulary:      | | . .    
                Candidate:       | . . |
                We get:         [2;1;0;-1]
            */

                // I'm assuming that there is an "extended[]" boolean array in the posture objects
                // The +var operation turns a boolean into an integer (0 or 1)
                diffArray[d] = (this._gestures[p].extended[d] && fingers[d].extended ? 2 : +Number(this._gestures[p].extended[d]) - Number(fingers[d].extended));

                nbDigitDistance += (diffArray[d] == 2 ? 0 : diffArray[d]);

            }


            /* 
        Computing the ordinal distance.
        This distance can be summarized as the lowest distance between a mismatched finger (1 or -1) and either another mismatched finger
        of opposite sign or a correct finger (2). I've tried various distances and this ones is the closest to the logic that I'm trying
        to implement.
        */

            var first1 = 0;
            var firstIndex1 = -1,
                firstIndex2 = -1;
            var dist1 = 0,
                dist2 = 0;
            var digit;

            for (var i = 0; i < diffArray.length; i++) {

                digit = diffArray[i];

                if (firstIndex2 == -1 && digit == 2) {
                    firstIndex2 = i;
                } else if (firstIndex1 == -1 && Math.abs(digit) == 1) {
                    first1 = digit;
                    firstIndex1 = i;
                }

                if (firstIndex1 != -1) {

                    if (digit == first1) {
                        firstIndex1 = i;
                    }

                    if (digit != 0 && digit != first1) {
                        dist1 = i - firstIndex1;
                        break;
                    }

                }

                if (firstIndex2 != -1) {

                    if (digit == 2) {
                        firstIndex2 = i;
                    }

                    if (Math.abs(digit) == 1 && dist2 == 0) {
                        dist2 = i - firstIndex2;

                    }

                }

            }


            // Ordinal distance between raised fingers, normalized (maximum value is 3):
            var ordinalDistance = Math.max(dist1, dist2) / 3;

            // Distance between the thumb tips of the candidate and the vocabulary gesture from the index's mcpPosition (I'm assuming that the corresponding vector 
            // of the vocabulary postures is stored in the posture object), normalized by the length of the index finger:
            var cadidateThumbDist;
            cadidateThumbDist = Leap.vec3.distance(fingers[0].tipPosition, fingers[1].mcpPosition)

            var thumbTipDistance = Math.abs(cadidateThumbDist - this._gestures[p].thumbDistVec);


            thumbTipDistance /= fingers[1].length;

            // Difference between the number of raised digits, normalized (maximum difference is 4):
            nbDigitDistance /= 4;
            nbDigitDistance = Math.abs(nbDigitDistance);
            ordinalDistance = Math.abs(ordinalDistance);


            // Weighted sum (I suggest starting with all the weights at .33 and see what happens)
            // I'm assuming that .val is the final score and that lower is better
            this._list[p].val = ordinalDistance * ORDINAL_DISTANCE_WEIGHT + thumbTipDistance * THUMB_TIP_WEIGHT + nbDigitDistance * NB_FINGER_WEIGHT;
            distanceStr += this._gestures[p].type + "\t\tordinal: " + ordinalDistance.toFixed(3) + " thumb: " + thumbTipDistance.toFixed(3) + " digit: " + nbDigitDistance.toFixed(3) + "<br />";
        }
        if (tag == "right") {

            var frameOutput = document.getElementById("frameData");

            var str = "";
            for (var i = 0; i < this._list.length; i++) {
                str += this._list[i].val + " , ";
            }
            frameOutput.innerHTML = "<div style='width:600px; font-size: 20px;float:left; padding:5px'>" + distanceStr + "</div>";
        }
        // console.log(str);
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
            // var questEle = document.getElementById("quesmarks");
            // if (minVal > 0.2) {
            //     // questEle.style.visibility = 'visible';
            //     questEle.style.top = canvas.height / 2 + 'px';

            //     questEle.style.left = canvas.width / 2 + 'px';
            //     $('#quesmarks').show();
            //     $('#quesmarks').animo({
            //         animation: 'tada',
            //         keep: false
            //     });


            // } else {
            //     // $('#quesmarks').hide();
            //     // $('#quesmarks').animo("cleanse");
            // }
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
//leapDeviceMgr.addDevice(url, position, gesturelist, frameFn);
/*
frameFn(frame);
*/

leapDeviceMgr.start();