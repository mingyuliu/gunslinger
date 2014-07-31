/**
 * Created by m83liu on 2014-07-28.
 */



function filterBySize(set, size) {
    return set.filter(function (el) {
        return el[0][0][2][0].targetSize == size;
    });
}

function filterByPartic(set, partic) {
    return set.filter(function (el) {
        return el[0][0][1] == ("p" + partic + "_f") || el[0][0][1] == ("p" + partic + "_s");
    });
}


function getDataset(rawdata) {
    var recordData = [];
    var valid = true;
    var currentTarget = 0;
    var invalidFramesCounter = 0;
    var clutchTime, invalidTime = 0;
    var cluthStart, invalidStart = 0;
    for (var i = 0; i < rawdata.length; i++) {
        if (rawdata[i].cursorEvent == "clickup" && !rawdata[i].isHit) {
            valid = false;
        }
        if (rawdata[i].posture == "none" || rawdata[i].posture == "full" || rawdata[i].posture == "invalid" || rawdata[i].posture == "-thu" || rawdata[i].posture == "+ind+mid" || rawdata[i].posture == "+thu" || rawdata[i].posture == "fist") {
            invalidFramesCounter++;
            if (invalidStart == 0) {
                invalidStart = rawdata[i].timestamp;
            }
        } else {
            if (invalidStart != 0) {
                invalidTime += (rawdata[i].timestamp - invalidStart);
                invalidStart = 0;
            }
        }
        if (rawdata[i].posture == "+ind") {
            if (cluthStart == 0) {
                cluthStart = rawdata[i].timestamp;
            }
        } else {
            if (cluthStart != 0) {
                clutchTime += (rawdata[i].timestamp - cluthStart);
                cluthStart = 0;
            }
        }
        if (currentTarget != rawdata[i].target) {
            recordData.push([rawdata[i - 1], searchForClickdown(rawdata, i - 1) , valid, invalidFramesCounter, (invalidTime* 0.001).toFixed(3), (clutchTime* 0.001).toFixed(3)]);
            currentTarget = rawdata[i].target;
            invalidFramesCounter = 0;
            clutchTime = 0;
            invalidTime = 0;
            cluthStart= 0;
            invalidStart = 0;
            valid = true;
        }
    }
    recordData.push([rawdata[rawdata.length - 1], searchForClickdown(rawdata, i - 1) , valid, invalidFramesCounter, (invalidTime* 0.001).toFixed(3), (clutchTime* 0.001).toFixed(3)]);
    return recordData;
}

function searchForClickdown(data, index) {
    var oldIndex = index;
    while (--index) {
        if (data[index].cursorEvent == "clickdown") {
            return data[index];
        }
    }
    return data[oldIndex];
}


function countSuccessRate(data) {
    var counter = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i][1] && data[i][0].target != 0) {
            counter++;
        }
    }
    return counter / 18;
}

function calculateAvg(data) {
    var counter = 0;
    var totalTime = 0;
    for (var i = 1; i < data.length; i++) {
        if (data[i][1] && data[i][0].target != 0) {
            totalTime += (data[i][0].timestamp - data[i - 1][0].timestamp);
            //console.log("index: "+i+" "+(data[i][0].timestamp-data[i-1][0].timestamp));
            counter++;
        }
    }
    return totalTime / counter;
}


function appendWidAvg(data) {
    var acquisitionData, avgTime;

    var data1 = filterBySize(data, 270);
    acquisitionData = getDataset(data1[0][0][0][2]);
    avgTime = calculateAvg(acquisitionData) * 0.001;
    csvTimeStr += avgTime.toFixed(4) + ",";
    csvSuccessRate += countSuccessRate(acquisitionData).toFixed(3) + ",";


    var data2 = filterBySize(data, 90);
    acquisitionData = getDataset(data2[0][0][0][2]);
    avgTime = calculateAvg(acquisitionData) * 0.001;
    csvTimeStr += avgTime.toFixed(4) + ",";
    csvSuccessRate += countSuccessRate(acquisitionData).toFixed(3) + ",";

    var data3 = filterBySize(data, 30);
    acquisitionData = getDataset(data3[0][0][0][2]);
    avgTime = calculateAvg(acquisitionData) * 0.001;
    csvTimeStr += avgTime.toFixed(4);
    csvSuccessRate += countSuccessRate(acquisitionData).toFixed(3);
}


var particNum = 6;
var particSideData = [];
var particFrontData = [];

for (var i = 1; i <= particNum; i++) {
    $.getJSON("data/p" + i + "_f1.txt", function (data) {
        particFrontData.push([data]);
    });
    $.getJSON("data/p" + i + "_f2.txt", function (data) {
        particFrontData.push([data]);
    });
    $.getJSON("data/p" + i + "_f3.txt", function (data) {
        particFrontData.push([data]);
    });

    $.getJSON("data/p" + i + "_s1.txt", function (data) {
        particSideData.push([data]);
    });
    $.getJSON("data/p" + i + "_s2.txt", function (data) {
        particSideData.push([data]);
    });
    $.getJSON("data/p" + i + "_s3.txt", function (data) {
        particSideData.push([data]);
    });
}


