var FINGER_RENDER_MODE = 0;


var canvas = document.getElementById("leap-overlay");

// fullscreen
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

var ctx = canvas.getContext("2d");
ctx.translate(canvas.width, canvas.height);
var GESTURE_ICON_SIZE = 120;
var rightGesturePanel = document.getElementById("rightGesturePanel");
var rightGesturePanelContainer = document.getElementById("rightGesturePanelContainer");
var leftGesturePanelContainer = document.getElementById("leftGesturePanelContainer");

rightGesturePanel.width = GESTURE_ICON_SIZE * rightGestureList.length;
rightGesturePanel.height = GESTURE_ICON_SIZE;
rightGesturePanelContainer.width = GESTURE_ICON_SIZE * rightGestureList.length;
rightGesturePanelContainer.height = GESTURE_ICON_SIZE * 1.2;


var ctxRightGestures = rightGesturePanel.getContext("2d");
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

leftGesturePanel.width = GESTURE_ICON_SIZE * leftGestureList.length;
leftGesturePanel.height = GESTURE_ICON_SIZE;
leftGesturePanelContainer.width = GESTURE_ICON_SIZE * leftGestureList.length;
leftGesturePanelContainer.height = GESTURE_ICON_SIZE * 1.2;

var ctxLeftGestures = leftGesturePanel.getContext("2d");
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



var SCALE_RATIO = 1.5;

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


    for (var i = 0; i < leftGestureList.length; i++) {
        var handX = (i + 0.5) * GESTURE_ICON_SIZE;
        var handY = GESTURE_ICON_SIZE / 1.6;

        ctxLeftGestures.fillStyle = "rgba(255, 153, 0, 1.0)";
        ctxLeftGestures.strokeStyle = "rgba(255, 153, 0, 1.0)";


        var startX = leftGestureList[i].hand.start[0] / SCALE_RATIO;
        var startY = leftGestureList[i].hand.start[1] / SCALE_RATIO;
        var endX = leftGestureList[i].hand.end[0] / SCALE_RATIO;
        var endY = leftGestureList[i].hand.end[1] / SCALE_RATIO;
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

        for (var j = 0; j < leftGestureList[i].fingers.length; j++) {

            var startX = leftGestureList[i].fingers[j].start[0] / SCALE_RATIO;
            var startY = leftGestureList[i].fingers[j].start[1] / SCALE_RATIO;
            var endX = leftGestureList[i].fingers[j].end[0] / SCALE_RATIO;
            var endY = leftGestureList[i].fingers[j].end[1] / SCALE_RATIO;

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
        var textLen = leftHandGesture[i].type.length * 20;
        ctxLeftGestures.fillText(leftHandGesture[i].type, handX - textLen / 4, GESTURE_ICON_SIZE * 0.92);
    }
}

var rightProgressbars = new Array();
var leftProgressbars = new Array();

function createProgress() {
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
        document.body.appendChild(div);
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
    for (var i = 0; i < leftGestureList.length; i++) {

        var div = document.createElement('div');
        div.setAttribute('class', 'meter red');
        div.setAttribute('id', 'leftProgressbar' + i);

        div.style.top = startPosY + "px";
        div.style.left = startPosX + i * GESTURE_ICON_SIZE + 5 + "px";
        div.style.zIndex = 10006;
        div.style.width = GESTURE_ICON_SIZE / 1.2 + "px";
        div.style.position = "absolute";
        div.style.opacity = "0.7";
        document.body.appendChild(div);
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
    }
    // } else {
    //     move("#rightTargetMask")
    //         .x( originX - targetX)
    //         .end();
    // }
}

var fingerTipsPos;

