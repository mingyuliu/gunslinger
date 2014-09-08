//Config
var THR_HAND_CONFIDENCE = 0.20;
var ORDINAL_DISTANCE_WEIGHT = 0.65;
var THUMB_TIP_WEIGHT = 0.0;
var NB_FINGER_WEIGHT = 0.35;
var GESTURE_ICON_SIZE = 120;
var SCALE_RATIO = 1.5;
var FINGER_RENDER_MODE = 0;
var isVerboseInfoShonw = false;

var TOUCH_DISTANCE_RECONFIG = 400;

//scale of cursor
var CURSOR_SCALE = 2;

//screen
var SHRINK_RATIO = 541 / 1900;
var SCALE_TO_PIXEL = 200 / 57;

//CD Gain Config
var vMin = 10,
    vMax = 600,
    cdMin = 0.2,
    cdMax = 1900 / 80,
    ratio_inf = 0.5,
    lambda = 4 / (vMax - vMin),
    vel_inf = ratio_inf * (vMax - vMin) + vMin;
//OneEuroFilter
var freq = 60,
    mincutoff = 0.5,
    beta = 0.8,
    dcutoff = 0.3;

//Distance in mm
var DP_START = 110,
    DP_END = 270,
    DP_DANGER_RANGE = 30;


var DV_DANGER_RANGE = 40,
    DV_RATIO = 0.8,
    DV_BOUND = 0.3;