var csvTimeStr = "participants,front_large,front_mid,front_small,side_large,side_mid,side_small\n";
var csvSuccessRate = "participants,front_large,front_mid,front_small,side_large,side_mid,side_small\n";
for (var i = 1; i <= particNum; i++) {
    csvTimeStr += "p" + i + ",";
    csvSuccessRate += "p" + i + ",";
    //front
    var pfront = filterByPartic(particFrontData, i);
    appendWidAvg(pfront);

    csvTimeStr += ",";
    csvSuccessRate += ",";

    //side
    var pside = filterByPartic(particSideData, i);
    appendWidAvg(pside);

    csvTimeStr += "\n";
    csvSuccessRate += "\n";

}


function getTrialInfo(rawdata, header) {
    var recordData = getDataset(rawdata);
    var valid = true;
    var currentTarget = 0;
    var clickdownCounter = 0;
    var clickupCounter = 0;
    var clickdownError = 0;
    var clickupError = 0;
    var strinfo = "";
    var trailCounter = 0;

    for (var i = 0; i < rawdata.length; i++) {
        if (rawdata[i].cursorEvent == "clickup") {
            clickupCounter++;
            if (!rawdata[i].isHit) {
                clickupError++;
            }
        } else if (rawdata[i].cursorEvent == "clickdown") {
            clickdownCounter++;
            if (!rawdata[i].isHit) {
                clickdownError++;
            }
        }
        if (rawdata[i].cursorEvent == "clickup" && !rawdata[i].isHit) {
            valid = false;
        }
        if (currentTarget != rawdata[i].target) {
            var metadata;
            if (trailCounter != 0) {
                var downItem = searchForClickdown(rawdata, i - 1);
                var isClutching =  clickdownCounter == clickupCounter ? false : true;
                if(!isClutching) {
                    if( recordData[trailCounter][5] > 1.0) {
                        isClutching = true;
                    } else {
                        recordData[trailCounter][5]=0;
                    }
                }
                metadata = [valid, ( (downItem.timestamp - recordData[trailCounter - 1][0].timestamp) * 0.001).toFixed(3),
                    ( (rawdata[i-1].timestamp - recordData[trailCounter - 1][0].timestamp) * 0.001).toFixed(3),
                        clickdownError - (clickdownCounter - clickupCounter), clickupError, isClutching,
                    recordData[trailCounter][4], recordData[trailCounter][5]];
            } else {
                var isClutching =  clickdownCounter == clickupCounter ? false : true;
                if(!isClutching) {
                    if( recordData[trailCounter][5] > 1.0) {
                        isClutching = true;
                    } else {
                        recordData[trailCounter][5]=0;
                    }
                }
                metadata = [valid, 0, 0,clickdownError - (clickdownCounter - clickupCounter), clickupError, clickdownCounter == clickupCounter ? false : true, 0];

            }
            strinfo += header + "," + rawdata[i - 1].distance + "," + rawdata[i - 1].targetSize + "," + rawdata[i - 1].block %3+ "," + rawdata[i - 1].set
                + "," + rawdata[i - 1].target + "," + metadata.join() + "\n";
            clickdownCounter = 0;
            clickupCounter = 0;
            clickdownError = 0;
            clickupError = 0;
            currentTarget = rawdata[i].target;
            trailCounter++;
            valid = true;
        }
    }
    var isClutching =  clickdownCounter == clickupCounter ? false : true;
    if(!isClutching) {
        if( recordData[recordData.length - 1][5] > 0.5) {
            isClutching = true;
        } else {
            recordData[recordData.length - 1][5]=0;
        }
    }
    var downItem = searchForClickdown(rawdata, rawdata.length - 1);
    var metadata = [valid, ((downItem.timestamp - recordData[recordData.length - 2][0].timestamp) * 0.001).toFixed(3),
        ((rawdata[i-1].timestamp - recordData[recordData.length - 2][0].timestamp) * 0.001).toFixed(3),
            clickdownError - (clickdownCounter - clickupCounter), clickupError, isClutching,
        recordData[recordData.length - 1][4], recordData[recordData.length - 1][5]];
    strinfo += header + "," + rawdata[rawdata.length - 1].distance + "," + rawdata[rawdata.length - 1].targetSize + "," + rawdata[rawdata.length - 1].block %3+ "," + rawdata[rawdata.length - 1].set
        + "," + rawdata[rawdata.length - 1].target + "," + metadata.join() + "\n";
    return strinfo;
}

var names = "participants,technique,distance,size,block,set,target,valid,duration_down,duration_up,err_dn,err_up,clutch,invalid_time,clutch_time\n";
for (var i = 0; i < particFrontData.length; i++) {
    var trial = particFrontData[i][0][0][2];
    var header = particFrontData[i][0][0][1];
    header = header.split("_");
    header = header.join();

    names += getTrialInfo(trial, header);

    trial = particSideData[i][0][0][2];
    header = particSideData[i][0][0][1];
    header = header.split("_");
    header = header.join();
    names += getTrialInfo(trial, header);
}

var blob = new Blob([names], {type: 'text/plain'});
//        console.log(blob);
//fileWriter.write(blob);

var date = new Date();
saveAs(blob, date.toGMTString() + ".csv");






