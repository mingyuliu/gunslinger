var FINGER_RENDER_MODE = 0;


var canvas = document.getElementById("leap-overlay");

// fullscreen
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

var ctx = canvas.getContext("2d");
ctx.translate(canvas.width, canvas.height);



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


var CURSOR_SIZE = 40;
var scaleFactor = 1; //temporal 
var distanceAlphaProj = 1;

function rightOnFrame(controls) {

    switch (controls.tag) {
        case "right":
            switch (controls.posture) {
                case "+thu+ind":
                    var cursorX = controls.x;
                    var cursorY = controls.y;

                    switch (controls.cursorState) {
                        case "active":
                            ctx.fillStyle = "rgba(255,255,0,0.4)";
                            break;
                        case "down":
                            ctx.fillStyle = "rgba(200,0,0,0.6)";
                            break;
                        case "dragging":
                            ctx.fillStyle = "rgba(255,0,0,0.9)";
                            break;
                    }
                    ctx.shadowBlur = 0;
                    ctx.beginPath();
                    ctx.arc(-cursorX, -cursorY, CURSOR_SIZE * scaleFactor, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.strokeStyle = "rgba(0,0,0," + distanceAlphaProj + ")";
                    ctx.lineWidth = 8 * scaleFactor;
                    ctx.beginPath();
                    ctx.arc(-cursorX, -cursorY, CURSOR_SIZE * scaleFactor, 0, 2 * Math.PI);
                    ctx.stroke();

                    var targetSize = 20 * scaleFactor;
                    var lineLen = 60 * scaleFactor;
                    ctx.lineWidth = 5 * scaleFactor;
                    ctx.beginPath();

                    ctx.moveTo(-cursorX, -cursorY + targetSize);
                    ctx.lineTo(-cursorX, -cursorY + lineLen);

                    ctx.moveTo(-cursorX, -cursorY - targetSize);
                    ctx.lineTo(-cursorX, -cursorY - lineLen);

                    ctx.moveTo(-cursorX + targetSize, -cursorY);
                    ctx.lineTo(-cursorX + lineLen, -cursorY);

                    ctx.moveTo(-cursorX - targetSize, -cursorY);
                    ctx.lineTo(-cursorX - lineLen, -cursorY);
                    ctx.stroke();
                    break;
                case "+ind":
                    var cursorX = controls.x;
                    var cursorY = controls.y;
                    ctx.fillStyle = "rgba(0,0,0," + distanceAlphaProj + ")";
                    ctx.shadowBlur = 20;
                    ctx.shadowColor = '#999';
                    ctx.beginPath();
                    ctx.arc(-cursorX, -cursorY, CURSOR_SIZE * scaleFactor, 0, 2 * Math.PI);
                    ctx.fill();
                    break;
            }
            break;
        case "left":
            break;
    }
}


function leftOnFrame(controls) {}

var ACCELERATION_FACTOR = 5;
leapDeviceMgr.initDevice(1920, 1098);
leapDeviceMgr.addDevice("localhost", "right", GESTURE_ALL_RIGHT, rightOnFrame);
//leapDeviceMgr.addDevice("192.168.20.128", "left", GESTURE_ALL_LEFT, leftOnFrame);

leapDeviceMgr.start();