//Config
var THR_HAND_CONFIDENCE = 0.1;
var ORDINAL_DISTANCE_WEIGHT = 0.60;
var THUMB_TIP_WEIGHT = 0.10;
var NB_FINGER_WEIGHT = 0.30;
var GESTURE_ICON_SIZE = 120;
var SCALE_RATIO = 1.5;
var FINGER_RENDER_MODE = 0;
var isVerboseInfoShonw = false;

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
        $("#frameDataRight").css("z-index", "200000");
        $("#frameDataLeft").hide()
        $("#frameDataRight").css("z-index", "200000");
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
                    if (Leap.vec3.distance(fin1, fin2) < 30) {    //heuristics
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


    }

    api.numberOfDev = function () {
        return controllers.length;
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
        controller.analyzer = new quanAnalyzer(tag);
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
        createProgress();
        createDebugTextElement();
        touchMgr.setupTouches();
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

                this.controls.update(this.gestureList[this.analyzer.getMinIndex()], frame);
                this.onFrameLoop(this.controls);

                if (this.controls.valid) {
                    window["interstate"]["fsm"]["leap" + this.tag]();
                } else {
                    window["interstate"]["fsm"]["noLeap" + this.tag]();
                }

//                interstate.update();
                //debug info: fps
                var frameOutput = document.getElementById("frameDataLeft");
                frameOutput.innerHTML = "<div style='width:650px; font-size: 30px;float:left; padding:5px; position:absolute; top:10px; left:10px''>" + fps.getFPS() + "<br/>" + interstate.fsm.current + "</div>";
//                frameOutput.innerHTML = "<div style='width:650px; font-size: 30px;float:left; padding:5px; position:absolute; top:10px; left:10px''>" + this.controls.devianceVal + "</div>";
                $("#frameDataLeft").show();
            });

        }
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


