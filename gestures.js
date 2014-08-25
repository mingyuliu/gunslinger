//Gesture Vocalbury
var rightHandGesture = new Array();
rightHandGesture.push({
    type: "fist",
    count: 0,
    finLen: [0, 0, 0, 0, 0],
    finAngle: [0, 0, 0, 0, 0]
});

rightHandGesture.push({
    type: "+ind",
    count: 1,
    finLen: [60, 0, 0, 0, 0],
    finAngle: [0, 0, 0, 0, 0]
});
rightHandGesture.push({
    type: "+thu",
    count: 1,
    finLen: [40, 0, 0, 0, 0],
    finAngle: [-47, 0, 0, 0, 0]
});
rightHandGesture.push({
    type: "+ind+mid",
    count: 2,
    finLen: [62, 70, 0, 0, 0],
    finAngle: [-11, 14, 0, 0, 0]
});
rightHandGesture.push({
    type: "+thu+ind",
    count: 2,
    finLen: [35, 55, 0, 0, 0],
    finAngle: [-40, 10, 0, 0, 0]
});
rightHandGesture.push({
    type: "-rin-pin",
    count: 2,
    finLen: [35, 55, 0, 0, 0],
    finAngle: [-40, 10, 0, 0, 0]
});
rightHandGesture.push({
    type: "-thu",
    count: 4,
    finLen: [60, 71, 61, 48, 0],
    finAngle: [-19, 23, 23, 25, 0]
});
rightHandGesture.push({
    type: "full",
    count: 5,
    finLen: [37, 60, 71, 61, 48],
    finAngle: [-42, -19, 23, 23, 25]
});

var leftHandGesture = new Array();
leftHandGesture[0] = {
    type: "fist",
    count: 0,
    finLen: [0, 0, 0, 0, 0],
    finAngle: [0, 0, 0, 0, 0]
};
leftHandGesture[1] = {
    type: "+ind",
    count: 1,
    finLen: [55, 0, 0, 0, 0],
    finAngle: [-7, 0, 0, 0, 0]
};
leftHandGesture[2] = {
    type: "+ind+mid",
    count: 2,
    finLen: [70, 62, 0, 0, 0],
    finAngle: [-14, 11, 0, 0, 0]
};
leftHandGesture[3] = {
    type: "+thu+ind",
    count: 2,
    finLen: [55, 35, 0, 0, 0],
    finAngle: [-10, 40, 0, 0, 0]
};
leftHandGesture[4] = {
    type: "-thu",
    count: 4,
    finLen: [44, 60, 70, 59, 0],
    finAngle: [-20, -17, -16, 17, 0]
};
leftHandGesture[5] = {
    type: "full",
    count: 5,
    finLen: [44, 60, 70, 59, 33],
    finAngle: [-20, -17, -16, 17, 38]
};

var rightHandMotion = [];


