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
    name: "thumb",
    type: "+thu",
    fingerList: [100, false, false, false, false]
});


postureList.push({
    name: "full except thumb",
    type: "-thu",
    fingerList: [-80, true, true, true, true]
});