var leapDeviceMgr = (function () {

    var api = {};
    var _controllers = [];
    var screenWidth,
        screenHeight;

    var rightProgressbars = [],
        leftProgressbars = [];

    var ctxLeftGestures, ctxRightGestures;


    function createProgress() {
        var fingersPanel = document.createElement('canvas');
        fingersPanel.setAttribute('id', 'fingersPanel');
        fingersPanel.setAttribute('class', 'overlay');
        fingersPanel.width = canvasWidth;
        fingersPanel.height = canvasHeight;
        document.body.appendChild(fingersPanel);
        $("#fingersPanel").hide();

        var divProgressBar = document.createElement('div');
        divProgressBar.setAttribute('id', 'progressbar');
        document.body.appendChild(divProgressBar);
        $("#progressbar").hide();

        var rightGesturePanel = document.createElement('canvas');
        rightGesturePanel.setAttribute('id', 'rightGesturePanel');
        rightGesturePanel.setAttribute('class', 'gesturePanel');
        divProgressBar.appendChild(rightGesturePanel);
        var leftGesturePanel = document.createElement('canvas');
        leftGesturePanel.setAttribute('id', 'leftGesturePanel');
        leftGesturePanel.setAttribute('class', 'gesturePanel');
        divProgressBar.appendChild(leftGesturePanel);
        var rightGesturePanelContainer = document.createElement('canvas');
        rightGesturePanelContainer.setAttribute('id', 'rightGesturePanelContainer');
        rightGesturePanelContainer.setAttribute('class', 'gesturePanelContainer');
        divProgressBar.appendChild(rightGesturePanelContainer);
        var leftGesturePanelContainer = document.createElement('canvas');
        leftGesturePanelContainer.setAttribute('id', 'leftGesturePanelContainer');
        leftGesturePanelContainer.setAttribute('class', 'gesturePanelContainer');
        divProgressBar.appendChild(leftGesturePanelContainer);
        var rightTargetMask = document.createElement('canvas');
        rightTargetMask.setAttribute('id', 'rightTargetMask');
        rightTargetMask.setAttribute('class', 'targetMask');
        divProgressBar.appendChild(rightTargetMask);
        var leftTargetMask = document.createElement('canvas');
        leftTargetMask.setAttribute('id', 'leftTargetMask');
        leftTargetMask.setAttribute('class', 'targetMask');
        divProgressBar.appendChild(leftTargetMask);

        //Panels Init


        rightGesturePanel.width = GESTURE_ICON_SIZE * rightGestureList.length;
        rightGesturePanel.height = GESTURE_ICON_SIZE;
        rightGesturePanelContainer.width = GESTURE_ICON_SIZE * rightGestureList.length;
        rightGesturePanelContainer.height = GESTURE_ICON_SIZE * 1.2;


        ctxRightGestures = rightGesturePanel.getContext("2d");
// ctxRightGestures?.translate(canvas.width, canvas.height);


        rightGesturePanel.style.top = canvas.height - GESTURE_ICON_SIZE * 1.2 + "px";
        rightGesturePanel.style.left = (canvas.width / 2 - rightGesturePanel.width) / 2 + canvas.width / 2 + "px";
        rightGesturePanelContainer.style.top = canvas.height - GESTURE_ICON_SIZE * 1.2 + "px";
        rightGesturePanelContainer.style.left = (canvas.width / 2 - rightGesturePanel.width) / 2 + canvas.width / 2 + "px";

        var rightTargetMask = document.getElementById("rightTargetMask");

        rightTargetMask.style.top = canvas.height - GESTURE_ICON_SIZE * 1.15 + "px";
        rightTargetMask.style.left = (canvas.width / 2 - rightGesturePanel.width) / 2 + canvas.width / 2 + GESTURE_ICON_SIZE / 8 + GESTURE_ICON_SIZE * 0.02 + "px";

        rightTargetMask.width = GESTURE_ICON_SIZE * 0.70;
        rightTargetMask.height = GESTURE_ICON_SIZE * 0.70;

        var leftGesturePanel = document.getElementById("leftGesturePanel");

        leftGesturePanel.width = GESTURE_ICON_SIZE * rightGestureList.length;
        leftGesturePanel.height = GESTURE_ICON_SIZE;
        leftGesturePanelContainer.width = GESTURE_ICON_SIZE * rightGestureList.length;
        leftGesturePanelContainer.height = GESTURE_ICON_SIZE * 1.2;

        ctxLeftGestures = leftGesturePanel.getContext("2d");
// ctxRightGestures?.translate(canvas.width, canvas.height);


        leftGesturePanel.style.top = canvas.height - GESTURE_ICON_SIZE * 1.2 + "px";
        leftGesturePanel.style.left = (canvas.width / 2 - leftGesturePanel.width) / 2 + "px";
        leftGesturePanelContainer.style.top = canvas.height - GESTURE_ICON_SIZE * 1.2 + "px";
        leftGesturePanelContainer.style.left = (canvas.width / 2 - leftGesturePanel.width) / 2 + "px";

        var leftTargetMask = document.getElementById("leftTargetMask");

        leftTargetMask.style.top = canvas.height - GESTURE_ICON_SIZE * 1.15 + "px";
        leftTargetMask.style.left = (canvas.width / 2 - leftGesturePanel.width) / 2 + GESTURE_ICON_SIZE / 8 + GESTURE_ICON_SIZE * 0.02 + "px";

        leftTargetMask.width = GESTURE_ICON_SIZE * 0.70;
        leftTargetMask.height = GESTURE_ICON_SIZE * 0.70;
        //right

        var startPosX = (canvas.width / 2 - rightGesturePanel.width) / 2 + canvas.width / 2;
        var startPosY = canvas.height - GESTURE_ICON_SIZE * 0.7;
        for (var i = 0; i < rightGestureList.length; i++) {

            var div = document.createElement('div');
            div.setAttribute('class', 'meter red');
            div.setAttribute('id', 'rightProgressbar' + i);

            div.style.top = startPosY + "px";
            div.style.left = startPosX + i * GESTURE_ICON_SIZE + 5 + "px";
            div.style.zIndex = 10006;
            div.style.width = GESTURE_ICON_SIZE / 1.2 + "px";
            div.style.position = "absolute";
            div.style.opacity = "0.7";
            divProgressBar.appendChild(div);
            var span = document.createElement('span');
            span.setAttribute('style', 'width: 25%');
            var divEl = document.createElement('div');

            // span.innerHTML = "&nbsp&nbsp25%";
            div.appendChild(span);
            div.appendChild(divEl);
            rightProgressbars.push(span);


        }
        //left
        startPosX = (canvas.width / 2 - leftGesturePanel.width) / 2;
        startPosY = canvas.height - GESTURE_ICON_SIZE * 0.7;
        for (var i = 0; i < rightGestureList.length; i++) {

            var div = document.createElement('div');
            div.setAttribute('class', 'meter red');
            div.setAttribute('id', 'leftProgressbar' + i);

            div.style.top = startPosY + "px";
            div.style.left = startPosX + i * GESTURE_ICON_SIZE + 5 + "px";
            div.style.zIndex = 10006;
            div.style.width = GESTURE_ICON_SIZE / 1.2 + "px";
            div.style.position = "absolute";
            div.style.opacity = "0.7";
            divProgressBar.appendChild(div);
            var span = document.createElement('span');
            span.setAttribute('style', 'width: 25%');
            var divEl = document.createElement('div');

            // span.innerHTML = "&nbsp&nbsp25%";
            div.appendChild(span);
            div.appendChild(divEl);
            leftProgressbars.push(span);

        }

    }

    function drawMaskOnIcon(target, whichhand) {
        if (whichhand == "right") {
            var originX = rightTargetMask.style.left;
            var index = originX.indexOf('p');
            var originX = originX.substr(0, index);

            var startX = (canvas.width / 2 - rightGesturePanel.width) / 2 + canvas.width / 2 + GESTURE_ICON_SIZE / 8 + GESTURE_ICON_SIZE * 0.02;
            var targetX = startX + target * GESTURE_ICON_SIZE;
            // if (targetX > originX) {
            move("#rightTargetMask")
                .x(targetX - originX)
                .duration('0.2s')
                .end();
        } else if (whichhand == "left") {
            var originX = leftTargetMask.style.left;
            var index = originX.indexOf('p');
            var originX = originX.substr(0, index);

            var startX = (canvas.width / 2 - leftGesturePanel.width) / 2 + GESTURE_ICON_SIZE / 8 + GESTURE_ICON_SIZE * 0.02;
            var targetX = startX + target * GESTURE_ICON_SIZE;
            // if (targetX > originX) {
            move("#leftTargetMask")
                .x(targetX - originX)
                .duration('0.2s')
                .end();
        } else {
            move("#rightTargetMask")
                .x(originX - targetX)
                .end();
        }
    }

    function updateProgressBar(list, whichhand, minIndex) {
        switch (whichhand) {
            case "left":
                var closest = Number.MIN_VALUE;
                var closestIndex = 0;
                for (var i = 0; i < list.length; i++) {
                    var progress = Math.max(0, 1 - list[i].val.toFixed(3));

                    if (closest < progress) {
                        closest = progress;
                        closestIndex = i;
                    }

                    if (progress > .80) {
                        var parentEl = leftProgressbars[i].parentNode;
                        parentEl.setAttribute('class', 'meter');
                    } else {
                        var parentEl = leftProgressbars[i].parentNode;
                        parentEl.setAttribute('class', 'meter red');
                    }
                    leftProgressbars[i].setAttribute('style', 'width: ' + progress * 100 + '%');

                }
                drawMaskOnIcon(closestIndex, whichhand);
                break;
            case "right":
                var closest = Number.MIN_VALUE;
                var closestIndex = 0;
                for (var i = 0; i < list.length; i++) {
                    var progress = Math.max(0, 1 - list[i].val.toFixed(3));

                    if (closest < progress) {
                        closest = progress;
                        closestIndex = i;
                    }

                    if (progress > .80) {
                        var parentEl = rightProgressbars[i].parentNode;
                        parentEl.setAttribute('class', 'meter');
                    } else {
                        var parentEl = rightProgressbars[i].parentNode;
                        parentEl.setAttribute('class', 'meter red');
                    }
                    rightProgressbars[i].setAttribute('style', 'width: ' + progress * 100 + '%');

                }
                drawMaskOnIcon(closestIndex, whichhand);

                break;
        }
    }


    getFilteredFrame = function (frame) {
        //TODO
    };

    getExtendedCount = function (fingers) {
        var count = 0;
        for (var i = 0; i < fingers.length; i++) {
            if (fingers[i].extended) {
                count++;
            }
        }
        return count;
    };

    createDebugTextElement = function () {
        var div = document.createElement('div');
        div.setAttribute('id', 'frameDataRight');

        var div2 = document.createElement('div');
        div2.setAttribute('id', 'frameDataLeft');


        document.body.appendChild(div);
        document.body.appendChild(div2);

        $("#frameDataRight").hide()
        $("#frameDataRight").css("z-index", "0");
        $("#frameDataRight").css("z-index", "0");

        $("#frameDataLeft").hide()
        $("#frameDataRight").css("z-index", "0");
    }

    function angle2Lines2dCos(v1, v2) {
        var m1, n1, m2, n2;

        m1 = v1[0];
        n1 = v1[1];


        m2 = v2[0];
        n2 = v2[1];

        return (m1 * m2 + n1 * n2) / (Math.sqrt(m1 * m1 + n1 * n1) * Math.sqrt(m2 * m2 + n2 * n2));

    }

    function drawFingers(frame, whichhand) {
        if (whichhand != "right") return;
//        context.translate(canvas.width, canvas.height);
//        context.clearRect(0, 0, canvas.width, canvas.height);
        var fingersPanel = document.getElementById("fingersPanel");
        var context = fingersPanel.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);

        var hand = frame.hands[0];
        var extendedAlpha = 1.0;

        var centerX = -document.body.clientWidth / 2;
        var centerY = -document.body.clientHeight / 2;


        var yNormal = [0, 1];
        var str = "angles: ";

        var xPos, yPos;
        var startX, startY;
        var tempStr;
        var handLen = 30;
        if (hand == undefined) return;
        var fingers = hand.fingers || {};
        if (fingers.length == 0) {
            return;
        }
        if (hand.confidence < THR_HAND_CONFIDENCE) {
            return;
        }
        switch (FINGER_RENDER_MODE) {
            case 0:
                var offset = 250;

                var handProjDir = [hand.direction[0], hand.direction[2]];
                var handProjPos = [hand.palmPosition[0], hand.palmPosition[2]];
                if (handProjDir[0] >= 0) {
                    var cos = angle2Lines2dCos(yNormal, handProjDir);
                    yPos = handLen * cos;
                    xPos = Math.sqrt(handLen * handLen - yPos * yPos);
                    startY = handProjPos[1];
                    startX = handProjPos[0];
                } else {
                    var cos = angle2Lines2dCos(yNormal, handProjDir);
                    yPos = handLen * cos;
                    xPos = -Math.sqrt(handLen * handLen - yPos * yPos);
                    startY = handProjPos[1];
                    startX = handProjPos[0];
                }
                var distance = startX * startX + startY * startY;

                context.shadowBlur = 20;
                context.shadowColor = '#000000';

                context.strokeStyle = "rgba(255, 153, 0, 1)";
                context.lineCap = "round";
                context.beginPath();
                context.arc(startX - centerX, startY - centerY, 8, 0, 2 * Math.PI);
                context.fill();
                context.moveTo(startX - centerX, startY - centerY);
                context.lineTo(xPos + startX - centerX, yPos + startY - centerY);
                context.lineWidth = 10;

                context.stroke();


                var fingerTipsPos = [];
                for (var i = 0; i < fingers.length; i++) {
                    fingerTipsPos.push([fingers[i].mcpPosition, fingers[i].pipPosition, fingers[i].dipPosition, fingers[i].tipPosition]);

                }

                for (var i = 0; i < fingerTipsPos.length; i++) {
                    for (var j = 0; j < 3; j++) {
                        extendedAlpha = (fingers[i].extended ? 1 : 0.2);
                        context.shadowBlur = 5;
                        context.shadowColor = '#000000';
                        context.strokeStyle = "rgba(255, 0, 51," + extendedAlpha + ")";
                        context.beginPath();
                        context.moveTo(fingerTipsPos[i][j][0] - centerX, fingerTipsPos[i][j][2] - centerY);
                        context.lineTo(fingerTipsPos[i][j + 1][0] - centerX, fingerTipsPos[i][j + 1][2] - centerY);
                        context.lineWidth = 8;

                        context.lineCap = "round";
                        context.stroke();
                    }

                }


                break;
            case 1:
                var offset = 250;

                var handProjDir = [hand.direction[0], hand.direction[2]];
                var handProjPos = [hand.palmPosition[0], hand.palmPosition[2]];
                if (handProjDir[0] >= 0) {
                    var cos = angle2Lines2dCos(yNormal, handProjDir);
                    yPos = handLen * cos;
                    xPos = Math.sqrt(handLen * handLen - yPos * yPos);
                    startY = handProjPos[1];
                    startX = handProjPos[0];
                } else {
                    var cos = angle2Lines2dCos(yNormal, handProjDir);
                    yPos = handLen * cos;
                    xPos = -Math.sqrt(handLen * handLen - yPos * yPos);
                    startY = handProjPos[1];
                    startX = handProjPos[0];
                }
                var distance = startX * startX + startY * startY;

                context.shadowBlur = 20;
                context.shadowColor = '#000000';

                context.strokeStyle = "rgba(255, 153, 0, 1)";
                context.lineCap = "round";
                context.beginPath();
                context.arc(startX - centerX, startY - centerY, 8, 0, 2 * Math.PI);
                context.fill();
                context.moveTo(startX - centerX, startY - centerY);
                context.lineTo(xPos + startX - centerX, yPos + startY - centerY);
                context.lineWidth = 10;

                context.stroke();


                for (var i = 0; i < fingers.length; i++) {

                    var fingerProjDir = [fingers[i].direction[0], fingers[i].direction[2]];
                    var fingerProjPos = [fingers[i].tipPosition[0], fingers[i].tipPosition[2]];
                    var fingerLen = fingers[i].length;

                    if (fingerProjDir[0] >= 0) {
                        var cos = angle2Lines2dCos(yNormal, fingerProjDir);
                        yPos = -fingerLen * cos;
                        xPos = -Math.sqrt(fingerLen * fingerLen - yPos * yPos);
                        startY = fingerProjPos[1];
                        startX = fingerProjPos[0];
                    } else {
                        var cos = angle2Lines2dCos(yNormal, fingerProjDir);
                        yPos = -fingerLen * cos;
                        xPos = Math.sqrt(fingerLen * fingerLen - yPos * yPos);
                        startY = fingerProjPos[1];
                        startX = fingerProjPos[0];
                    }
                    extendedAlpha = (fingers[i].extended ? 1 : 0.2);
                    context.shadowBlur = 5;
                    context.shadowColor = '#000000';
                    context.strokeStyle = "rgba(255, 0, 51," + extendedAlpha + ")";
                    context.beginPath();
                    context.moveTo(startX - centerX, startY - centerY);
                    context.lineTo(xPos + startX - centerX, yPos + startY - centerY);
                    context.lineWidth = 8;

                    context.lineCap = "round";
                    context.stroke();
                }


                break;
        }
//        context.translate(-canvas.width, -canvas.height);
    }

    function drawGestures() {

        ctxRightGestures.clearRect(0, 0, rightGesturePanel.width, rightGesturePanel.height);

        ctxRightGestures.lineCap = "round";
        // // ctxRightGestures.beginPath();
        // ctxRightGestures.fillStyle = "rgba(200,200,200,0.6)";
        // ctxRightGestures.fillRect(0, 0, rightGesturePanel.width, rightGesturePanel.height);

        for (var i = 0; i < rightGestureList.length; i++) {
            var handX = (i + 0.5) * GESTURE_ICON_SIZE;
            var handY = GESTURE_ICON_SIZE / 1.6;

            ctxRightGestures.fillStyle = "rgba(255, 153, 0, 1.0)";
            ctxRightGestures.strokeStyle = "rgba(255, 153, 0, 1.0)";


            var startX = rightGestureList[i].hand.start[0] / SCALE_RATIO;
            var startY = rightGestureList[i].hand.start[1] / SCALE_RATIO;
            var endX = rightGestureList[i].hand.end[0] / SCALE_RATIO;
            var endY = rightGestureList[i].hand.end[1] / SCALE_RATIO;
            ctxRightGestures.shadowBlur = 2;
            ctxRightGestures.shadowColor = '#2B2B2B';

            ctxRightGestures.lineCap = "round";
            ctxRightGestures.beginPath();
            ctxRightGestures.arc(startX + handX, startY + handY, 4, 0, 2 * Math.PI);
            ctxRightGestures.fill();
            ctxRightGestures.moveTo(startX + handX, startY + handY);
            ctxRightGestures.lineTo(endX + handX, endY + handY);
            ctxRightGestures.lineWidth = 10;

            ctxRightGestures.stroke();

            for (var j = 0; j < rightGestureList[i].fingers.length; j++) {

                var startX = rightGestureList[i].fingers[j].start[0] / SCALE_RATIO;
                var startY = rightGestureList[i].fingers[j].start[1] / SCALE_RATIO;
                var endX = rightGestureList[i].fingers[j].end[0] / SCALE_RATIO;
                var endY = rightGestureList[i].fingers[j].end[1] / SCALE_RATIO;

                ctxRightGestures.shadowBlur = 2;
                ctxRightGestures.shadowColor = '#2B2B2B';
                ctxRightGestures.strokeStyle = "rgba(255, 0, 51, 0.8)";
                ctxRightGestures.beginPath();
                ctxRightGestures.moveTo(startX + handX, startY + handY);
                ctxRightGestures.lineTo(endX + handX, endY + handY);
                ctxRightGestures.lineWidth = 8;
                ctxRightGestures.stroke();
            }

            ctxRightGestures.fillStyle = "rgba(0,0,0,1.0)";
            ctxRightGestures.font = "20px Verdana bold";
            var textLen = rightHandGesture[i].type.length * 20;
            ctxRightGestures.fillText(rightHandGesture[i].type, handX - textLen / 4, GESTURE_ICON_SIZE * 0.92);
        }

        ctxLeftGestures.clearRect(0, 0, leftGesturePanel.width, leftGesturePanel.height);

        ctxLeftGestures.lineCap = "round";


        for (var i = 0; i < rightGestureList.length; i++) {
            var handX = (i + 0.5) * GESTURE_ICON_SIZE;
            var handY = GESTURE_ICON_SIZE / 1.6;

            ctxLeftGestures.fillStyle = "rgba(255, 153, 0, 1.0)";
            ctxLeftGestures.strokeStyle = "rgba(255, 153, 0, 1.0)";


            var startX = rightGestureList[i].hand.start[0] / SCALE_RATIO;
            var startY = rightGestureList[i].hand.start[1] / SCALE_RATIO;
            var endX = rightGestureList[i].hand.end[0] / SCALE_RATIO;
            var endY = rightGestureList[i].hand.end[1] / SCALE_RATIO;
            ctxLeftGestures.shadowBlur = 2;
            ctxLeftGestures.shadowColor = '#2B2B2B';

            ctxLeftGestures.lineCap = "round";
            ctxLeftGestures.beginPath();
            ctxLeftGestures.arc(startX + handX, startY + handY, 4, 0, 2 * Math.PI);
            ctxLeftGestures.fill();
            ctxLeftGestures.moveTo(startX + handX, startY + handY);
            ctxLeftGestures.lineTo(endX + handX, endY + handY);
            ctxLeftGestures.lineWidth = 10;

            ctxLeftGestures.stroke();

            for (var j = 0; j < rightGestureList[i].fingers.length; j++) {

                var startX = rightGestureList[i].fingers[j].start[0] / SCALE_RATIO;
                var startY = rightGestureList[i].fingers[j].start[1] / SCALE_RATIO;
                var endX = rightGestureList[i].fingers[j].end[0] / SCALE_RATIO;
                var endY = rightGestureList[i].fingers[j].end[1] / SCALE_RATIO;

                ctxLeftGestures.shadowBlur = 2;
                ctxLeftGestures.shadowColor = '#2B2B2B';
                ctxLeftGestures.strokeStyle = "rgba(255, 0, 51, 0.8)";
                ctxLeftGestures.beginPath();
                ctxLeftGestures.moveTo(startX + handX, startY + handY);
                ctxLeftGestures.lineTo(endX + handX, endY + handY);
                ctxLeftGestures.lineWidth = 8;
                ctxLeftGestures.stroke();
            }

            ctxLeftGestures.fillStyle = "rgba(0,0,0,1.0)";
            ctxLeftGestures.font = "20px Verdana bold";
            var textLen = rightHandGesture[i].type.length * 20;
            ctxLeftGestures.fillText(rightHandGesture[i].type, handX - textLen / 4, GESTURE_ICON_SIZE * 0.92);
        }
    }

    var fps = {
        startTime: 0,
        frameNumber: 0,
        getFPS: function () {
            this.frameNumber++;
            var d = new Date().getTime(),
                currentTime = ( d - this.startTime ) / 1000,
                result = Math.floor(( this.frameNumber / currentTime ));

            if (currentTime > 1) {
                this.startTime = new Date().getTime();
                this.frameNumber = 0;
            }
            return result;

        }
    };

//    updateTouches = function (touches) {
//        for (var i = 0; i<touches.length; i++) {
//            var px = touches[i].pageX;
//            var py = touches[i].pageY;
//
//            ctxTouch.beginPath();
//            ctxTouch.arc(px, py, 20, 0, 2*Math.PI, true);
//
//            ctxTouch.fillStyle = "rgba(0, 0, 200, 0.2)";
//            ctxTouch.fill();
//
//            ctxTouch.lineWidth = 2.0;
//            ctxTouch.strokeStyle = "rgba(0, 0, 200, 0.8)";
//            ctxTouch.stroke();
//        }
//    }

    filterFingers = function (frame, tag) {
        if (frame.hands.length > 0) {
            var hand = frame.hands[0];
            if (hand.confidence < THR_HAND_CONFIDENCE) {
                frame.hands[0] = undefined;
                return;
            }
            //TODO finger filtering
            var fingers = hand.fingers;

            /*only apply distance filter when less than 4 fingers are extended
             this is used to filter out fingers that glued together
             */

            if (getExtendedCount(fingers) < 4) {
                var len = fingers.length;
                while (len > 2) {
                    len--;
                    var fin1 = Leap.vec3.fromValues(fingers[len].tipPosition[0], 0, fingers[len].tipPosition[2]);
                    var fin2 = Leap.vec3.fromValues(fingers[len - 1].tipPosition[0], 0, fingers[len - 1].tipPosition[2]);
                    var differ = Leap.vec3.distance(fin1, fin2);
                    if (Leap.vec3.distance(fin1, fin2) < 20) {    //heuristics
                        if (fingers[len].type != 0) {
                            fingers[len].extended = false;
                        }
                    }
                }
            }

            //compare bones in thumb to determine whether it's extended or not

            if (fingers.length > 1) {
                var thumbProj = [fingers[0].tipPosition[0], 0, fingers[0].tipPosition[2]];

                var indexProj = [fingers[1].mcpPosition[0], 0, fingers[1].mcpPosition[2]];

                var differ = Leap.vec3.distance(thumbProj, indexProj);

                if (differ > 20) {
                    if (thumbProj[0] < indexProj[0] && tag == "right") {
                        fingers[0].extended = true;
                    }
                    if (thumbProj[0] > indexProj[0] && tag == "left") {
                        fingers[0].extended = true;
                    }
                }

            }

        }
    };


    api.showVerboseInfo = function () {
        $("#frameDataRight").show();
        $("#frameDataLeft").show();
        $("#progressbar").show();
        $("#fingersPanel").show();
        drawGestures();
        isVerboseInfoShonw = true;
    };

    api.initDevice = function (screenWid_, screenHeight_) {
        screenWidth = screenWid_;
        screenHeight = screenHeight_;


    };

    api.getControls = function () {
        return _controllers;
    }

    api.numberOfDev = function () {
        return _controllers.length;
    };


    api.addDevice = function (url, tag, gestureList, onFrameLoop) {
        var controller = new Leap.Controller({
            host: url,
            port: 6437,
            enableGestures: true,
            frameEventName: 'animationFrame',
            useAllPlugins: true
        });

        controller.valid = true;
        controller.tag = tag;
        controller.gestureList = gestureList;
        controller.analyzer = new quanAnalyzer(tag, gestureList);
        controller.onFrameLoop = onFrameLoop || function () {
            // body...
        };
        controller.controls = new Controls(tag, screenWidth, screenHeight);

//        controller.use('riggedHand');
        controller.connect();

        controller.setBackground(true); //enable

        _controllers.push(controller);

    };

    api.start = function () {
        //for test gui
//        createProgress();
        createDebugTextElement();

        for (var i = 0; i < _controllers.length; i++) {
            _controllers[i].loop(function (frame) {
                //for test gui

                if (!this.valid) return;
                //Filter out folded fingers
                filterFingers(frame, this.tag);

                this.analyzer.update(frame, this.tag);
                if (isVerboseInfoShonw) {

                    drawFingers(frame, this.tag);
                    updateProgressBar(this.analyzer.getList(), this.tag, this.analyzer.getMinIndex());
                }

                this.controls.update(this.gestureList[this.analyzer.getMinIndex()], this.analyzer.getMinVal(), frame);
                this.onFrameLoop(this.controls);

                if (this.controls.valid) {
                    window["interstate"]["fsm"]["leap" + this.tag]();
                } else {
                    window["interstate"]["fsm"]["noLeap" + this.tag]();
                }

//                interstate.update();
                //debug info: fps
//                var frameOutput = document.getElementById("frameDataLeft");
//                frameOutput.innerHTML = "<div style='width:650px; font-size: 30px;float:left; padding:5px; position:absolute; top:10px; left:10px''>" + interstate.fsm.current + "</div>";
//                $("#frameDataLeft").show();
            });

        }
    };

    api.printInfo = function (msg) {
        var frameOutput = document.getElementById("frameDataLeft");
        frameOutput.innerHTML = "<div style='width:650px; font-size: 30px;float:left; padding:5px; position:absolute; top:10px; left:10px''>" + msg + "</div>";
        $("#frameDataLeft").show();
    };

    api.printRightInfo = function (msg) {
        var frameOutput = document.getElementById("frameDataRight");
        frameOutput.innerHTML = "<div style='width:650px; font-size: 30px;float:right; padding:5px; position:absolute; top:10px; right:10px'>" + msg + "</div>";
        $("#frameDataRight").show();
    };

    api.getController = function (controllerIndex) {
        return _controllers[controllerIndex];
    };

    api.disableDeviceByTag = function (tag_) {
        var len = _controllers.length;
        while (len--) {
            if (_controllers[len].tag == tag_) {
                _controllers[len].valid = false;
                break;
            }
        }
    };

    api.enableDeviceByTag = function (tag_) {
        var len = _controllers.length;
        while (len--) {
            if (_controllers[len].tag == tag_) {
                _controllers[len].valid = true;
                break;
            }
        }
    };


    return api;
})();