rightHandMotion.push({
    type: "clickdown",
    count: 2,
    finLen: [34, 72, 0, 0, 0],
    finAngle: [0, 37, 0, 0, 0],
    finVel: [
        [255, -100, -140],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
});
rightHandMotion.push({
    type: "clickup",
    count: 2,
    finLen: [34, 72, 0, 0, 0],
    finAngle: [-5, 37, 0, 0, 0],
    finVel: [
        [-240, 0, 100],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
});
//on the wall set
// rightHandGesture[1] = {
//     type: "clickdown",
//     count: 2,
//     finLen: [40, 68, 0, 0, 0],
//     finAngle: [0, 37, 0, 0, 0],
//     finVel: [
//         [200, -20, -20],
//         [0, 0, 0],
//         [0, 0, 0],
//         [0, 0, 0],
//         [0, 0, 0]
//     ]
// };
// rightHandGesture[2] = {
//     type: "clickup",
//     count: 2,
//     finLen: [40, 68, 0, 0, 0],
//     finAngle: [30, 37, 0, 0, 0],
//     finVel: [
//         [-200, 20, 20],
//         [0, 0, 0],
//         [0, 0, 0],
//         [0, 0, 0],
//         [0, 0, 0]
//     ]
// };

var rightGestureList = new Array();
rightGestureList.push({
    hand: {
        start: [0.225246, -3.88862],
        end: [0.3049834513957106, -33.88851403212693]
    },
    fingers: [{
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }]
});
rightGestureList.push({
    hand: {
        start: [0.225246, -3.88862],
        end: [0.3049834513957106, -33.88851403212693]
    },
    fingers: [{
        start: [2.88207, -103.53],
        end: [-9.138674782840917, -58.559679615263995]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }]
});
rightGestureList.push({
    hand: {
        start: [0.225246, -3.88862],
        end: [0.3049834513957106, -33.88851403212693]
    },
    fingers: [{
        start: [-77.0568, -23.217],
        end: [-52.03847095293217, 5.010755360507197]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }]
});
rightGestureList.push({
    hand: {
        start: [0.225246, -3.88862],
        end: [0.3049834513957106, -33.88851403212693]
    },
    fingers: [{
        start: [-28.3169, -95.8362],
        end: [-22.69371142103298, -36.013903603043005]
    }, {
        start: [8.53873, -105.219],
        end: [4.986908185862901, -35.24007943958681]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }]
});
rightGestureList.push({
    hand: {
        start: [-0.0898952, 0.435606],
        end: [-14.443869790507774, -25.907579332359813]
    },
    fingers: [{
        start: [-79.5207, -27.6814],
        end: [-50.65431957393537, -1.7558666140171262]
    }, {
        start: [1.15658, -103.239],
        end: [-7.7943824864787405, -67.61954668898397]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }]
});
rightGestureList.push({
    hand: {
        start: [0.225246, -3.88862],
        end: [0.3049834513957106, -33.88851403212693]
    },
    fingers: [{
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [-28.3169, -95.8362],
        end: [-22.69371142103298, -36.013903603043005]
    }, {
        start: [8.53873, -105.219],
        end: [4.986908185862901, -35.24007943958681]
    }, {
        start: [40.4226, -94.4193],
        end: [29.732032043065317, -34.472181410628586]
    }, {
        start: [65.2797, -64.6626],
        end: [49.38092808036854, -19.1094562461652]
    }]
});
rightGestureList.push({
    hand: {
        start: [0.225246, -3.88862],
        end: [0.3049834513957106, -33.88851403212693]
    },
    fingers: [{
        start: [-77.0568, -23.217],
        end: [-52.03847095293217, 5.010755360507197]
    }, {
        start: [-28.3169, -95.8362],
        end: [-22.69371142103298, -36.013903603043005]
    }, {
        start: [8.53873, -105.219],
        end: [4.986908185862901, -35.24007943958681]
    }, {
        start: [40.4226, -94.4193],
        end: [29.732032043065317, -34.472181410628586]
    }, {
        start: [65.2797, -64.6626],
        end: [49.38092808036854, -19.1094562461652]
    }]
});


var leftGestureList = new Array();
leftGestureList[0] = {
    hand: {
        start: [0.225246, -3.88862],
        end: [0.3049834513957106, -33.88851403212693]
    },
    fingers: [{
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }]
};
leftGestureList[1] = {
    hand: {
        start: [0.225246, -3.88862],
        end: [0.3049834513957106, -33.88851403212693]
    },
    fingers: [{
        start: [-10.88207, -103.53],
        end: [2.138674782840917, -58.559679615263995]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }]
};

leftGestureList[2] = {
    hand: {
        start: [0.225246, -3.88862],
        end: [0.3049834513957106, -33.88851403212693]
    },
    fingers: [{
        start: [-28.3169, -95.8362],
        end: [-22.69371142103298, -36.013903603043005]
    }, {
        start: [8.53873, -105.219],
        end: [4.986908185862901, -35.24007943958681]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }]
};
leftGestureList[3] = {
    hand: {
        start: [1.19169, -0.581551],
        end: [17.28324681878286, -25.900749232722198]
    },
    fingers: [{
        start: [11.8893, -100.935],
        end: [14.088685212327892, -41.68190487495364]
    }, {
        start: [73.2105, -19.107],
        end: [51.91347529086408, 6.936320540753901]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }, {
        start: [0, 0],
        end: [0, 0]
    }]
};
leftGestureList[4] = {
    hand: {
        start: [5.25975, 5.28943],
        end: [4.8171739054430125, -24.707305262366916]
    },
    fingers: [{
        start: [-53.7369, -54.5529],
        end: [-42.16049702164408, -14.699168743281867]
    }, {
        start: [-33.3756, -83.4417],
        end: [-23.337528978774216, -29.49008152174833]
    }, {
        start: [-4.33266, -93.8261],
        end: [0.5421896212736295, -31.405967148411413]
    }, {
        start: [30.7351, -84.2645],
        end: [26.05479769696358, -26.75804451966117]
    }, {
        start: [0, 0],
        end: [0, 0]
    }]
};
leftGestureList[5] = {
    hand: {
        start: [5.25975, 5.28943],
        end: [4.8171739054430125, -24.707305262366916]
    },
    fingers: [{
        start: [-53.7369, -54.5529],
        end: [-42.16049702164408, -14.699168743281867]
    }, {
        start: [-33.3756, -83.4417],
        end: [-23.337528978774216, -29.49008152174833]
    }, {
        start: [-4.33266, -93.8261],
        end: [0.5421896212736295, -31.405967148411413]
    }, {
        start: [30.7351, -84.2645],
        end: [26.05479769696358, -26.75804451966117]
    }, {
        start: [76.8554, -12.6972],
        end: [57.624975264313306, 12.918852226974584]
    }]
};