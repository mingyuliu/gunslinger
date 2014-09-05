/**
 * Created by m83liu on 2014-09-01.
 */
var postureList = [];

postureList.push({
    name: "index w/ thumb up",
    type: "+thu+ind_active",
    fingerList: [100, true, false, false, false]
});

postureList.push({
    name: "index w/ thumb down",
    type: "+thu+ind_down",
    fingerList: [80, true, false, false, false]
});

postureList.push({
    name: "index",
    type: "+ind",
    fingerList: [-80, true, false, false, false]
});

postureList.push({
    name: "index & mid w/ thumb up",
    type: "-rin-pin_active",
    fingerList: [100, true, true, false, false]
});

postureList.push({
    name: "index & middle w/ thumb down",
    type: "-rin-pin_down",
    fingerList: [80, true, true, false, false]
});

postureList.push({
    name: "index & middle",
    type: "+ind+mid",
    fingerList: [-80, true, true, false, false]
});

postureList.push({
    name: "index & pinky",
    type: "+ind+pin",
    fingerList: [-80, true, false, false, true]
});

postureList.push({
    name: "index & pinky w/ thumb up",
    type: "-mid-rin",
    fingerList: [100, true, false, false, true]
});

postureList.push({
    name: "all four fingers",
    type: "-thu",
    fingerList: [-80, true, true, true, true]
});

postureList.push({
    name: "pinky w/ thumb up",
    type: "+thu+pin",
    fingerList: [100, false, false, false, true]
});