function quanAnalyzer(tag, gestureList) {
    this._list = [];
    this._gestures = [];

    var gestures = JSON.parse(localStorage.rightGestures);
    for (var i = 0; i < gestureList.length; i++) {
        var result = gestures.filter(function (v) {
            return v.type === gestureList[i]; // filter out appropriate one
        });
        this._gestures.push(result[0]);
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

    this.resetVal = function () {
        for (var i = 0; i < this._gestures.length; i++) {
            this._list[i].val = 1;
        }
        this._list[0].val = 0;
    }

    this.clearNonVal = function () {
        this._list[0].val = 1;
    }

    this.update = function (frame) {
        var hand = frame.hands[0];
        var fingers = [];
        if (hand != undefined) {

            fingers = frame.hands[0].fingers;
        } else {
            this.resetVal();
            return;
        }
        if (getExtendedCount(fingers) == 0) {
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
//            distanceStr += this._gestures[p].type + "\t\tordinal: " + ordinalDistance.toFixed(3) + " thumb: " + thumbTipDistance.toFixed(3) + " digit: " + nbDigitDistance.toFixed(3) + "<br />";
        }
        if (isVerboseInfoShonw) {

            switch (tag) {
                case "right":
                    var frameOutput = document.getElementById("frameDataRight");

                    var str = "";
                    for (var i = 0; i < this._list.length; i++) {
                        str += this._list[i].val + " , ";
                    }

                    var distanceToThumb;

                    distanceToThumb = Leap.vec3.distance(fingers[0].tipPosition, fingers[1].mcpPosition);
                    distanceStr += "thumbTip to indexMcp: " + distanceToThumb.toFixed(2) + "<br />";
                    distanceToThumb = Leap.vec3.distance(fingers[0].tipPosition, hand.palmPosition);
                    distanceStr += "thumbTip to palmCtr: " + distanceToThumb.toFixed(2) + "<br />";

//                    distanceStr += "pinch:" + hand.pitch()+" roll:"+hand.roll();
                    //Angle difference
                    var angle = this.angleBtLines([0, 0, -1], [hand.direction[0], 0, hand.direction[2]]);

                    if (hand.direction[0] < 0) {
                        angle = -angle;
                    }

                    distanceStr += "vel: " + vec3.len(fingers[0].tipVelocity).toFixed(2) + "<br />";
                    distanceStr += "hand roll: " + hand.roll().toFixed(2) + "<br />";
                    distanceStr += "hand pitch: " + hand.pitch().toFixed(2) + "<br />";

                    var modelView = mat4.create();
                    mat4.identity(modelView); // Set to identity
                    mat4.rotateY(modelView, modelView, Math.PI * angle / 180);
                    mat4.rotateZ(modelView, modelView, -hand.roll().toFixed(2));
                    mat4.rotateX(modelView, modelView, -hand.pitch().toFixed(2));
                    var distanceVec = vec3.create();
                    vec3.sub(distanceVec, fingers[0].tipPosition, hand.palmPosition);
                    vec3.transformMat4(distanceVec, distanceVec, modelView);

                    distanceStr += "thumb distance: " + distanceVec[0] + "<br />";
//                    console.log("dis:"+Leap.vec3.str(distanceVec));

                    frameOutput.innerHTML = "<div style='width:650px; font-size: 30px;float:right; padding:5px; position:absolute; top:10px; right:10px'>" + distanceStr + "</div>";
                    break;
            }
        }

        // console.log(str);
    };

    this.getMinIndex = function () {
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

    this.getMinVal = function () {
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
            return minVal;
        }
    };

    this.getList = function () {
        return this._list;
    };
}

var touchMgr = (function () {

    var api = {};
    api.currentTouches = [];
    api.afterTouchStartHandler = {};
    api.touchMoveHandler = {};
    api.touchEndHandler = {};
    api.afterTouchMoveHandler = {};


    var canvas;
    var ctx;

    api.rightGroupCtr = [0, 0];
    api.leftGroupCtr = [0, 0];
    api.lastRightPos = [Number.MAX_VALUE, Number.MAX_VALUE];
    api.lastLeftPos = [Number.MAX_VALUE, Number.MAX_VALUE];

    // Finds the array index of a touch in the currentTouches array.
    var findCurrentTouchIndex = function (id) {
        for (var i = 0; i < touchMgr.currentTouches.length; i++) {
            if (touchMgr.currentTouches[i].id === id) {
                return i;
            }
        }

        // Touch not found! Return -1.
        return -1;
    };

    api.getTouchByIndex = function (id) {
        var currentTouchIndex = findCurrentTouchIndex(id);


        return touchMgr.currentTouches[currentTouchIndex];
    }

    var toggleHand = function (whichhand) {
        if (whichhand == "right") {
            return "left";
        } else {
            return "right"
        }
    };


    var checkTwoTouches = function () {
        var leftCenter = calculateCenter("left");
        var rightCenter = calculateCenter("right");

        if (leftCenter[0] > rightCenter[0]) {
            swapAllTouches();
        }
    }

    var swapAllTouches = function () {
        for (var i = 0; i < touchMgr.currentTouches.length; i++) {
            touchMgr.currentTouches[i].whichhand = toggleHand(touchMgr.currentTouches[i].whichhand);
        }
    }


    var calculateCenter = function (whichhand) {
        var posX = 0, posY = 0;
        var counter = 0;
        switch (whichhand) {
            case "right":
                for (var i = 0; i < touchMgr.currentTouches.length; i++) {
                    if (touchMgr.currentTouches[i].whichhand == "right") {
                        posX += touchMgr.currentTouches[i].pageX;
                        posY += touchMgr.currentTouches[i].pageY;
                        counter++;
                    }
                }
                posX /= counter;
                posY /= counter;
                break;
            case "left":
                for (var i = 0; i < touchMgr.currentTouches.length; i++) {
                    if (touchMgr.currentTouches[i].whichhand == "left") {
                        posX += touchMgr.currentTouches[i].pageX;
                        posY += touchMgr.currentTouches[i].pageY;
                        counter++;
                    }
                }
                posX /= counter;
                posY /= counter;
                break;
            case "all":
                for (var i = 0; i < touchMgr.currentTouches.length; i++) {
                    posX += touchMgr.currentTouches[i].pageX;
                    posY += touchMgr.currentTouches[i].pageY;
                    counter++;
                }
                posX /= counter;
                posY /= counter;
                break;
        }
        return [posX, posY];
    };


    api.calculateCenter = calculateCenter;

    var getPreviousTouch = function (whichhand) {
        switch (whichhand) {
            case "right":
                for (var i = touchMgr.currentTouches.length - 1; i >= 0; i--) {
                    if (touchMgr.currentTouches[i].whichhand == "right") {
                        return touchMgr.currentTouches[i];
                    }
                }
                break;
            case "left":
                for (var i = touchMgr.currentTouches.length - 1; i >= 0; i--) {
                    if (touchMgr.currentTouches[i].whichhand == "left") {
                        return touchMgr.currentTouches[i];
                    }
                }
                break;
        }
    }

    var updateGroupTouches = function (whichhand, groupNum) {
        switch (whichhand) {
            case "right":
                for (var i = 0; i < touchMgr.currentTouches.length; i++) {
                    if (touchMgr.currentTouches[i].whichhand == "right" && (touchMgr.currentTouches[i].group !== 0)) {
                        touchMgr.currentTouches[i].group = groupNum;
                    }
                }
                touchMgr.rightGroupCtr = touchMgr.calculateCenter("right");
                break;
            case "left":
                for (var i = 0; i < touchMgr.currentTouches.length; i++) {
                    if (touchMgr.currentTouches[i].whichhand == "left" && (touchMgr.currentTouches[i].group !== 0)) {
                        touchMgr.currentTouches[i].group = groupNum;

                    }
                }
                touchMgr.leftGroupCtr = touchMgr.calculateCenter("left");
                break;

        }
    };

    var countTouches = function (whichhand) {
        var counter = 0;
        switch (whichhand) {
            case "right":
                for (var i = 0; i < touchMgr.currentTouches.length; i++) {
                    if (touchMgr.currentTouches[i].whichhand == "right") {
                        counter++;
                    }
                }
                break;
            case "left":
                for (var i = 0; i < touchMgr.currentTouches.length; i++) {
                    if (touchMgr.currentTouches[i].whichhand == "left") {
                        counter++;
                    }
                }
                break;
            case "all":
                for (var i = 0; i < touchMgr.currentTouches.length; i++) {
                    counter++;
                }
                break;
        }
        return counter;
    };

    api.countTouches = countTouches;


    // Creates a new touch in the touchMgr.currentTouches array and draws the starting
    // point on the canvas.
    var touchStarted = function (event) {
        var touches = event.changedTouches;
        var d = new Date().getTime();
        for (var i = 0; i < touches.length; i++) {

            var touch = touches[i];
            var hand = "right";
            if (interstate.fsm.current == "waitLeft" || interstate.fsm.current == "unknownLeft") {
                hand = "left";
            }


            if (touchMgr.currentTouches.length == 0) {
                if (hand === "right") {
                    var distance = vec2.dist(touchMgr.lastLeftPos, [touch.pageX, touch.pageY]);
                    if (distance < TOUCH_DISTANCE_RECONFIG) {
                        hand = "left";
                        interstate.fsm.leapright();
                    }
                } else if (hand === "left") {
                    var distance = vec2.dist(touchMgr.lastRightPos, [touch.pageX, touch.pageY]);
                    if (distance < TOUCH_DISTANCE_RECONFIG) {
                        hand = "right";
                        interstate.fsm.leapleft();
                    }
                }

                interstate.fsm.newTouch();

                touchMgr.currentTouches.push({
                    id: touch.identifier,
                    pageX: touch.pageX,
                    pageY: touch.pageY,
                    whichhand: hand,
                    starttime: d,
                    group: 0
                });
            } else if (interstate.fsm.current == "twoTouches") {
                var newTouchVec = vec2.fromValues(touch.pageX, touch.pageY);
                var rightCtr = calculateCenter("right");
                var leftCtr = calculateCenter("left");

                var leftDis = vec2.dist(newTouchVec, leftCtr);
                var rightDis = vec2.dist(newTouchVec, rightCtr);

                if (leftDis < rightDis) {
                    var previousTouch = getPreviousTouch("left");
                    var groupNum = 0;
                    if ((d - previousTouch.starttime) < 30) {
                        previousTouch.group++;
                        groupNum = previousTouch.group;
                    }
                    touchMgr.currentTouches.push({
                        id: touch.identifier,
                        pageX: touch.pageX,
                        pageY: touch.pageY,
                        whichhand: "left",
                        starttime: d,
                        group: groupNum
                    });
                    updateGroupTouches(previousTouch.whichhand, previousTouch.group);
                } else {
                    var previousTouch = getPreviousTouch("right");
                    var groupNum = 0;
                    if ((d - previousTouch.starttime) < 30) {
                        previousTouch.group++;
                        groupNum = previousTouch.group;
                    }
                    touchMgr.currentTouches.push({
                        id: touch.identifier,
                        pageX: touch.pageX,
                        pageY: touch.pageY,
                        whichhand: "right",
                        starttime: d,
                        group: groupNum
                    });
                    updateGroupTouches(previousTouch.whichhand, previousTouch.group);
                }

            } else {
                var newTouchVec = vec2.fromValues(touch.pageX, touch.pageY);
                var touchCtr = calculateCenter("all");

                var dis = vec2.dist(newTouchVec, touchCtr);
                if (dis > 300) {
                    touchMgr.currentTouches.push({
                        id: touch.identifier,
                        pageX: touch.pageX,
                        pageY: touch.pageY,
                        whichhand: toggleHand(touchMgr.currentTouches[0].whichhand),
                        starttime: d,
                        group: 0
                    });
                    checkTwoTouches();
                    interstate.fsm.newTouchFar();

                } else {
                    var previousTouch = touchMgr.currentTouches[touchMgr.currentTouches.length - 1];
                    var groupNum = 0;
                    if ((d - previousTouch.starttime) < 30) {
                        previousTouch.group++;
                        groupNum = previousTouch.group;
                    }
                    touchMgr.currentTouches.push({
                        id: touch.identifier,
                        pageX: touch.pageX,
                        pageY: touch.pageY,
                        whichhand: touchMgr.currentTouches[0].whichhand,
                        starttime: d,
                        group: groupNum
                    });
                    updateGroupTouches(previousTouch.whichhand, previousTouch.group);
                }
            }
            touchMgr.afterTouchStartHandler(touchMgr.currentTouches[touchMgr.currentTouches.length - 1]);
            var devices = leapDeviceMgr.getControls();
            for (var i = 0; i < devices.length; i++) {
                if (devices[i].controls.valid) {
                    window["interstate"]["fsm"]["leap" + devices[i].controls.tag]();
                } else {
                    window["interstate"]["fsm"]["noLeap" + devices[i].controls.tag]();
                }
            }

        }

    };


    // Draws a line on the canvas between the previous touch location and
    // the new location.
    var touchMoved = function (event) {
        var touches = event.changedTouches;

//        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < touches.length; i++) {
            var touch = touches[i];
            var currentTouchIndex = findCurrentTouchIndex(touch.identifier);

            if (currentTouchIndex >= 0) {
                var currentTouch = touchMgr.currentTouches[currentTouchIndex];


                //handle event

                touchMgr.touchMoveHandler(currentTouch, currentTouch.pageX - touch.pageX, currentTouch.pageY - touch.pageY);

                // Update the touch record.
                currentTouch.pageX = touch.pageX;
                currentTouch.pageY = touch.pageY;

                var px = touch.pageX;
                var py = touch.pageY;

                ctx.beginPath();
                ctx.arc(px, py, 20, 0, 2 * Math.PI, true);

                if (currentTouch.whichhand == "right") {

                    ctx.fillStyle = "rgba(0, 0, 200, 0.2)";
                    ctx.strokeStyle = "rgba(0, 0, 200, 0.8)";
                } else {
                    //left handler
                    ctx.fillStyle = "rgba(200, 0, 200, 0.2)";
                    ctx.strokeStyle = "rgba(200, 0, 200, 0.8)";

                }

                ctx.fill();

                ctx.lineWidth = 2.0;
                ctx.stroke();

                // Store the record.
                touchMgr.currentTouches.splice(currentTouchIndex, 1, currentTouch);
                touchMgr.afterTouchMoveHandler(currentTouch);
            }
            else {
                console.log('Touch was not found!');
            }


        }

    };


    // Draws a line to the final touch position on the canvas and then
    // removes the touh from the touchMgr.currentTouches array.
    var touchEnded = function (event) {
        var touches = event.changedTouches;

        for (var i = 0; i < touches.length; i++) {
            var touch = touches[i];
            var currentTouchIndex = findCurrentTouchIndex(touch.identifier);

            if (currentTouchIndex >= 0) {
                var currentTouch = touchMgr.currentTouches[currentTouchIndex];
                touchMgr.touchEndHandler(currentTouch);

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                var touchWhichHand = currentTouch.whichhand;

                // Remove the record.
                touchMgr.currentTouches.splice(currentTouchIndex, 1);

                var counts = countTouches("all");
                if (counts == 0) {
                    interstate.fsm.noTouch();
                    if (touchWhichHand === "right") {
                        touchMgr.lastRightPos = [touch.pageX, touch.pageY];
                    } else if (touchWhichHand === "left") {
                        touchMgr.lastLeftPos = [touch.pageX, touch.pageY];
                    }
                } else {
                    var countsLeft = countTouches("left");
                    var countsRight = countTouches("right");
                    if (countsLeft == 0 && touchWhichHand === "left") {
                        interstate.fsm.noTouchLeft();
                        touchMgr.lastLeftPos = [touch.pageX, touch.pageY];
                    } else if (countsRight == 0 && touchWhichHand === "right") {
                        interstate.fsm.noTouchRight();
                        touchMgr.lastRightPos = [touch.pageX, touch.pageY];
                    }
                }
//                utilities.drawPreviousTouch(ctxTouch);
            } else {
                console.log('Touch was not found!');
            }

        }

    };


    // Removes cancelled touches from the touchMgr.currentTouches array.
    var touchCancelled = function (event) {
        var touches = event.changedTouches;

        for (var i = 0; i < touches.length; i++) {
            var currentTouchIndex = findCurrentTouchIndex(touches[i].identifier);

            if (currentTouchIndex >= 0) {
                // Remove the touch record.
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                touchMgr.currentTouches.splice(currentTouchIndex, 1);
            } else {
                console.log('Touch was not found!');
            }
        }
    };

    api.changeTouchHand = function (hand) {
        for (var i = 0; i < touchMgr.currentTouches.length; i++) {
            touchMgr.currentTouches[i].whichhand = hand;
        }
    }


    api.setupTouches = function () {
        canvas = document.getElementById("touch-overlay");
        ctx = canvas.getContext("2d")

        // Set up an event listener for new touches.
        canvas.addEventListener('touchstart', function (e) {
            e.preventDefault();
            touchStarted(event);
        });


        // Set up an event listener for when a touch ends.
        canvas.addEventListener('touchend', function (e) {
            e.preventDefault();
            touchEnded(e);
        });


        // Set up an event listener for when a touch leaves the canvas.
        canvas.addEventListener('touchleave', function (e) {
            e.preventDefault();
            touchEnded(e);
        });


        // Set up an event listener for when the touch instrument is moved.
        canvas.addEventListener('touchmove', function (e) {
            e.preventDefault();
            touchMoved(e);
        });


    };


    return api;
})();


