//Config
var THR_HAND_CONFIDENCE = 0.4;
var ORDINAL_DISTANCE_WEIGHT = 0.60;
var THUMB_TIP_WEIGHT = 0.10;
var NB_FINGER_WEIGHT = 0.30;

var leapDeviceMgr = (function() {

    var api = {};
    var _controllers = [];
    var screenWid,
        screenheight;



    getFilteredFrame = function(frame) {
        //TODO
    }



    filterFingers = function(frame, tag) {
        if (frame.hands.length > 0) {
            var hand = frame.hands[0];
            if (hand.confidence < THR_HAND_CONFIDENCE) {
                frame.hands[0] = undefined;
                return;
            }
            //TODO finger filtering
            var fingers = hand.fingers;


            var len = fingers.length;
            while (len > 2) {
                len--;
                var fin1 = fingers[len].tipPosition;
                fin1[1] = 0;
                var fin2 = fingers[len - 1].tipPosition;
                fin2[1] = 0;
                var differ = Leap.vec3.distance(fin1, fin2);
                if (Leap.vec3.distance(fin1, fin2) < 20) {
                    if (fingers[len].type != 0) {
                        fingers[len].extended = false;
                    }
                }
            }

            //compare bones in thumb to determine whether it's extended or not
            if (fingers.length > 1) {
                var thumbProj = fingers[0].tipPosition;
                thumbProj[1] = 0;
                var indexProj = fingers[1].mcpPosition;
                indexProj[1] = 0;
                var differ = Leap.vec3.distance(thumbProj, indexProj);

                if (differ > 20 && thumbProj[0] < indexProj[0]) {
                    fingers[0].extended = true;
                }

                var frameOutput = document.getElementById("frameDataLeft");

                var distanceStr = "distance " + differ;
                frameOutput.innerHTML = "<div style='width:650px; font-size: 30px;float:left; padding:5px'>" + distanceStr + "</div>";
            }
        }


    };


    api.initDevice = function(screenWid_, screenHeight_) {
        screenWid = screenWid_;
        screenHeight = screenHeight_;
    }

    api.numberOfDev = function() {
        return controllers.length;
    };




    api.addDevice = function(url, tag, gestureList, onFrameLoop) {
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
        controller.onFrameLoop = onFrameLoop || function() {
            // body...
        };
        controller.controls = new Controls(tag, screenWid, screenHeight);

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

                //Filter out folded fingers
                filterFingers(frame, this.tag);
                drawFingers(frame, this.tag);

                this.analyzer.update(frame, this.tag);
                updateProgressBar(this.analyzer.getList(), this.tag, this.analyzer.getMinIndex());

                this.controls.update(this.gestureList[this.analyzer.getMinIndex()], frame);

                this.onFrameLoop(this.controls);

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

    this.clearNonVal = function() {
        this._list[0].val = 1;
    }

    this.update = function(frame) {
        var hand = frame.hands[0];
        var fingers = [];
        if (hand != undefined) {

            fingers = frame.hands[0].fingers;
        } else {
            this.resetVal();
            return;
        }
        if (fingers.length == 0) {
            this.resetVal();
            return;
        }
        this.clearNonVal();
        var distanceStr = "";
        for (var p = 1; p < this._gestures.length; p++) { // for each vocabulary posture

            // Step 2: difference in number of raised digits between the vocabulary gesture and the candidate gesture
            var nbDigitDistance = 0;

            // Step 3: ordinal distance between the digits of the vocabulary gesture and the candidate gesture
            var diffArray = [];
            for (var d = 0; d < 5; d++) { // digits (index to pinky fingers); I'm assuming thumb is 0 and pinky is 4

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
            var ordinalDistance = Math.max(dist1, dist2) / 4;

            // Distance between the thumb tips of the candidate and the vocabulary gesture from the index's mcpPosition (I'm assuming that the corresponding vector 
            // of the vocabulary postures is stored in the posture object), normalized by the length of the index finger:
            var cadidateThumbDist;
            cadidateThumbDist = Leap.vec3.distance(fingers[0].tipPosition, hand.palmPosition);

            var thumbTipDistance = Math.abs(cadidateThumbDist - this._gestures[p].thumbDistVec);

            var handSpan = JSON.parse(localStorage.handSpan);
            thumbTipDistance /= (handSpan / 2);

            // Difference between the number of raised digits, normalized (maximum difference is 4):
            nbDigitDistance /= 4;
            nbDigitDistance = Math.abs(nbDigitDistance);
            ordinalDistance = Math.abs(ordinalDistance);


            // Weighted sum (I suggest starting with all the weights at .33 and see what happens)
            // I'm assuming that .val is the final score and that lower is better
            this._list[p].val = ordinalDistance * ORDINAL_DISTANCE_WEIGHT + thumbTipDistance * THUMB_TIP_WEIGHT + nbDigitDistance * NB_FINGER_WEIGHT;
            distanceStr += this._gestures[p].type + "\t\tordinal: " + ordinalDistance.toFixed(3) + " thumb: " + thumbTipDistance.toFixed(3) + " digit: " + nbDigitDistance.toFixed(3) + "<br />";
        }
        switch (tag) {
            case "right":
                var frameOutput = document.getElementById("frameDataRight");

                var str = "";
                for (var i = 0; i < this._list.length; i++) {
                    str += this._list[i].val + " , ";
                }

                var distanceToThumb;
                distanceToThumb = Leap.vec3.distance(fingers[0].tipPosition, hand.palmPosition);
                distanceStr += "thumbTip to palmCtr: " + distanceToThumb.toFixed(2) + "<br />";

                distanceToThumb = Leap.vec3.distance(fingers[0].tipPosition, fingers[1].mcpPosition);
                distanceStr += "thumbTip to indexMcp: " + distanceToThumb.toFixed(2) + "<br />";

                frameOutput.innerHTML = "<div style='width:650px; font-size: 30px;float:right; padding:5px'>" + distanceStr + "</div>";
                break;
            case "left":
                var frameOutput = document.getElementById("frameDataLeft");

                var str = "";
                for (var i = 0; i < this._list.length; i++) {
                    str += this._list[i].val + " , ";
                }
                frameOutput.innerHTML = "<div style='width:650px; font-size: 30px;float:left; padding:5px'>" + distanceStr + "</div>";
                break;
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

function Controls(tag_, screenWid_, screenHeight_) {
    this.tag = tag_;
    this.screenHeight = screenHeight_;
    this.screenWidth = screenWid_;
    this.x = 0;
    this.y = 0;
    this.valid = false;
    this.posture = "none";
    this.use = GetURLParameter("use");
    this.fx = OneEuroFilter(100, 0.005, 0.8, 0.03);
    this.fy = OneEuroFilter(100, 0.005, 0.8, 0.03);
    this.cursorState = "none";
    var TRESH_CLICKING = [0.30, 0.25];
    var isThumbDown = false;
    this.isDragging = false;


    function interpolateSpeed(deviceSpeed, scaleFactor) {
        var threshold = [
            [0.0, 0.0],
            [10.922, 34.798],
            [31.750, 134.620],
            [98.044, 617.220],
            [1016.000, 14427.200]
        ];


        var absSpeed = Math.abs(deviceSpeed);
        var i;

        for (var i = 1; i < 5; i++) {
            threshold[i][1] = threshold[i][1] * scaleFactor;
        }

        for (var i = 1; i < 5; i++) {
            if (absSpeed < threshold[i][0]) {

                var v = sign(deviceSpeed) * ((absSpeed - threshold[i - 1][0]) * ((threshold[i][1] - threshold[i - 1][1]) / (threshold[i][0] - threshold[i - 1][0])) + threshold[i - 1][1]);
                if (isNaN(v)) {
                    return 0;
                };
                return v;
            }
        }
        i--;
        var v = sign(deviceSpeed) * ((absSpeed - threshold[i - 1][0]) * ((threshold[i][1] - threshold[i - 1][1]) / (threshold[i][0] - threshold[i - 1][0])) + threshold[i - 1][1]);
        if (isNaN(v)) {
            return 0;
        };
        return v;
    }

    function sign(value) {
        if (value >= 0)
            return 1.0;
        else
            return -1.0;
    }

    function quantitativeAnalysisVel(hand, thumb, type) {
        if (hand == undefined) {
            return;
        }
        //get the average of hand paml direction
        var count = 0;
        var pamlDirection = Leap.vec3.create();

        var index = -1;
        for (var i = 0; i < rightHandGesture.length; i++) {
            if (rightHandGesture[i].type === type) {
                index = i;
                break;
            }
        }

        if (index < 0) return;


        var vValue = 1;


        if (thumb != undefined) {
            var countC = thumb.length;



            var minCount = 1;
            var maxCount = 1;

            //Length difference
            var nominator = 0;

            var vecC = Leap.vec3.create();
            Leap.vec3.subtract(vecC, thumb.tipVelocity, hand.palmVelocity);
            var j = 0;

            nominator += (vecC[0] - rightHandGesture[index].finVel[j][0]) * (vecC[0] - rightHandGesture[index].finVel[j][0]) +
                (vecC[1] - rightHandGesture[index].finVel[j][1]) * (vecC[1] - rightHandGesture[index].finVel[j][1]) +
                (vecC[2] - rightHandGesture[index].finVel[j][2]) * (vecC[2] - rightHandGesture[index].finVel[j][2]);


            normalizer = maxCount * 500 * 500;
            vValue = Math.sqrt(nominator / normalizer);
        }
        return vValue;
    }

    this.ReviseCursorPos = function() {
        if (this.x > this.screenWidth) {
            this.x = this.screenWidth;
        } else if (this.x < 0) {
            this.x = 0;
        }
        if (this.y > this.screenHeight) {
            this.y = this.screenHeight;
        } else if (this.y < 0) {
            this.y = 0;
        }
    }


    this.update = function(posture, frame) {
        this.posture = posture;

        if (frame.hands[0] != undefined && posture == "+thu+ind") {
            var timestamp = frame.timestamp * 0.000001;
            var velraw = frame.hands[0].fingers[1].tipVelocity;
            var delta = [this.fx.filter(velraw[0], timestamp), this.fy.filter(velraw[1], timestamp)];

            if (delta[0] > -20 && delta[0] < 20 && delta[1] > -20 && delta[1] < 20) {
                //#convert
                if (this.use == "wall") {
                    this.x -= interpolateSpeed(delta[1], ACCELERATION_FACTOR) / 200;
                    this.y -= interpolateSpeed(delta[0], ACCELERATION_FACTOR) / 200;
                } else {
                    this.x -= interpolateSpeed(delta[0], ACCELERATION_FACTOR) / 200;
                    this.y += interpolateSpeed(delta[1], ACCELERATION_FACTOR) / 200;
                }
            } else {
                if (this.use == "wall") {
                    this.x -= interpolateSpeed(delta[1], ACCELERATION_FACTOR) / 200;
                    this.y -= interpolateSpeed(delta[0], ACCELERATION_FACTOR) / 200;
                } else {
                    this.x -= interpolateSpeed(delta[0], ACCELERATION_FACTOR) / 200;
                    this.y += interpolateSpeed(delta[1], ACCELERATION_FACTOR) / 200;
                }

            }
            this.ReviseCursorPos();

            var clickDownValue = quantitativeAnalysisVel(frame.hands[0], frame.hands[0].fingers[0], "clickdown");
            var clickUpValue = quantitativeAnalysisVel(frame.hands[0], frame.hands[0].fingers[0], "clickup");


            if (clickUpValue < TRESH_CLICKING[0]) {
                if (isThumbDown) {
                    isThumbDown = false;
                    this.cursorState = "active";
                    this.isDragging = false;
                }
            } else if (clickDownValue < TRESH_CLICKING[0]) {
                if (!isThumbDown) {
                    this.isDragging = false;
                    var _this = this;
                    setTimeout(function() {
                        _this.isDragging = true;

                    }, 500); //# drag time
                }
                isThumbDown = true;
                this.cursorState = "down";
            } else {
                if (!isThumbDown) {
                    this.cursorState = "active";
                    this.isDragging = false;
                }

            }
            if (this.isDragging && isThumbDown) {
                this.cursorState = "dragging";
            }
        } else {
            this.cursorState = "none";
            isThumbDown = false;
            this.isDragging = false;
        }
    }
}

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
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
var ACCELERATION_FACTOR = 8;
// leapDeviceMgr.addDevice("localhost", "right");
leapDeviceMgr.initDevice(1920, 1098);
leapDeviceMgr.addDevice("localhost", "right", GESTURE_ALL_RIGHT, rightOnFrame);
leapDeviceMgr.addDevice("192.168.20.128", "left", GESTURE_ALL_LEFT, leftOnFrame);
//leapDeviceMgr.addDevice(url, position, gesturelist, frameFn);
/*
frameFn(frame);
*/

leapDeviceMgr.start();