function drawFingers(frame, whichhand) {
    if (whichhand != "right") return;
    ctx.clearRect(-canvas.width, -canvas.height, canvas.width, canvas.height);

    var hand = frame.hands[0];
    var extendedAlpha = 1.0;

    var centerX = document.body.clientWidth / 2;
    var centerY = document.body.clientHeight / 2;


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

            ctx.shadowBlur = 20;
            ctx.shadowColor = '#000000';

            ctx.strokeStyle = "rgba(255, 153, 0, 1)";
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.arc(startX - centerX, startY - centerY, 8, 0, 2 * Math.PI);
            ctx.fill();
            ctx.moveTo(startX - centerX, startY - centerY);
            ctx.lineTo(xPos + startX - centerX, yPos + startY - centerY);
            ctx.lineWidth = 10;

            ctx.stroke();




            // for (var i = 0; i < fingers.length; i++) {

            //     var fingerProjDir = [fingers[i].direction[0], fingers[i].direction[2]];
            //     var fingerProjPos = [fingers[i].tipPosition[0], fingers[i].tipPosition[2]];
            //     var fingerLen = fingers[i].length;

            //     if (fingerProjDir[0] >= 0) {
            //         var cos = angle2Lines2dCos(yNormal, fingerProjDir);
            //         yPos = -fingerLen * cos;
            //         xPos = -Math.sqrt(fingerLen * fingerLen - yPos * yPos);
            //         startY = fingerProjPos[1];
            //         startX = fingerProjPos[0];
            //     } else {
            //         var cos = angle2Lines2dCos(yNormal, fingerProjDir);
            //         yPos = -fingerLen * cos;
            //         xPos = Math.sqrt(fingerLen * fingerLen - yPos * yPos);
            //         startY = fingerProjPos[1];
            //         startX = fingerProjPos[0];
            //     }
            //     extendedAlpha = (fingers[i].extended ? 1 : 0.2);
            //     ctx.shadowBlur = 5;
            //     ctx.shadowColor = '#000000';
            //     ctx.strokeStyle = "rgba(255, 0, 51," + extendedAlpha + ")";
            //     ctx.beginPath();
            //     ctx.moveTo(startX - centerX, startY - centerY);
            //     ctx.lineTo(xPos + startX - centerX, yPos + startY - centerY);
            //     ctx.lineWidth = 8;

            //     ctx.lineCap = "round";
            //     ctx.stroke();
            // }

            var fingerTipsPos = [];
            for (var i = 0; i < fingers.length; i++) {
                fingerTipsPos.push([fingers[i].mcpPosition, fingers[i].pipPosition, fingers[i].dipPosition, fingers[i].tipPosition]);

            }

            for (var i = 0; i < fingerTipsPos.length; i++) {
                for (var j = 0; j < 3; j++) {
                    extendedAlpha = (fingers[i].extended ? 1 : 0.2);;
                    ctx.shadowBlur = 5;
                    ctx.shadowColor = '#000000';
                    ctx.strokeStyle = "rgba(255, 0, 51," + extendedAlpha + ")";
                    ctx.beginPath();
                    ctx.moveTo(fingerTipsPos[i][j][0] - centerX, fingerTipsPos[i][j][2] - centerY);
                    ctx.lineTo(fingerTipsPos[i][j + 1][0] - centerX, fingerTipsPos[i][j + 1][2] - centerY);
                    ctx.lineWidth = 8;

                    ctx.lineCap = "round";
                    ctx.stroke();
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

            ctx.shadowBlur = 20;
            ctx.shadowColor = '#000000';

            ctx.strokeStyle = "rgba(255, 153, 0, 1)";
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.arc(startX - centerX, startY - centerY, 8, 0, 2 * Math.PI);
            ctx.fill();
            ctx.moveTo(startX - centerX, startY - centerY);
            ctx.lineTo(xPos + startX - centerX, yPos + startY - centerY);
            ctx.lineWidth = 10;

            ctx.stroke();


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
                extendedAlpha = 1;
                ctx.shadowBlur = 5;
                ctx.shadowColor = '#000000';
                ctx.strokeStyle = "rgba(255, 0, 51," + extendedAlpha + ")";
                ctx.beginPath();
                ctx.moveTo(startX - centerX, startY - centerY);
                ctx.lineTo(xPos + startX - centerX, yPos + startY - centerY);
                ctx.lineWidth = 8;

                ctx.lineCap = "round";
                ctx.stroke();
            }


            break;
    }


}

function getFilterFingers(fingersraw) {
    var len = fingersraw.length;
    while (len > 2) {
        len--;
        console.log(Leap.vec3.distance(fingersraw[len].tipPosition, fingersraw[len - 1].tipPosition));
        if (Leap.vec3.distance(fingersraw[len].tipPosition, fingersraw[len - 1].tipPosition) < 20) {
            if (fingersraw[len].type != 0) {
                fingersraw.splice(len, 1);

            }

        }
    }
    len = fingersraw.length;
    while (len--) {
        if (!fingersraw[len].extended && fingersraw[len].type != 0) {
            fingersraw.splice(len, 1);
        }
    }
    //compare bones in thumb to determine whether it's extended or not
    if (fingersraw.length > 1) {
        var differ = fingersraw[0].tipPosition[0] - fingersraw[1].carpPosition[0];
        if (differ > -15) {
            fingersraw.splice(0, 1);
        }
    } else if (fingersraw.length == 1) {
        if (!fingersraw[0].extended) {
            fingersraw.splice(0, 1);
        }
    }

    //elimilate mid and fin mix issue
    if (fingersraw.length > 2 && fingersraw.length < 5) {
        if (fingersraw[0].type == 0 && fingersraw[1].type == 1) {
            //var len = fingersraw.length - 1;
            while (fingersraw.length > 2) {
                fingersraw.splice(fingersraw.length - 1, 1);
            }
        }
    }
    return fingersraw;
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



function angle2Lines2dCos(v1, v2) {
    var m1, n1, m2, n2;

    m1 = v1[0];
    n1 = v1[1];


    m2 = v2[0];
    n2 = v2[1];

    return (m1 * m2 + n1 * n2) / (Math.sqrt(m1 * m1 + n1 * n1) * Math.sqrt(m2 * m2 + n2 * n2));

}


$(document).keyup(function(event) {
    switch (event.which) {
        case 84: //"t" toggle cursor view
            FINGER_RENDER_MODE = (FINGER_RENDER_MODE + 1) % 2;
            break;
    }
});