var interstate = (function () {
    var api = {};


    api.fsm = StateMachine.create({
        initial: 'unknown',
        error: function (eventName, from, to, args, errorCode, errorMessage) {
            return 'event ' + eventName + ' was naughty :- ' + errorMessage;
        },
        events: [
            { name: 'leapright', from: 'unknown', to: 'waitLeft' },
            { name: 'noLeapright', from: 'waitLeft', to: 'unknown' },
            { name: 'leapleft', from: 'unknown', to: 'waitRight' },
            { name: 'noLeapleft', from: 'waitRight', to: 'unknown' },

            { name: 'newTouch', from: 'unknown', to: 'touchRight'  },

            { name: 'newTouch', from: 'waitRight', to: 'touchRight'  },
            { name: 'noTouch', from: 'touchRight', to: 'waitRight'  },
            { name: 'newTouch', from: 'waitLeft', to: 'touchLeft'  },
            { name: 'noTouch', from: 'touchLeft', to: 'waitLeft'  },

            { name: 'leapright', from: 'waitRight', to: 'neutral'  },
            { name: 'noLeapright', from: 'neutral', to: 'waitRight'  },
            { name: 'leapleft', from: 'waitLeft', to: 'neutral'  },
            { name: 'noLeapleft', from: 'neutral', to: 'waitLeft'  },
            //reassign
            { name: 'leapleft', from: 'touchLeft', to: 'neutral'  },
            { name: 'leapright', from: 'touchRight', to: 'neutral'  },

            { name: 'leapright', from: 'touchLeftWait', to: 'touchLeft'  },
            { name: 'noLeapright', from: 'touchLeft', to: 'touchLeftWait'  },
            { name: 'leapleft', from: 'touchRightWait', to: 'touchRight'  },
            { name: 'noLeapleft', from: 'touchRight', to: 'touchRightWait'  },

            { name: 'leapleft', from: 'touchLeftWait', to: 'touchRight'  },
            { name: 'leapright', from: 'touchRightWait', to: 'touchLeft'  },

            { name: 'newTouchFar', from: 'touchRightWait', to: 'twoTouches'  },
            { name: 'newTouchFar', from: 'touchLeftWait', to: 'twoTouches'  },
            { name: 'noTouchRight', from: 'twoTouches', to: 'touchLeftWait'  },
            { name: 'noTouchLeft', from: 'twoTouches', to: 'touchRightWait'  },
            //reassign
            { name: 'leapleft', from: 'twoTouches', to: 'touchRight'  },
            { name: 'leapright', from: 'twoTouches', to: 'touchLeft'  },

            { name: 'noTouch', from: 'touchLeftWait', to: 'unknownLeft'  },
            { name: 'noTouch', from: 'touchRightWait', to: 'unknownRight'  },

            { name: 'newTouch', from: 'unknownRight', to: 'touchRight'  },
            { name: 'leapleft', from: 'unknownRight', to: 'waitRight'  },
            { name: 'leapright', from: 'unknownRight', to: 'waitLeft'  },
            { name: 'newTouch', from: 'unknownLeft', to: 'touchLeft'  },
            { name: 'leapleft', from: 'unknownLeft', to: 'waitRight'  },
            { name: 'leapright', from: 'unknownLeft', to: 'waitLeft'  }

        ],
        callbacks: {
//            onentertouchRight:  function(event, from, to) {
//                api.update = touchRightHandle;
//                console.log("ontouchright");
//            },
//            ontouchRight: function(event, from, to) {
//                console.log("event: "+event+" from "+from+ " to "+to);
//            },
            onenterstate: function (event, from, to) {
                console.log("from " + from + " enter " + to);
            },
            onentertouchRight: function (event, from, to) {
                touchMgr.changeTouchHand("right");
            },
            onentertouchLeft: function (event, from, to) {
                touchMgr.changeTouchHand("left");
            }




        }
    });

    api.update = api.fsm.onenterstate;

    return api;
})();