function quanAnalyzer(tag) {
    this._list = [];
    this._gestures;
    switch (tag) {
        case "right":
            this._gestures = JSON.parse(localStorage.rightGestures);
            break;
        case "left":
            this._gestures = JSON.parse(localStorage.rightGestures);
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

    this.getList = function () {
        return this._list;
    };
}

var touchMgr = (function () {
    var currentTouches = [];

    var api = {};
    var canvas = document.getElementById("leap-overlay3");
    var ctx = canvas.getContext("2d");

    // Finds the array index of a touch in the currentTouches array.
    var findCurrentTouchIndex = function (id) {
        for (var i = 0; i < currentTouches.length; i++) {
            if (currentTouches[i].id === id) {
                return i;
            }
        }

        // Touch not found! Return -1.
        return -1;
    };

    var toggleHand = function (whichhand) {
        if (whichhand == "right") {
            return "left";
        } else {
            return "right"
        }
    }


    var calculateCenter = function (whichhand) {
        var posX = 0, posY = 0;
        var counter = 0;
        switch (whichhand) {
            case "right":
                for (var i = 0; i < currentTouches.length; i++) {
                    if (currentTouches[i].whichhand == "right") {
                        posX += currentTouches[i].pageX;
                        posY += currentTouches[i].pageY;
                        counter++;
                    }
                }
                posX /= counter;
                posY /= counter;
                break;
            case "left":
                for (var i = 0; i < currentTouches.length; i++) {
                    if (currentTouches[i].whichhand == "left") {
                        posX += currentTouches[i].pageX;
                        posY += currentTouches[i].pageY;
                        counter++;
                    }
                }
                posX /= counter;
                posY /= counter;
                break;
            case "all":
                for (var i = 0; i < currentTouches.length; i++) {
                    posX += currentTouches[i].pageX;
                    posY += currentTouches[i].pageY;
                    counter++;
                }
                posX /= counter;
                posY /= counter;
                break;
        }
        return [posX, posY];
    };

    var countTouches = function (whichhand) {
        var counter = 0;
        switch (whichhand) {
            case "right":
                for (var i = 0; i < currentTouches.length; i++) {
                    if (currentTouches[i].whichhand == "right") {
                        counter++;
                    }
                }
                break;
            case "left":
                for (var i = 0; i < currentTouches.length; i++) {
                    if (currentTouches[i].whichhand == "left") {
                        counter++;
                    }
                }
                break;
            case "all":
                for (var i = 0; i < currentTouches.length; i++) {
                    counter++;
                }
                break;
        }
        return counter;
    };

    // Creates a new touch in the currentTouches array and draws the starting
    // point on the canvas.
    var touchStarted = function (event) {
        var touches = event.changedTouches;

        for (var i = 0; i < touches.length; i++) {
            var touch = touches[i];
            var hand = "right";
            if (interstate.fsm.current == "waitLeft" || interstate.fsm.current == "unknownLeft") {
                hand = "left";
            }

            if (currentTouches.length == 0) {
                interstate.fsm.newTouch();
                currentTouches.push({
                    id: touch.identifier,
                    pageX: touch.pageX,
                    pageY: touch.pageY,
                    whichhand: hand
                });
            } else if (interstate.fsm.current == "twoTouches") {
                var newTouchVec = vec2.fromValues(touch.pageX, touch.pageY);
                var rightCtr = calculateCenter("right");
                var leftCtr = calculateCenter("left");

                var leftDis = vec2.dist(newTouchVec, leftCtr);
                var rightDis = vec2.dist(newTouchVec, rightCtr);

                if (leftDis < rightDis) {
                    currentTouches.push({
                        id: touch.identifier,
                        pageX: touch.pageX,
                        pageY: touch.pageY,
                        whichhand: "left"
                    });
                } else {
                    currentTouches.push({
                        id: touch.identifier,
                        pageX: touch.pageX,
                        pageY: touch.pageY,
                        whichhand: "right"
                    });
                }

            } else {
                var newTouchVec = vec2.fromValues(touch.pageX, touch.pageY);
                var touchCtr = calculateCenter("all");

                var dis = vec2.dist(newTouchVec, touchCtr);
                if (dis > 300) {
                    currentTouches.push({
                        id: touch.identifier,
                        pageX: touch.pageX,
                        pageY: touch.pageY,
                        whichhand: toggleHand(currentTouches[0].whichhand)
                    });
                    interstate.fsm.newTouchFar();
                } else {
                    currentTouches.push({
                        id: touch.identifier,
                        pageX: touch.pageX,
                        pageY: touch.pageY,
                        whichhand: currentTouches[0].whichhand
                    });
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
                var currentTouch = currentTouches[currentTouchIndex];


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
                    ctx.fillStyle = "rgba(200, 0, 200, 0.2)";
                    ctx.strokeStyle = "rgba(200, 0, 200, 0.8)";
                }

                ctx.fill();

                ctx.lineWidth = 2.0;
                ctx.stroke();

                // Store the record.
                currentTouches.splice(currentTouchIndex, 1, currentTouch);
            }
            else {
                console.log('Touch was not found!');
            }

        }

    };


    // Draws a line to the final touch position on the canvas and then
    // removes the touh from the currentTouches array.
    var touchEnded = function (event) {
        var touches = event.changedTouches;

        for (var i = 0; i < touches.length; i++) {
            var touch = touches[i];
            var currentTouchIndex = findCurrentTouchIndex(touch.identifier);

            if (currentTouchIndex >= 0) {
                var currentTouch = currentTouches[currentTouchIndex];

                ctx.clearRect(0, 0, canvas.width, canvas.height);


                // Remove the record.
                currentTouches.splice(currentTouchIndex, 1);

                var counts = countTouches("all");
                if (counts == 0) {
                    interstate.fsm.noTouch();
                } else {
                    var countsLeft = countTouches("left");
                    var countsRight = countTouches("right");
                    if (countsLeft == 0) {
                        interstate.fsm.noTouchLeft();
                    } else if (countsRight == 0) {
                        interstate.fsm.noTouchRight();
                    }
                }
            } else {
                console.log('Touch was not found!');
            }

        }

    };


    // Removes cancelled touches from the currentTouches array.
    var touchCancelled = function (event) {
        var touches = event.changedTouches;

        for (var i = 0; i < touches.length; i++) {
            var currentTouchIndex = findCurrentTouchIndex(touches[i].identifier);

            if (currentTouchIndex >= 0) {
                // Remove the touch record.
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                currentTouches.splice(currentTouchIndex, 1);
            } else {
                console.log('Touch was not found!');
            }
        }
    };

    api.changeTouchHand = function (hand) {
        for (var i = 0; i < currentTouches.length; i++) {
            currentTouches[i].whichhand = hand;
        }
    }


    api.setupTouches = function () {
        var canvas = document.getElementById("touch-overlay");


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

    api.touches = currentTouches;

    return api;
})();

var testOutput = function () {
    console.log("test");
}

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
                console.log("enter " + to);
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
    this.use = GetURLParameter("use");
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
    this.depthVal = 1;
    this.devianceVal = 1;
    this.fingerList = [40, 1, 1, 1, 1];
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


    this.updateRelativeVals = function (palmPos) {
        var depth = palmPos[1];
        var deviance = vec2.len([palmPos[0], palmPos[2]]);

        this.depthVal = 1;
        this.devianceVal = 1;
        if (depth > DP_END) {
            var minDp = Math.min(DP_END + DP_DANGER_RANGE, depth);
            this.depthVal = 1 - (minDp - DP_END) / (DP_DANGER_RANGE * 2);
        } else if (depth < DP_START) {
            var maxDP = Math.max(DP_START - DP_DANGER_RANGE, depth);
            maxDP -= (DP_START - DP_DANGER_RANGE);
            this.depthVal = 2 - maxDP / (DP_DANGER_RANGE);
        }

        var dv_close = depth * DV_RATIO;
        var dv_far = depth * (DV_RATIO + DV_BOUND);

        if (deviance > dv_close) {
            var minDV = Math.min(deviance, dv_far);
            this.devianceVal = 1 - (minDV - dv_close) / (depth * DV_BOUND);
        }

//        if (this.depthVal <= 0.5 || this.depthVal >= 1.8) {
//            this.posture = "invalid";
//        } else if (this.devianceVal <= 0.6) {
//            this.posture = "invalid";
//        }

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

        var range = this.thumbBent - this.thumbExtended;

        switch (this.cursorState) {
            case "active":
                if (distance > (this.thumbExtended + range * w_active + range * w_active * w_fuzzyRangeActive)) {
                    this.setCursorState("down");
                }
                break;
            case "down":
                if (distance > (this.thumbExtended + range * (w_active + w_down) )) {  //to-do
                    this.setCursorState("none");
                } else if (distance < (this.thumbExtended + range * w_active - range * w_down * w_fuzzyRangeActive)) {
                    this.setCursorState("active");
                }
                break;
            case "none":
                if (distance < (this.thumbExtended + range * w_active)) {
                    this.setCursorState("down");
                }
                break;

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

    this.update = function (posture, frame) {
        this.posture = posture;
        this.timestamp = frame.timestamp * 0.001;
        if (frame.hands[0] != undefined) {
            this.valid = true;
            var hand = frame.hands[0];
            if(Math.abs(hand.confidence*100-this.confidence)>2)
            this.confidence += (hand.confidence*100-this.confidence)/4;
//            this.confidence = hand.confidence * 100;
            this.palmPosition = hand.palmPosition;
            this.palmNormal = hand.palmNormal;
            this.stablePalmPosition = hand.stabilizedPalmPosition;
            var ratio = utilities.getRatio(this.palmPosition, this.use);
            if(ratio >= 0.8) {
                this.posture = "invalid";
            }

//            this.updateRelativeVals(hand.palmPosition);
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

            if (this.posture == "+thu+ind" || this.posture == "+ind" || this.posture == "+thu") {

                if (this.tag == "right")  //to-do
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
            this.confidence = 0;
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

    api.getRatio = function (position, use) {
        var posX, posY;
        var ctrPos = 200,
            radius = 120;


        var threshold = .8;
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
            radius = 120;
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
    }

    api.drawPan = function (ctx) {
        ctx.save();
        ctx.beginPath();

        // panzoomfeedback/pan/Path
        ctx.moveTo(71.0, 169.1);
        ctx.bezierCurveTo(32.8, 153.1, 14.8, 109.2, 30.9, 71.0);
        ctx.bezierCurveTo(46.9, 32.8, 90.8, 14.8, 129.0, 30.9);
        ctx.bezierCurveTo(167.2, 46.9, 185.2, 90.8, 169.1, 129.0);
        ctx.bezierCurveTo(153.1, 167.2, 109.2, 185.2, 71.0, 169.1);
        ctx.closePath();

        // panzoomfeedback/pan/Path
        ctx.moveTo(164.5, 127.1);
        ctx.bezierCurveTo(179.5, 91.4, 162.7, 50.4, 127.1, 35.5);
        ctx.bezierCurveTo(91.4, 20.5, 50.4, 37.3, 35.5, 72.9);
        ctx.bezierCurveTo(20.5, 108.6, 37.3, 149.6, 72.9, 164.5);
        ctx.bezierCurveTo(108.6, 179.5, 149.6, 162.7, 164.5, 127.1);
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


var GESTURE_ALL_RIGHT = [];
for (var i = 0; i < rightHandGesture.length; i++) {
    GESTURE_ALL_RIGHT.push(rightHandGesture[i].type);
}
var GESTURE_ALL_LEFT = [];
for (var i = 0; i < rightHandGesture.length; i++) {
    GESTURE_ALL_LEFT.push(rightHandGesture[i].type);
}


//TEST

