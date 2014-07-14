var calibrator = (function() {
    var data = [];
    var types = [];

    var api = {};
    var whichhand;
    var currentIndex;
    var stepsEl = document.getElementById("steps");
    var typeEl = document.getElementById("currenttype");

    initDataset = function() {
        switch (whichhand) {
            case "right":
                for (var i = 0; i < rightHandGesture.length; i++) {
                    types.push(rightHandGesture[i].type);
                }

                break;
            case "left":
                for (var i = 0; i < leftHandGesture.length; i++) {
                    types.push(leftHandGesture[i].type);
                }
                break;
        }
        currentIndex = 0;
        stepsEl.innerHTML = (currentIndex + 1) + "/" + (types.length);
        typeEl.innerHTML = whichhand + " " + types[currentIndex];
        $(document).keyup(function(event) {
            switch (event.which) {
                case 84: //"t" toggle cursor view
                    if (currentIndex < types.length) {
                        var extended = [];
                        var hand = currentFrame.hands[0];
                        var fingers = currentFrame.hands[0].fingers;
                        for (var i = 0; i < fingers.length; i++) {
                            extended[i] = fingers[i].extended;
                        }
                        var thumbDist;
                        thumbDist = Leap.vec3.distance(fingers[0].tipPosition, hand.palmPosition);
                        console.log(thumbDist);
                        data.push(new Gesture(types[currentIndex], extended, thumbDist));
                        currentIndex++;
                        if (currentIndex < types.length) {
                            stepsEl.innerHTML = (currentIndex + 1) + "/" + (types.length);
                            typeEl.innerHTML = whichhand + " " + types[currentIndex];
                        } else {
                            var handSpan = Leap.vec3.distance(fingers[0].tipPosition, fingers[4].tipPosition);
                            var handSpanStr = JSON.stringify(handSpan, undefined);
                            localStorage.handSpan = handSpanStr;
                            typeEl.innerHTML = whichhand + " completed";
                            console.log(data);
                        }
                    } else {
                        var dataStr = JSON.stringify(data, undefined);
                        switch (whichhand) {
                            case "right":
                                localStorage.rightGestures = dataStr;

                                break;
                            case "left":
                                localStorage.leftGestures = dataStr;
                                break;
                        }

                        alert("complete");
                    }
                    break;
            }
        });
    };

    api.startCalibrate = function(whichhand_) {
        whichhand = whichhand_;
        initDataset();
    };

    return api;

})();

function Gesture(type, extended, thumbDistVec) {
    this.type = type;
    this.extended = extended;
    this.thumbDistVec = thumbDistVec;
};

var canvas = document.getElementById("leap-overlay");

// fullscreen
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

var ctx = canvas.getContext("2d");
ctx.translate(canvas.width, canvas.height);

function angle2Lines2dCos(v1, v2) {
    var m1, n1, m2, n2;

    m1 = v1[0];
    n1 = v1[1];


    m2 = v2[0];
    n2 = v2[1];

    return (m1 * m2 + n1 * n2) / (Math.sqrt(m1 * m1 + n1 * n1) * Math.sqrt(m2 * m2 + n2 * n2));

}

function drawFingers(frame) {
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
    var fingers = hand.fingers;
    if (fingers.length == 0) {
        return;
    }


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

var tag = GetURLParameter("whichhand");
if (tag != undefined) {
    calibrator.startCalibrate(tag);

}