function Controls(tag_, screenWid_, screenHeight_) {
    this.tag = tag_;
    this.screenHeight = screenHeight_;
    this.screenWidth = screenWid_;
    this.x = screenWid_ / 2;
    this.y = screenHeight_ / 2;
    this.valid = false;
    this.posture = "none";
    this.use = GetURLParameter("use") || "desktop";
    this.minVal = 0;
    if (this.tag == "right") {

        this.thumbExtended = Number(localStorage.rightThumbExtended) * .92 || -75;
        this.thumbBent = Number(localStorage.rightThumbBent) || -10;
    } else if (this.tag == "left") {
        this.thumbExtended = Number(localStorage.leftThumbExtended) * .92 || 75;
        this.thumbBent = Number(localStorage.leftThumbBent) || 10;

    }
    this.fx = OneEuroFilter(freq, mincutoff, beta, dcutoff);
    this.fy = OneEuroFilter(freq, mincutoff, beta, dcutoff);
    this.cursorState = "none";
    this.cursorEvent = "none";
    this.tipPosition = Leap.vec3.create();

    var isThumbDown = false;
    this.isDragging = false;
    this.timestamp = 0;
    this.lastFrameTimestamp = 0;

    this.fingerList = [40, true, true, true, true];
    this.confidence = 0;
    this.palmPosition = vec3.fromValues(0, 200, 0);
    this.palmNormal = vec3.create();
    this.stablePalmPosition = vec3.create();
    if (this.use == "wall") {
        //wall
        SCALE_TO_PIXEL = 45 / 53;
        SHRINK_RATIO = 1;
    }
    this.historyPoints = [];

    this.getRecordData = function () {
        var data = {
            handUsed: this.tag,
            x: this.x,
            y: this.y,
            valid: this.valid,
            posture: this.posture,
            minVal: this.minVal,
            cursorState: this.cursorState,
            tipPosition: this.tipPosition,
            palmPosition: this.palmPosition,
            confidence: this.confidence,
            fingerList: this.getFingerExtensionData()
        };
        return data;
    };

    this.getFingerExtensionData=function() {
        if(this.fingerList) {
            var data = [];
            data.push(this.fingerList[0] >= 0 ? true : false);
            for (var i = 1; i < this.fingerList.length; i++) {
                data.push(this.fingerList[i]);
            }
            return data;
        }

    }

    this.setCursorState = function (state) {

        switch (state) {
            case "active":
                if (this.cursorState == "down" || this.cursorState == "dragging") {
                    this.cursorEvent = "clickup";
                } else {
                    this.cursorEvent = "none";
                }
                break;
            case "down":
                if (this.cursorState == "active") {
                    this.cursorEvent = "clickdown";
                } else {
                    this.cursorEvent = "none";
                }
                break;
            case "dragging":
                this.cursorEvent = "dragging";
                break;
            case "none":
                this.cursorEvent = "none";
                if (this.posture == "+thu+ind")
                    this.posture = "+ind";
                break;

        }

        this.cursorState = state;
    };

    function CDGainTransfer(tipVelocity) {
        var vel = vec2.len(tipVelocity);
        var gain = (cdMax - cdMin) / (1 + Math.exp(-lambda * (vel - vel_inf))) + cdMin;
        tipVelocity[0] *= gain;
        tipVelocity[1] *= gain;
    };


    function angleBtLines(v1, v2) {
        var m1, n1, p1, m2, n2, p2;

        m1 = v1[0];
        n1 = v1[1];
        p1 = v1[2];


        m2 = v2[0];
        n2 = v2[1];
        p2 = v2[2];

        var cos = (m1 * m2 + n1 * n2 + p1 * p2) / (Math.sqrt(m1 * m1 + n1 * n1 + p1 * p1) * Math.sqrt(m2 * m2 + n2 * n2 + p2 * p2));
        return Math.acos(cos) * 180.0 / Math.PI;
    }

    this.addPoints = function (posX, posY, vel, timestampe) {
        if (this.historyPoints.length > 15) {
            this.historyPoints.splice(0, 1);
        }
        ;
        this.historyPoints.push([posX, posY, vel, timestampe]);
    };

    this.getHistoryPoint = function () {
        var vel = Number.MAX_VALUE;
        var tempPoint = [this.x, this.y];
        for (var i = 0; i < this.historyPoints.length; i++) {
            var posX = this.historyPoints[i][0];
            var posY = this.historyPoints[i][1];
            var time = this.historyPoints[i][3];
            if (this.historyPoints[i][2] < vel && this.timestamp - time < 250) {
                tempPoint[0] = posX;
                tempPoint[1] = posY;
                vel = this.historyPoints[i][2];
                var timediff = this.timestamp - time
            }
        }
        var diff = this.x - tempPoint[0];
        if (vel < 100)
            return tempPoint;
        return [this.x, this.y];
    }

    this.ReviseCursorPos = function () {
        if (this.x > this.screenWidth + 100 * CURSOR_SCALE) {
            this.x = this.screenWidth + 100 * CURSOR_SCALE;
        } else if (this.x < 0 + 100 * CURSOR_SCALE) {
            this.x = 0 + 100 * CURSOR_SCALE;
        }
        if (this.y > this.screenHeight + 100 * CURSOR_SCALE) {
            this.y = this.screenHeight + 100 * CURSOR_SCALE;
        } else if (this.y < 0 + 100 * CURSOR_SCALE) {
            this.y = 0 + 100 * CURSOR_SCALE;
        }
    }

    this.updateDistance = function (distance) {

        var w_active = 1 / 4,
            w_down = 1 / 2,
            w_none = 1 / 4,
            w_fuzzyRange = 0.15;
        var w_fuzzyRangeActive = 0.10;
        var boundRight, boundLeft;
        if (this.tag === "right") {
            boundRight = this.thumbBent;
            boundLeft = this.thumbExtended;

            var range = boundRight - boundLeft;

            switch (this.cursorState) {
                case "active":
                    if (distance > (boundLeft + range * w_active + range * w_active * w_fuzzyRangeActive)) {
                        this.setCursorState("down");
                    }
                    break;
                case "down":
                    if (distance > (boundLeft + range * (w_active + w_down) )) {  //to-do
                        this.setCursorState("none");
                    } else if (distance < (boundLeft + range * w_active - range * w_down * w_fuzzyRangeActive)) {
                        this.setCursorState("active");
                    }
                    break;
                case "none":
                    if (distance < (boundLeft + range * (w_active + w_down))) {
                        this.setCursorState("down");
                    }
                    break;

            }
        } else if (this.tag === "left") {
            boundLeft = this.thumbBent;
            boundRight = this.thumbExtended;

            var range = boundRight - boundLeft;

            switch (this.cursorState) {
                case "active":
                    if (distance < (boundLeft + range * (w_none + w_down) - range * w_active * w_fuzzyRangeActive)) {
                        this.setCursorState("down");
                    }
                    break;
                case "down":
                    if (distance > (boundLeft + range * (w_none + w_down) )) {  //to-do
                        this.setCursorState("active");
                    } else if (distance < (boundLeft + range * w_none - range * w_down * w_fuzzyRangeActive)) {
                        this.setCursorState("none");
                    }
                    break;
                case "none":
                    if (distance > (boundLeft + range * w_none)) {
                        this.setCursorState("down");
                    }
                    break;

            }
        }

        if (this.cursorState == "none") {
            this.posture = "+ind";
        }
    };

    this.updateThumbAngle = function (distance, whichhand) {

        var range = Math.abs(this.thumbBent - this.thumbExtended);
        if (whichhand == "right") {
            distance -= this.thumbExtended;
            //update thumbAngle
            distance = Math.min(range, distance);

            distance = range - distance;
        } else if (whichhand == "left") {
            distance -= this.thumbBent;
            //update thumbAngle
            distance = Math.min(range, distance);
            distance = Math.max(0, distance);

        }

        var angle = 70 + distance / range * 50;
        this.fingerList[0] = angle;
    };

    this.update = function (posture, minVal, frame) {
        this.minVal = minVal;
        this.posture = posture;
        this.timestamp = frame.timestamp * 0.001;
        if (frame.hands[0] != undefined) {
            this.valid = true;
            var hand = frame.hands[0];
            if (Math.abs(hand.confidence * 100 - this.confidence) > 2)
                this.confidence += (hand.confidence * 100 - this.confidence) / 4;
//            this.confidence = hand.confidence * 100;
            this.palmPosition = hand.palmPosition;
            this.palmNormal = hand.palmNormal;
            this.stablePalmPosition = hand.stabilizedPalmPosition;
            var ratio = utilities.getRatio(this.palmPosition, this.use);
            if (ratio >= 0.9) {
                this.posture = "invalid";
            }

            var fingers = hand.fingers;
            this.tipPosition = frame.hands[0].fingers[1].tipPosition;

            //viz info
            var angle = angleBtLines([0, 0, -1], [hand.direction[0], 0, hand.direction[2]]);
            if (hand.direction[0] < 0) {
                angle = -angle;
            }

            var modelView = mat4.create();
            mat4.identity(modelView); // Set to identity
            mat4.rotateY(modelView, modelView, Math.PI * angle / 180);
            mat4.rotateZ(modelView, modelView, -hand.roll().toFixed(2));
            mat4.rotateX(modelView, modelView, -hand.pitch().toFixed(2));
            var distanceVec = vec3.create();
            vec3.sub(distanceVec, fingers[0].tipPosition, hand.palmPosition);
            vec3.transformMat4(distanceVec, distanceVec, modelView);
            this.updateThumbAngle(distanceVec[0], this.tag);
            for (var i = 1; i < fingers.length; i++) {
                this.fingerList[i] = fingers[i].extended;
            }
            if (!fingers[0].extended) {
                this.fingerList[0] = -this.fingerList[0];
            }

            if (this.posture == "+thu+ind" || this.posture == "+ind" || this.posture == "+thu" || this.posture == "-rin-pin") {

//                if (this.tag == "right")  //to-do
                this.updateDistance(distanceVec[0]);


                if (this.posture == "+thu+ind") {
                    var velraw = [frame.hands[0].fingers[1].tipVelocity[0], frame.hands[0].fingers[1].tipVelocity[1]];
                    if (vec2.len(velraw) < 14) {
                        velraw = [0, 0];
                    }
                    //compare vel


//                console.log("before:"+velraw);
                    var delta = [this.fx.filter(velraw[0], this.timestamp * 0.001), this.fy.filter(velraw[1], this.timestamp * 0.001)];
//                    var delta = [velraw[0], velraw[1]];
                    CDGainTransfer(delta);
                    if (this.use == "wall") {  //scale cdgain
                        vec2.scale(delta, delta, 1 / (800 / 1700));
                    }
                    if (this.cursorState == "down") {
                        vec2.scale(delta, delta, 0.4);
                    }
                    vec2.scale(delta, delta, (this.timestamp - this.lastFrameTimestamp) * 0.001 * SCALE_TO_PIXEL);
//                console.log("after:" + delta);

                    //#convert
                    if (this.use == "wall") {
                        this.x -= delta[1];
                        this.y -= delta[0];
                    } else {
                        this.x -= delta[0];
                        this.y += delta[1];
                    }
                    this.ReviseCursorPos();
                } else {
                    this.fx.filter(0, this.timestamp * 0.001);
                    this.fy.filter(0, this.timestamp * 0.001);
                }


                this.addPoints(this.x, this.y, vec3.len(fingers[1].tipVelocity), this.timestamp);

            } else {
                this.setCursorState("none");
                isThumbDown = false;
                this.isDragging = false;
            }
        } else {
            this.posture = "none";
            this.valid = false;
        }
        this.lastFrameTimestamp = frame.timestamp * 0.001;
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

var utilities = (function () {
    var api = {};

    api.shuffle = function shuffle(array) {
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    };

    api.getURLParameter = function getURLParameter(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }
    };

    api.showMsg = function (msg, callback) {
        var callbackFn = callback || function () {
        };
        vex.defaultOptions.className = 'vex-theme-os';
        $vexContent = vex.dialog.alert({
            message: msg,
            callback: function (value) {
                callbackFn();
            }
        });
    };

    api.showShortMsg = function (msg) {
        vex.defaultOptions.className = 'vex-theme-os';
        $vexContent = vex.dialog.alert(msg);
        setTimeout(function () {
            vex.close($vexContent.data().vex.id);
        }, 1000);
    };


    api.drawFlickMenu = function (ctx) {
        // flickmenufeedback/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(129.7, 48.9);
        ctx.bezierCurveTo(120.9, 43.6, 110.6, 40.6, 99.5, 40.6);
        ctx.bezierCurveTo(88.4, 40.6, 78.1, 43.6, 69.2, 48.9);
        ctx.lineWidth = 2.0;
        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.stroke();

        // flickmenufeedback/Path
        ctx.beginPath();
        ctx.moveTo(150.2, 129.9);
        ctx.bezierCurveTo(155.5, 121.0, 158.6, 110.7, 158.6, 99.6);
        ctx.bezierCurveTo(158.6, 88.6, 155.5, 78.2, 150.2, 69.4);
        ctx.stroke();

        // flickmenufeedback/Path
        ctx.beginPath();
        ctx.moveTo(69.2, 150.4);
        ctx.bezierCurveTo(78.1, 155.7, 88.4, 158.7, 99.5, 158.7);
        ctx.bezierCurveTo(110.6, 158.7, 120.9, 155.7, 129.7, 150.4);
        ctx.stroke();

        // flickmenufeedback/Path
        ctx.beginPath();
        ctx.moveTo(48.8, 69.4);
        ctx.bezierCurveTo(43.5, 78.2, 40.4, 88.6, 40.4, 99.6);
        ctx.bezierCurveTo(40.4, 110.7, 43.5, 121.0, 48.8, 129.9);
        ctx.stroke();

        // flickmenufeedback/Group

        // flickmenufeedback/Group/Compound Path
        ctx.save();
        ctx.beginPath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(129.5, 49.3);
        ctx.bezierCurveTo(128.6, 48.8, 127.8, 48.3, 126.9, 47.9);
        ctx.lineTo(127.4, 47.0);
        ctx.bezierCurveTo(128.3, 47.5, 129.1, 48.0, 130.0, 48.5);
        ctx.lineTo(129.5, 49.3);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(69.9, 49.1);
        ctx.lineTo(69.4, 48.2);
        ctx.bezierCurveTo(70.3, 47.7, 71.2, 47.2, 72.1, 46.7);
        ctx.lineTo(72.6, 47.6);
        ctx.bezierCurveTo(71.7, 48.1, 70.8, 48.6, 69.9, 49.1);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(124.2, 46.5);
        ctx.bezierCurveTo(123.3, 46.1, 122.4, 45.7, 121.5, 45.4);
        ctx.lineTo(121.9, 44.4);
        ctx.bezierCurveTo(122.8, 44.8, 123.7, 45.2, 124.7, 45.6);
        ctx.lineTo(124.2, 46.5);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(75.2, 46.3);
        ctx.lineTo(74.8, 45.4);
        ctx.bezierCurveTo(75.7, 45.0, 76.7, 44.6, 77.6, 44.2);
        ctx.lineTo(78.0, 45.2);
        ctx.bezierCurveTo(77.1, 45.5, 76.1, 45.9, 75.2, 46.3);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(118.7, 44.3);
        ctx.bezierCurveTo(117.8, 44.0, 116.8, 43.7, 115.9, 43.4);
        ctx.lineTo(116.2, 42.4);
        ctx.bezierCurveTo(117.1, 42.7, 118.1, 43.0, 119.1, 43.4);
        ctx.lineTo(118.7, 44.3);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(80.8, 44.1);
        ctx.lineTo(80.4, 43.2);
        ctx.bezierCurveTo(81.4, 42.9, 82.4, 42.6, 83.3, 42.3);
        ctx.lineTo(83.6, 43.3);
        ctx.bezierCurveTo(82.6, 43.5, 81.7, 43.8, 80.8, 44.1);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(113.0, 42.6);
        ctx.bezierCurveTo(112.1, 42.4, 111.1, 42.2, 110.1, 42.0);
        ctx.lineTo(110.3, 41.1);
        ctx.bezierCurveTo(111.3, 41.2, 112.3, 41.4, 113.3, 41.7);
        ctx.lineTo(113.0, 42.6);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(86.5, 42.5);
        ctx.lineTo(86.3, 41.5);
        ctx.bezierCurveTo(87.2, 41.3, 88.2, 41.1, 89.2, 41.0);
        ctx.lineTo(89.4, 41.9);
        ctx.bezierCurveTo(88.4, 42.1, 87.4, 42.3, 86.5, 42.5);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(107.2, 41.6);
        ctx.bezierCurveTo(106.2, 41.4, 105.2, 41.3, 104.2, 41.3);
        ctx.lineTo(104.3, 40.3);
        ctx.bezierCurveTo(105.3, 40.3, 106.3, 40.4, 107.3, 40.6);
        ctx.lineTo(107.2, 41.6);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(92.3, 41.5);
        ctx.lineTo(92.2, 40.5);
        ctx.bezierCurveTo(93.2, 40.4, 94.2, 40.3, 95.2, 40.2);
        ctx.lineTo(95.3, 41.2);
        ctx.bezierCurveTo(94.3, 41.3, 93.3, 41.4, 92.3, 41.5);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(101.3, 41.1);
        ctx.bezierCurveTo(100.3, 41.1, 99.3, 41.1, 98.3, 41.1);
        ctx.lineTo(98.3, 40.1);
        ctx.bezierCurveTo(99.3, 40.1, 100.3, 40.1, 101.3, 40.1);
        ctx.lineTo(101.3, 41.1);
        ctx.closePath();
        ctx.fill();

        // flickmenufeedback/Group
        ctx.restore();

        // flickmenufeedback/Group/Compound Path
        ctx.save();
        ctx.beginPath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(150.7, 130.2);
        ctx.lineTo(149.8, 129.6);
        ctx.bezierCurveTo(150.3, 128.8, 150.8, 127.9, 151.3, 127.1);
        ctx.lineTo(152.1, 127.5);
        ctx.bezierCurveTo(151.7, 128.4, 151.2, 129.3, 150.7, 130.2);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(153.5, 124.8);
        ctx.lineTo(152.6, 124.4);
        ctx.bezierCurveTo(153.0, 123.5, 153.4, 122.6, 153.8, 121.7);
        ctx.lineTo(154.7, 122.0);
        ctx.bezierCurveTo(154.3, 123.0, 153.9, 123.9, 153.5, 124.8);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(155.8, 119.2);
        ctx.lineTo(154.8, 118.9);
        ctx.bezierCurveTo(155.1, 117.9, 155.4, 117.0, 155.7, 116.1);
        ctx.lineTo(156.7, 116.3);
        ctx.bezierCurveTo(156.4, 117.3, 156.1, 118.3, 155.8, 119.2);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(157.5, 113.4);
        ctx.lineTo(156.5, 113.2);
        ctx.bezierCurveTo(156.7, 112.2, 156.9, 111.2, 157.1, 110.3);
        ctx.lineTo(158.1, 110.4);
        ctx.bezierCurveTo(157.9, 111.4, 157.7, 112.4, 157.5, 113.4);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(158.5, 107.5);
        ctx.lineTo(157.6, 107.3);
        ctx.bezierCurveTo(157.7, 106.3, 157.8, 105.4, 157.9, 104.4);
        ctx.lineTo(158.9, 104.5);
        ctx.bezierCurveTo(158.8, 105.4, 158.7, 106.5, 158.5, 107.5);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(159.0, 101.4);
        ctx.lineTo(158.0, 101.4);
        ctx.bezierCurveTo(158.0, 100.8, 158.1, 100.2, 158.1, 99.6);
        ctx.bezierCurveTo(158.1, 99.2, 158.1, 98.8, 158.0, 98.4);
        ctx.lineTo(159.0, 98.4);
        ctx.bezierCurveTo(159.1, 98.8, 159.1, 99.2, 159.1, 99.6);
        ctx.bezierCurveTo(159.1, 100.2, 159.0, 100.8, 159.0, 101.4);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(157.9, 95.5);
        ctx.bezierCurveTo(157.8, 94.5, 157.7, 93.5, 157.6, 92.5);
        ctx.lineTo(158.6, 92.4);
        ctx.bezierCurveTo(158.7, 93.4, 158.8, 94.4, 158.9, 95.4);
        ctx.lineTo(157.9, 95.5);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(157.2, 89.6);
        ctx.bezierCurveTo(157.0, 88.6, 156.8, 87.6, 156.6, 86.6);
        ctx.lineTo(157.6, 86.4);
        ctx.bezierCurveTo(157.8, 87.4, 158.0, 88.4, 158.2, 89.4);
        ctx.lineTo(157.2, 89.6);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(155.9, 83.8);
        ctx.bezierCurveTo(155.6, 82.8, 155.3, 81.8, 155.0, 80.9);
        ctx.lineTo(155.9, 80.6);
        ctx.bezierCurveTo(156.3, 81.5, 156.6, 82.5, 156.8, 83.5);
        ctx.lineTo(155.9, 83.8);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(154.0, 78.1);
        ctx.bezierCurveTo(153.6, 77.2, 153.2, 76.3, 152.8, 75.4);
        ctx.lineTo(153.7, 75.0);
        ctx.bezierCurveTo(154.1, 75.9, 154.5, 76.8, 154.9, 77.7);
        ctx.lineTo(154.0, 78.1);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(151.5, 72.7);
        ctx.bezierCurveTo(151.1, 71.8, 150.6, 71.0, 150.1, 70.1);
        ctx.lineTo(150.9, 69.6);
        ctx.bezierCurveTo(151.4, 70.5, 151.9, 71.4, 152.4, 72.2);
        ctx.lineTo(151.5, 72.7);
        ctx.closePath();
        ctx.fill();

        // flickmenufeedback/Group
        ctx.restore();

        // flickmenufeedback/Group/Compound Path
        ctx.save();
        ctx.beginPath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(99.5, 159.2);
        ctx.bezierCurveTo(98.9, 159.2, 98.3, 159.2, 97.7, 159.2);
        ctx.lineTo(97.7, 158.2);
        ctx.bezierCurveTo(98.7, 158.2, 99.7, 158.2, 100.7, 158.2);
        ctx.lineTo(100.7, 159.2);
        ctx.bezierCurveTo(100.3, 159.2, 99.9, 159.2, 99.5, 159.2);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(103.7, 159.1);
        ctx.lineTo(103.7, 158.1);
        ctx.bezierCurveTo(104.7, 158.0, 105.7, 157.9, 106.6, 157.8);
        ctx.lineTo(106.8, 158.8);
        ctx.bezierCurveTo(105.8, 158.9, 104.8, 159.0, 103.7, 159.1);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(94.7, 159.0);
        ctx.bezierCurveTo(93.7, 158.9, 92.7, 158.8, 91.7, 158.7);
        ctx.lineTo(91.8, 157.7);
        ctx.bezierCurveTo(92.8, 157.8, 93.8, 157.9, 94.8, 158.0);
        ctx.lineTo(94.7, 159.0);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(109.8, 158.3);
        ctx.lineTo(109.6, 157.3);
        ctx.bezierCurveTo(110.6, 157.2, 111.5, 157.0, 112.5, 156.8);
        ctx.lineTo(112.7, 157.7);
        ctx.bezierCurveTo(111.8, 158.0, 110.8, 158.2, 109.8, 158.3);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(88.7, 158.2);
        ctx.bezierCurveTo(87.7, 158.1, 86.7, 157.8, 85.7, 157.6);
        ctx.lineTo(86.0, 156.6);
        ctx.bezierCurveTo(86.9, 156.9, 87.9, 157.1, 88.9, 157.2);
        ctx.lineTo(88.7, 158.2);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(115.6, 157.0);
        ctx.lineTo(115.4, 156.0);
        ctx.bezierCurveTo(116.3, 155.8, 117.3, 155.5, 118.2, 155.1);
        ctx.lineTo(118.5, 156.1);
        ctx.bezierCurveTo(117.6, 156.4, 116.6, 156.7, 115.6, 157.0);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(82.8, 156.8);
        ctx.bezierCurveTo(81.8, 156.6, 80.9, 156.2, 79.9, 155.9);
        ctx.lineTo(80.2, 155.0);
        ctx.bezierCurveTo(81.2, 155.3, 82.1, 155.6, 83.1, 155.9);
        ctx.lineTo(82.8, 156.8);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(121.4, 155.1);
        ctx.lineTo(121.0, 154.1);
        ctx.bezierCurveTo(121.9, 153.8, 122.9, 153.4, 123.7, 153.0);
        ctx.lineTo(124.2, 153.9);
        ctx.bezierCurveTo(123.3, 154.3, 122.3, 154.7, 121.4, 155.1);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(77.1, 154.8);
        ctx.bezierCurveTo(76.2, 154.5, 75.2, 154.1, 74.3, 153.6);
        ctx.lineTo(74.7, 152.7);
        ctx.bezierCurveTo(75.6, 153.2, 76.6, 153.6, 77.5, 153.9);
        ctx.lineTo(77.1, 154.8);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(126.9, 152.5);
        ctx.lineTo(126.4, 151.7);
        ctx.bezierCurveTo(127.3, 151.2, 128.2, 150.7, 129.0, 150.2);
        ctx.lineTo(129.5, 151.1);
        ctx.bezierCurveTo(128.7, 151.6, 127.8, 152.1, 126.9, 152.5);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(71.6, 152.3);
        ctx.bezierCurveTo(70.7, 151.8, 69.8, 151.3, 69.0, 150.8);
        ctx.lineTo(69.5, 149.9);
        ctx.bezierCurveTo(70.3, 150.5, 71.2, 150.9, 72.1, 151.4);
        ctx.lineTo(71.6, 152.3);
        ctx.closePath();
        ctx.fill();

        // flickmenufeedback/Group
        ctx.restore();

        // flickmenufeedback/Group/Compound Path
        ctx.save();
        ctx.beginPath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(48.0, 129.7);
        ctx.bezierCurveTo(47.5, 128.8, 47.0, 127.9, 46.6, 127.0);
        ctx.lineTo(47.5, 126.6);
        ctx.bezierCurveTo(47.9, 127.5, 48.4, 128.3, 48.9, 129.2);
        ctx.lineTo(48.0, 129.7);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(45.3, 124.3);
        ctx.bezierCurveTo(44.8, 123.4, 44.4, 122.5, 44.1, 121.5);
        ctx.lineTo(45.0, 121.2);
        ctx.bezierCurveTo(45.4, 122.1, 45.8, 123.0, 46.2, 123.9);
        ctx.lineTo(45.3, 124.3);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(43.0, 118.7);
        ctx.bezierCurveTo(42.7, 117.7, 42.4, 116.8, 42.1, 115.8);
        ctx.lineTo(43.1, 115.5);
        ctx.bezierCurveTo(43.4, 116.5, 43.7, 117.4, 44.0, 118.4);
        ctx.lineTo(43.0, 118.7);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(41.4, 112.9);
        ctx.bezierCurveTo(41.2, 111.9, 41.0, 110.9, 40.8, 109.9);
        ctx.lineTo(41.8, 109.7);
        ctx.bezierCurveTo(42.0, 110.7, 42.2, 111.7, 42.4, 112.6);
        ctx.lineTo(41.4, 112.9);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(40.4, 106.9);
        ctx.bezierCurveTo(40.2, 105.9, 40.1, 104.9, 40.1, 103.9);
        ctx.lineTo(41.1, 103.8);
        ctx.bezierCurveTo(41.1, 104.8, 41.2, 105.8, 41.4, 106.8);
        ctx.lineTo(40.4, 106.9);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(39.9, 100.9);
        ctx.bezierCurveTo(39.9, 100.5, 39.9, 100.1, 39.9, 99.6);
        ctx.bezierCurveTo(39.9, 99.0, 39.9, 98.4, 39.9, 97.8);
        ctx.lineTo(40.9, 97.9);
        ctx.bezierCurveTo(40.9, 98.5, 40.9, 99.1, 40.9, 99.6);
        ctx.bezierCurveTo(40.9, 100.0, 40.9, 100.4, 40.9, 100.9);
        ctx.lineTo(39.9, 100.9);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(41.1, 94.9);
        ctx.lineTo(40.1, 94.8);
        ctx.bezierCurveTo(40.2, 93.8, 40.3, 92.8, 40.4, 91.8);
        ctx.lineTo(41.4, 91.9);
        ctx.bezierCurveTo(41.3, 92.9, 41.2, 93.9, 41.1, 94.9);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(41.9, 89.0);
        ctx.lineTo(40.9, 88.8);
        ctx.bezierCurveTo(41.1, 87.8, 41.3, 86.8, 41.5, 85.9);
        ctx.lineTo(42.5, 86.1);
        ctx.bezierCurveTo(42.3, 87.1, 42.1, 88.0, 41.9, 89.0);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(43.3, 83.2);
        ctx.lineTo(42.3, 83.0);
        ctx.bezierCurveTo(42.6, 82.0, 42.9, 81.0, 43.2, 80.1);
        ctx.lineTo(44.2, 80.4);
        ctx.bezierCurveTo(43.8, 81.3, 43.5, 82.3, 43.3, 83.2);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(45.2, 77.6);
        ctx.lineTo(44.3, 77.2);
        ctx.bezierCurveTo(44.7, 76.3, 45.1, 75.4, 45.5, 74.5);
        ctx.lineTo(46.4, 74.9);
        ctx.bezierCurveTo(46.0, 75.8, 45.6, 76.7, 45.2, 77.6);
        ctx.closePath();

        // flickmenufeedback/Group/Compound Path/Path
        ctx.moveTo(47.7, 72.2);
        ctx.lineTo(46.8, 71.8);
        ctx.bezierCurveTo(47.3, 70.9, 47.8, 70.0, 48.3, 69.1);
        ctx.lineTo(49.2, 69.6);
        ctx.bezierCurveTo(48.7, 70.5, 48.2, 71.4, 47.7, 72.2);
        ctx.closePath();
        ctx.fill();

        // flickmenufeedback/undo
        ctx.restore();
        ctx.font = "Bold 9.9px 'Arial'";
        ctx.fillText("undo", 87.4, 32.2);
        // This artwork uses an unsupported dash style
        ctx.lineWidth = 0.5;
        ctx.lineJoin = "miter";
        ctx.miterLimit = 0.0;
        ctx.strokeText("undo", 87.4, 32.2);

        // flickmenufeedback/redo
        ctx.fillText("redo", 88.8, 173.7);
        // This artwork uses an unsupported dash style
        ctx.lineJoin = "miter";
        ctx.miterLimit = 0.0;
        ctx.strokeText("redo", 88.8, 173.7);

        // flickmenufeedback/cancel
        ctx.fillText("cancel", 164.3, 102.1);
        // This artwork uses an unsupported dash style
        ctx.strokeText("cancel", 164.3, 102.1);

        // flickmenufeedback/select
        ctx.fillText("select", 6.5, 102.1);
        // This artwork uses an unsupported dash style
        ctx.strokeText("select", 6.5, 102.1);
        ctx.restore();

    }

    api.drawPreviousTouch = function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "rgba(200, 0, 200, 0.15)";
        ctx.strokeStyle = "rgba(200, 0, 200, 0.3)";
        ctx.arc(touchMgr.lastLeftPos[0], touchMgr.lastLeftPos[1], TOUCH_DISTANCE_RECONFIG, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "rgba(0, 0, 200, 0.15)";
        ctx.strokeStyle = "rgba(0, 0, 200, 0.3)";
        ctx.arc(touchMgr.lastRightPos[0], touchMgr.lastRightPos[1], TOUCH_DISTANCE_RECONFIG, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
    };

    api.getRatio = function (position, use) {
        var posX, posY;
        var ctrPos = 200,
            radius = 140;


        var threshold = .7;
        if (use == "wall") {
            posY = position[0];
            posX = (position[1] - ctrPos);
        } else {
            posX = position[0];
            posY = -(position[1] - ctrPos);
        }
        var pos = vec2.fromValues(posX, posY);

        var len = vec2.len(pos);
        len = Math.min(len, radius);
        var ratio = len / radius;
        if (ratio > threshold) {
            ratio = (ratio - threshold) * 1 / (1 - threshold);
            return ratio;
        }


        return 0;
    };

    api.getOffsetPosition = function (position, use) {
        var posX, posY;
        var ctrPos = 200,
            radius = 140;
        var offsetRange = 16; //pixel ralated


        if (use == "wall") {
            posY = position[0];
            posX = (position[1] - ctrPos);
        } else {
            posX = position[0];
            posY = -(position[1] - ctrPos);
        }
        var pos = vec2.fromValues(posX, posY);

        var len = vec2.len(pos);
        len = Math.min(len, radius);
        var ratio = this.getRatio(position, use);

        vec2.scale(pos, pos, offsetRange * ratio / vec2.len(pos));
        return pos;

    };

    api.getAbsoluteOffset = function (position, use, whichhand) {
        var posX, posY;
        var ctrPos = 200,
            radius = 100;
        var elementStr = "#menu_box_" + whichhand + "_ele";
        var offsetRange = Math.max($(elementStr).height() / 2, $(elementStr).width() / 2); //pixel ralated


        if (use == "wall") {
            posY = -position[0];
            posX = (position[1] - ctrPos);
        } else {
            posX = position[0];
            posY = -(position[1] - ctrPos);
        }
        var pos = vec2.fromValues(posX, posY);

        var len = vec2.len(pos);
        len = Math.min(len, radius);
        var ratio = len / radius;

        vec2.scale(pos, pos, offsetRange * ratio / vec2.len(pos));
        leapDeviceMgr.printInfo(pos[0] + " " + pos[1]);
        return pos;

    };
    api.drawGeneric = function (ctx) {


        // genericfeedback/generic
        ctx.save();

        ctx.beginPath();
        ctx.moveTo(103.7, 101.5);
        ctx.bezierCurveTo(104.5, 99.5, 103.6, 97.2, 101.5, 96.3);
        ctx.bezierCurveTo(99.5, 95.5, 97.2, 96.4, 96.3, 98.5);
        ctx.bezierCurveTo(95.5, 100.5, 96.4, 102.8, 98.5, 103.7);
        ctx.bezierCurveTo(100.5, 104.5, 102.8, 103.6, 103.7, 101.5);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.stroke();
        ctx.restore();
    };

    api.drawZoom = function (ctx) {

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(127.1, 35.5);
        ctx.bezierCurveTo(129.8, 36.6, 132.5, 37.9, 135.0, 39.4);
        ctx.lineTo(137.5, 35.1);
        ctx.bezierCurveTo(134.8, 33.5, 132.0, 32.1, 129.0, 30.9);
        ctx.bezierCurveTo(106.5, 21.4, 82.1, 23.8, 62.5, 35.1);
        ctx.lineTo(65.0, 39.4);
        ctx.bezierCurveTo(83.3, 28.9, 106.1, 26.7, 127.1, 35.5);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // panzoomfeedback/zoom/Path
        ctx.beginPath();
        ctx.moveTo(72.9, 164.5);
        ctx.bezierCurveTo(69.6, 163.2, 66.5, 161.5, 63.5, 159.7);
        ctx.lineTo(61.0, 164.1);
        ctx.bezierCurveTo(64.2, 166.0, 67.5, 167.7, 71.0, 169.1);
        ctx.bezierCurveTo(92.9, 178.3, 116.7, 176.3, 136.0, 165.8);
        ctx.lineTo(133.5, 161.4);
        ctx.bezierCurveTo(115.5, 171.2, 93.3, 173.1, 72.9, 164.5);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // panzoomfeedback/zoom/Group

        // panzoomfeedback/zoom/Group/Compound Path
        ctx.save();
        ctx.beginPath();

        // panzoomfeedback/zoom/Group/Compound Path/Path
        ctx.moveTo(103.9, 9.5);
        ctx.bezierCurveTo(101.5, 7.1, 97.6, 7.1, 95.2, 9.5);
        ctx.bezierCurveTo(92.8, 11.9, 92.8, 15.8, 95.2, 18.2);
        ctx.bezierCurveTo(97.2, 20.2, 100.2, 20.5, 102.6, 19.2);
        ctx.lineTo(107.4, 24.0);
        ctx.lineTo(109.7, 21.7);
        ctx.lineTo(104.9, 16.9);
        ctx.bezierCurveTo(106.2, 14.5, 105.9, 11.5, 103.9, 9.5);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // panzoomfeedback/zoom/Group/Path
        ctx.beginPath();
        ctx.moveTo(102.4, 16.8);
        ctx.bezierCurveTo(100.8, 18.4, 98.2, 18.4, 96.6, 16.8);
        ctx.bezierCurveTo(95.0, 15.2, 95.0, 12.6, 96.6, 11.0);
        ctx.bezierCurveTo(98.2, 9.4, 100.8, 9.4, 102.4, 11.0);
        ctx.bezierCurveTo(104.1, 12.6, 104.1, 15.2, 102.4, 16.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();

        // panzoomfeedback/zoom/Group
        ctx.restore();

        // panzoomfeedback/zoom/Group/Compound Path
        ctx.save();
        ctx.beginPath();

        // panzoomfeedback/zoom/Group/Compound Path/Path
        ctx.moveTo(96.6, 14.5);
        ctx.lineTo(96.6, 13.0);
        ctx.lineTo(98.8, 13.0);
        ctx.lineTo(98.8, 10.8);
        ctx.lineTo(100.3, 10.8);
        ctx.lineTo(100.3, 13.0);
        ctx.lineTo(102.5, 13.0);
        ctx.lineTo(102.5, 14.5);
        ctx.lineTo(100.3, 14.5);
        ctx.lineTo(100.3, 16.7);
        ctx.lineTo(98.8, 16.7);
        ctx.lineTo(98.8, 14.5);
        ctx.lineTo(96.6, 14.5);
        ctx.closePath();
        ctx.fill();

        // panzoomfeedback/zoom/Group
        ctx.restore();

        // panzoomfeedback/zoom/Group/Compound Path
        ctx.save();
        ctx.beginPath();

        // panzoomfeedback/zoom/Group/Compound Path/Path
        ctx.moveTo(104.1, 179.5);
        ctx.bezierCurveTo(101.7, 177.1, 97.9, 177.1, 95.5, 179.5);
        ctx.bezierCurveTo(93.1, 181.9, 93.1, 185.8, 95.5, 188.2);
        ctx.bezierCurveTo(97.5, 190.1, 100.5, 190.5, 102.8, 189.1);
        ctx.lineTo(107.6, 193.9);
        ctx.lineTo(109.9, 191.6);
        ctx.lineTo(105.1, 186.8);
        ctx.bezierCurveTo(106.5, 184.5, 106.1, 181.5, 104.1, 179.5);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // panzoomfeedback/zoom/Group/Path
        ctx.beginPath();
        ctx.moveTo(102.7, 186.8);
        ctx.bezierCurveTo(101.1, 188.4, 98.5, 188.4, 96.9, 186.8);
        ctx.bezierCurveTo(95.3, 185.1, 95.3, 182.5, 96.9, 180.9);
        ctx.bezierCurveTo(98.5, 179.3, 101.1, 179.3, 102.7, 180.9);
        ctx.bezierCurveTo(104.3, 182.5, 104.3, 185.1, 102.7, 186.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();

        // panzoomfeedback/zoom/Group
        ctx.restore();

        // panzoomfeedback/zoom/Group/Compound Path
        ctx.save();
        ctx.beginPath();

        // panzoomfeedback/zoom/Group/Compound Path/Path
        ctx.moveTo(98.0, 183.0);
        ctx.lineTo(101.9, 183.0);
        ctx.lineTo(101.9, 184.6);
        ctx.lineTo(98.0, 184.6);
        ctx.lineTo(98.0, 183.0);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        ctx.restore();
    };

    api.drawPan = function (ctx) {
        ctx.save();
        ctx.beginPath();

        // panzoomfeedback/pan/Path
        ctx.moveTo(176.2, 89.0);
        ctx.lineTo(176.2, 94.8);
        ctx.lineTo(174.8, 94.8);
        ctx.bezierCurveTo(172.9, 67.5, 156.0, 42.2, 129.0, 30.9);
        ctx.bezierCurveTo(121.2, 27.6, 113.3, 25.8, 105.3, 25.2);
        ctx.lineTo(105.3, 23.9);
        ctx.lineTo(111.2, 23.9);
        ctx.lineTo(100.0, 16.5);
        ctx.lineTo(88.8, 23.9);
        ctx.lineTo(94.7, 23.9);
        ctx.lineTo(94.7, 25.2);
        ctx.bezierCurveTo(67.4, 27.2, 42.2, 44.0, 30.9, 71.0);
        ctx.bezierCurveTo(27.6, 78.8, 25.8, 86.8, 25.2, 94.8);
        ctx.lineTo(23.8, 94.8);
        ctx.lineTo(23.8, 89.0);
        ctx.lineTo(16.4, 100.1);
        ctx.lineTo(23.8, 111.3);
        ctx.lineTo(23.8, 105.4);
        ctx.lineTo(25.2, 105.4);
        ctx.bezierCurveTo(27.2, 132.7, 44.1, 157.9, 71.0, 169.1);
        ctx.bezierCurveTo(78.8, 172.4, 86.7, 174.2, 94.7, 174.8);
        ctx.lineTo(94.7, 176.3);
        ctx.lineTo(88.8, 176.3);
        ctx.lineTo(100.0, 183.7);
        ctx.lineTo(111.2, 176.3);
        ctx.lineTo(105.3, 176.3);
        ctx.lineTo(105.3, 174.8);
        ctx.bezierCurveTo(132.6, 172.8, 157.8, 156.0, 169.1, 129.0);
        ctx.bezierCurveTo(172.4, 121.3, 174.2, 113.3, 174.8, 105.4);
        ctx.lineTo(176.2, 105.4);
        ctx.lineTo(176.2, 111.3);
        ctx.lineTo(183.6, 100.1);
        ctx.lineTo(176.2, 89.0);
        ctx.closePath();

        // panzoomfeedback/pan/Path
        ctx.moveTo(164.5, 127.1);
        ctx.bezierCurveTo(149.6, 162.7, 108.6, 179.5, 72.9, 164.5);
        ctx.bezierCurveTo(37.3, 149.6, 20.5, 108.6, 35.5, 72.9);
        ctx.bezierCurveTo(50.4, 37.3, 91.4, 20.5, 127.1, 35.5);
        ctx.bezierCurveTo(162.7, 50.4, 179.5, 91.4, 164.5, 127.1);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.stroke();
        ctx.restore();
    };

    api.drawClutch = function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(112.1, 108.8);
        ctx.bezierCurveTo(112.8, 107.9, 113.4, 106.9, 113.8, 105.8);
        ctx.bezierCurveTo(115.9, 100.8, 115.1, 95.3, 112.1, 91.2);
        ctx.lineWidth = 4.0;
        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.lineCap = "square";
        ctx.stroke();

        // pointingfeedback/clutch/Group/Path
        ctx.beginPath();
        ctx.moveTo(108.8, 87.9);
        ctx.bezierCurveTo(107.9, 87.2, 106.9, 86.6, 105.8, 86.2);
        ctx.bezierCurveTo(100.8, 84.1, 95.3, 84.9, 91.2, 87.9);
        ctx.stroke();

        // pointingfeedback/clutch/Group/Path
        ctx.beginPath();
        ctx.moveTo(91.2, 112.1);
        ctx.bezierCurveTo(92.1, 112.8, 93.1, 113.4, 94.2, 113.8);
        ctx.bezierCurveTo(99.2, 115.9, 104.7, 115.1, 108.8, 112.1);
        ctx.stroke();

        // pointingfeedback/clutch/Group/Path
        ctx.beginPath();
        ctx.moveTo(87.9, 91.2);
        ctx.bezierCurveTo(87.2, 92.1, 86.6, 93.1, 86.2, 94.2);
        ctx.bezierCurveTo(84.1, 99.2, 84.9, 104.7, 87.9, 108.8);
        ctx.stroke();

        // pointingfeedback/clutch/Group
        ctx.restore();

        // pointingfeedback/clutch/Group/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(112.1, 108.8);
        ctx.bezierCurveTo(112.8, 107.9, 113.4, 106.9, 113.8, 105.8);
        ctx.bezierCurveTo(115.9, 100.8, 115.1, 95.3, 112.1, 91.2);
        ctx.lineWidth = 2.0;
        ctx.stroke();

        // pointingfeedback/clutch/Group/Path
        ctx.beginPath();
        ctx.moveTo(108.8, 87.9);
        ctx.bezierCurveTo(107.9, 87.2, 106.9, 86.6, 105.8, 86.2);
        ctx.bezierCurveTo(100.8, 84.1, 95.3, 84.9, 91.2, 87.9);
        ctx.stroke();

        // pointingfeedback/clutch/Group/Path
        ctx.beginPath();
        ctx.moveTo(91.2, 112.1);
        ctx.bezierCurveTo(92.1, 112.8, 93.1, 113.4, 94.2, 113.8);
        ctx.bezierCurveTo(99.2, 115.9, 104.7, 115.1, 108.8, 112.1);
        ctx.stroke();

        // pointingfeedback/clutch/Group/Path
        ctx.beginPath();
        ctx.moveTo(87.9, 91.2);
        ctx.bezierCurveTo(87.2, 92.1, 86.6, 93.1, 86.2, 94.2);
        ctx.bezierCurveTo(84.1, 99.2, 84.9, 104.7, 87.9, 108.8);
        ctx.stroke();
        ctx.restore();
    }

    api.drawPoint = function (ctx) {
        // pointingfeedback/point/Group/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(89.7, 100.0);
        ctx.lineTo(95.1, 100.0);
        ctx.fill();
        ctx.lineWidth = 3.0;
        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.lineCap = "square";
        ctx.stroke();

        // pointingfeedback/point/Group/Path
        ctx.beginPath();
        ctx.moveTo(89.7, 100.0);
        ctx.lineTo(95.1, 100.0);
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();
        ctx.lineWidth = 1.0;
        ctx.strokeStyle = "rgb(0, 0, 0)";
        ctx.lineCap = "butt";
        ctx.stroke();

        // pointingfeedback/point/Group
        ctx.restore();

        // pointingfeedback/point/Group/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(104.9, 100.0);
        ctx.lineTo(110.3, 100.0);
        ctx.fill();
        ctx.lineWidth = 3.0;
        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.lineCap = "square";
        ctx.stroke();

        // pointingfeedback/point/Group/Path
        ctx.beginPath();
        ctx.moveTo(104.9, 100.0);
        ctx.lineTo(110.3, 100.0);
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();
        ctx.lineWidth = 1.0;
        ctx.strokeStyle = "rgb(0, 0, 0)";
        ctx.lineCap = "butt";
        ctx.stroke();

        // pointingfeedback/point/Group
        ctx.restore();

        // pointingfeedback/point/Group/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(100.0, 110.3);
        ctx.lineTo(100.0, 104.9);
        ctx.fill();
        ctx.lineWidth = 3.0;
        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.lineCap = "square";
        ctx.stroke();

        // pointingfeedback/point/Group/Path
        ctx.beginPath();
        ctx.moveTo(100.0, 110.3);
        ctx.lineTo(100.0, 104.9);
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();
        ctx.lineWidth = 1.0;
        ctx.strokeStyle = "rgb(0, 0, 0)";
        ctx.lineCap = "butt";
        ctx.stroke();

        // pointingfeedback/point/Group
        ctx.restore();

        // pointingfeedback/point/Group/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(100.0, 95.1);
        ctx.lineTo(100.0, 89.7);
        ctx.fill();
        ctx.lineWidth = 3.0;
        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.lineCap = "square";
        ctx.stroke();

        // pointingfeedback/point/Group/Path
        ctx.beginPath();
        ctx.moveTo(100.0, 95.1);
        ctx.lineTo(100.0, 89.7);
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();
        ctx.lineWidth = 1.0;
        ctx.strokeStyle = "rgb(0, 0, 0)";
        ctx.lineCap = "butt";
        ctx.stroke();

        // pointingfeedback/clickdown
        ctx.restore();
    };

    api.drawDown = function (ctx) {
        // pointingfeedback/clickdown/Group/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(92.7, 107.3);
        ctx.lineTo(96.6, 103.4);
        ctx.fill();
        ctx.lineWidth = 3.0;
        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.lineCap = "square";
        ctx.stroke();

        // pointingfeedback/clickdown/Group/Path
        ctx.beginPath();
        ctx.moveTo(92.7, 107.3);
        ctx.lineTo(96.6, 103.4);
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();
        ctx.lineWidth = 1.0;
        ctx.strokeStyle = "rgb(0, 0, 0)";
        ctx.lineCap = "butt";
        ctx.stroke();

        // pointingfeedback/clickdown/Group
        ctx.restore();

        // pointingfeedback/clickdown/Group/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(103.4, 96.6);
        ctx.lineTo(107.3, 92.7);
        ctx.fill();
        ctx.lineWidth = 3.0;
        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.lineCap = "square";
        ctx.stroke();

        // pointingfeedback/clickdown/Group/Path
        ctx.beginPath();
        ctx.moveTo(103.4, 96.6);
        ctx.lineTo(107.3, 92.7);
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();
        ctx.lineWidth = 1.0;
        ctx.strokeStyle = "rgb(0, 0, 0)";
        ctx.lineCap = "butt";
        ctx.stroke();

        // pointingfeedback/clickdown/Group
        ctx.restore();

        // pointingfeedback/clickdown/Group/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(107.3, 107.3);
        ctx.lineTo(103.4, 103.4);
        ctx.fill();
        ctx.lineWidth = 3.0;
        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.lineCap = "square";
        ctx.stroke();

        // pointingfeedback/clickdown/Group/Path
        ctx.beginPath();
        ctx.moveTo(107.3, 107.3);
        ctx.lineTo(103.4, 103.4);
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();
        ctx.lineWidth = 1.0;
        ctx.strokeStyle = "rgb(0, 0, 0)";
        ctx.lineCap = "butt";
        ctx.stroke();

        // pointingfeedback/clickdown/Group
        ctx.restore();

        // pointingfeedback/clickdown/Group/Path
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(96.6, 96.6);
        ctx.lineTo(92.7, 92.7);
        ctx.fill();
        ctx.lineWidth = 3.0;
        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.lineCap = "square";
        ctx.stroke();

        // pointingfeedback/clickdown/Group/Path
        ctx.beginPath();
        ctx.moveTo(96.6, 96.6);
        ctx.lineTo(92.7, 92.7);
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();
        ctx.lineWidth = 1.0;
        ctx.strokeStyle = "rgb(0, 0, 0)";
        ctx.lineCap = "butt";
        ctx.stroke();

        // pointingfeedback/clutch
        ctx.restore();
    };

    api.drawRingnFingers = function (ctx, fingersList, whichhand) {
        ctx.shadowBlur = 0;
        ctx.save();
        ctx.beginPath();

        // handfeedback/ring/Path
        ctx.moveTo(100.0, 132.0);
        ctx.bezierCurveTo(82.3, 132.0, 68.0, 117.7, 68.0, 100.0);
        ctx.bezierCurveTo(68.0, 82.3, 82.3, 68.0, 100.0, 68.0);
        ctx.bezierCurveTo(117.7, 68.0, 132.0, 82.3, 132.0, 100.0);
        ctx.bezierCurveTo(132.0, 117.7, 117.7, 132.0, 100.0, 132.0);
        ctx.closePath();

        // handfeedback/ring/Path
        ctx.moveTo(129.8, 100.0);
        ctx.bezierCurveTo(129.8, 83.6, 116.4, 70.2, 100.0, 70.2);
        ctx.bezierCurveTo(83.6, 70.2, 70.2, 83.6, 70.2, 100.0);
        ctx.bezierCurveTo(70.2, 116.4, 83.6, 129.8, 100.0, 129.8);
        ctx.bezierCurveTo(116.4, 129.8, 129.8, 116.4, 129.8, 100.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();
        ctx.lineWidth = 1.0;
        ctx.stroke();
        var rotateAngle;
        if (whichhand == "right") {
            rotateAngle = -fingersList[0];
        } else if (whichhand == "left") {
            rotateAngle = fingersList[0] + 1.5;
//        console.log(fingersList[0]);
        }

        if (fingersList[0] > 0) {
            ctx.save();
            ctx.translate(100, 100);
            ctx.rotate(rotateAngle * Math.PI / 180);
            ctx.translate(-100, -100);
            ctx.beginPath();
            ctx.moveTo(94.3, 69.5);
            ctx.bezierCurveTo(96.2, 69.2, 98.1, 69.0, 100.0, 69.0);
            ctx.bezierCurveTo(101.9, 69.0, 103.8, 69.2, 105.7, 69.5);
            ctx.bezierCurveTo(105.9, 68.6, 106.0, 67.7, 105.8, 66.7);
            ctx.bezierCurveTo(105.1, 63.6, 101.9, 61.5, 98.7, 62.2);
            ctx.bezierCurveTo(95.6, 62.9, 93.5, 66.1, 94.2, 69.3);
            ctx.bezierCurveTo(94.3, 69.3, 94.3, 69.4, 94.3, 69.5);
            ctx.closePath();
            ctx.fill();

            // handfeedback/fingerout/Path
            ctx.beginPath();
            ctx.moveTo(105.9, 68.5);
            ctx.bezierCurveTo(105.9, 68.0, 105.9, 67.4, 105.8, 66.7);
            ctx.bezierCurveTo(105.1, 63.6, 101.9, 61.5, 98.7, 62.2);
            ctx.bezierCurveTo(95.8, 62.9, 93.9, 65.6, 94.1, 68.5);
            ctx.fill();
            ctx.lineWidth = 1.0;
            ctx.lineCap = "square";
            ctx.stroke();
            ctx.restore();
        } else {
            ctx.save();
            ctx.translate(100, 100);
            ctx.rotate(-rotateAngle * Math.PI / 180);
            ctx.translate(-100, -100);
            ctx.beginPath();
            ctx.moveTo(94.3, 69.3);
            ctx.bezierCurveTo(96.2, 69.1, 98.1, 69.0, 100.0, 69.0);
            ctx.bezierCurveTo(101.9, 69.0, 103.8, 69.1, 105.7, 69.3);
            ctx.bezierCurveTo(105.9, 68.9, 105.9, 68.4, 105.7, 68.0);
            ctx.bezierCurveTo(105.0, 66.4, 101.9, 65.5, 98.8, 65.8);
            ctx.bezierCurveTo(95.6, 66.1, 93.6, 67.6, 94.3, 69.2);
            ctx.bezierCurveTo(94.3, 69.2, 94.3, 69.2, 94.3, 69.3);
            ctx.closePath();
            ctx.fill();

            // handfeedback/fingerin/Path
            ctx.beginPath();
            ctx.moveTo(105.8, 68.5);
            ctx.bezierCurveTo(105.9, 68.3, 105.9, 68.0, 105.7, 67.8);
            ctx.bezierCurveTo(105.0, 66.4, 101.9, 65.5, 98.8, 65.8);
            ctx.bezierCurveTo(95.8, 66.1, 93.9, 67.3, 94.2, 68.5);
            ctx.lineWidth = 0.9;
            ctx.lineCap = "square";
            ctx.stroke();
            ctx.restore();
        }

        for (var i = 1; i < fingersList.length; i++) {
            var rotateAngel;
            if (whichhand == "right") {
                rotateAngel = i - 2.5;
            } else if (whichhand == "left") {
                rotateAngel = 2.5 - i;
            }
            if (fingersList[i]) {
                ctx.save();
                ctx.translate(100, 100);
                ctx.rotate(rotateAngel * 30 * Math.PI / 180);
                ctx.translate(-100, -100);
                ctx.beginPath();
                ctx.moveTo(94.3, 69.5);
                ctx.bezierCurveTo(96.2, 69.2, 98.1, 69.0, 100.0, 69.0);
                ctx.bezierCurveTo(101.9, 69.0, 103.8, 69.2, 105.7, 69.5);
                ctx.bezierCurveTo(105.9, 68.6, 106.0, 67.7, 105.8, 66.7);
                ctx.bezierCurveTo(105.1, 63.6, 101.9, 61.5, 98.7, 62.2);
                ctx.bezierCurveTo(95.6, 62.9, 93.5, 66.1, 94.2, 69.3);
                ctx.bezierCurveTo(94.3, 69.3, 94.3, 69.4, 94.3, 69.5);
                ctx.closePath();
                ctx.fill();

                // handfeedback/fingerout/Path
                ctx.beginPath();
                ctx.moveTo(105.9, 68.5);
                ctx.bezierCurveTo(105.9, 68.0, 105.9, 67.4, 105.8, 66.7);
                ctx.bezierCurveTo(105.1, 63.6, 101.9, 61.5, 98.7, 62.2);
                ctx.bezierCurveTo(95.8, 62.9, 93.9, 65.6, 94.1, 68.5);
                ctx.fill();
                ctx.lineWidth = 1.0;
                ctx.lineCap = "square";
                ctx.stroke();
                ctx.restore();
            } else {
                ctx.save();
                ctx.translate(100, 100);
                ctx.rotate(rotateAngel * 30 * Math.PI / 180);
                ctx.translate(-100, -100);
                ctx.beginPath();
                ctx.moveTo(94.3, 69.3);
                ctx.bezierCurveTo(96.2, 69.1, 98.1, 69.0, 100.0, 69.0);
                ctx.bezierCurveTo(101.9, 69.0, 103.8, 69.1, 105.7, 69.3);
                ctx.bezierCurveTo(105.9, 68.9, 105.9, 68.4, 105.7, 68.0);
                ctx.bezierCurveTo(105.0, 66.4, 101.9, 65.5, 98.8, 65.8);
                ctx.bezierCurveTo(95.6, 66.1, 93.6, 67.6, 94.3, 69.2);
                ctx.bezierCurveTo(94.3, 69.2, 94.3, 69.2, 94.3, 69.3);
                ctx.closePath();
                ctx.fill();

                // handfeedback/fingerin/Path
                ctx.beginPath();
                ctx.moveTo(105.8, 68.5);
                ctx.bezierCurveTo(105.9, 68.3, 105.9, 68.0, 105.7, 67.8);
                ctx.bezierCurveTo(105.0, 66.4, 101.9, 65.5, 98.8, 65.8);
                ctx.bezierCurveTo(95.8, 66.1, 93.9, 67.3, 94.2, 68.5);
                ctx.lineWidth = 0.9;
                ctx.lineCap = "square";
                ctx.stroke();
                ctx.restore();
            }
        }
        ctx.restore();
    }

    return api;
})();

var recorder = (function () {
    var api = {};

    api.records = [];
    var isRecording = false;
    var note = "";
    var counter = 0;

    api.isRecording = function () {
        return isRecording;
    };


    api.stopRecorder = function () {
        isRecording = false;
        leapDeviceMgr.printInfo("Stopped");
    };


    api.downloadRecords = function () {
        var date = new Date();
        var logData = [];
        logData.push([date.toLocaleString(), note, recorder.records]);

        var blob = new Blob([JSON.stringify(logData)], {type: 'text/plain'});

        counter++;
        saveAs(blob, note + " " + counter + ".txt");
        recorder.stopRecorder();
        api.records = [];
    };


    api.startRecorder = function (note_) {
        isRecording = true;
        note = note_;
        leapDeviceMgr.printInfo("Recording");
    };


    api.updateRecord = function (status, additionalStatus, touchStatus) {
        if (isRecording) {
            touchStatus = touchStatus || [];
            var touches = [];
            for (var i = 0; i < touchStatus.length; i++) {
                touches.push({
                    id: touchStatus[i].id,
                    pageX: touchStatus[i].pageX,
                    pageY: touchStatus[i].pageY,
                    whichhand: touchStatus[i].whichhand,
                    starttime: touchStatus[i].starttime,
                    group: touchStatus[i].group
                });
            }
            var record = [new Date().getTime(), status, additionalStatus, touches];
//            var record = [new Date().getTime(), status, additionalStatus, touchStatus];

            recorder.records.push(record);
        }
    };

    return api;


})();

var GESTURE_ALL_RIGHT = [];
for (var i = 0; i < rightHandGesture.length; i++) {
    GESTURE_ALL_RIGHT.push(rightHandGesture[i].type);
}
var GESTURE_ALL_LEFT = [];
for (var i = 0; i < rightHandGesture.length; i++) {
    GESTURE_ALL_LEFT.push(rightHandGesture[i].type);
}

GESTURE_SUB = ["fist", "+ind", "+ind+mid", "+thu+ind", "-rin-pin", "-thu", "full"];

//TEST

