this.update = function(frame) {

    // Step 1: Thumb characteristics
    // 
    // Technically I would say we can summarize the thumb posture to the location of its tip.
    // It may sound overly simplified but there are not that many ways to have the tip of one's thumb at a given location.
    // Let's use the location of the tip form the origin of the index finger

    var candidateThumbTipVector = {};
    for (var i = 0; i < 3; i++) {
        candidateThumbTipVector[i] = frame.fingers[0].btipPosition[i] - frame.fingers[1].mcpPosition[i];
    }
    thumbAngleDistance /= rightHandGesture[p].fingers[1].length; //normalize it by index length *ml
    // This will be reused later for each vocabulary posture.


    for (var p = 0; p < rightHandGesture.length; p++) { // for each vocabulary posture

        // Step 2: difference in number of raised digits between the vocabulary gesture and the candidate gesture
        var nbDigitDistance = 0;

        // Step 3: ordinal distance between the digits of the vocabulary gesture and the candidate gesture
        var diffArray = {};
        for (var d = 1; d < 5; d++) { // digits (index to pinky fingers); I'm assuming thumb is 0 and pinky is 4

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
            diffArray[d] = (rightHandGesture[p].extended[d] && frame.fingers[d].extended ? 2 : +rightHandGesture[p].extended[d] - +frame.fingers[d].extended);

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
        var ordinalDistance = Math.max(dist1, dist2) / 3;

        // Distance between the thumb tips of the candidate and the vocabulary gesture from the index's mcpPosition (I'm assuming that the corresponding vector 
        // of the vocabulary postures is stored in the posture object), normalized by the length of the index finger:
        var thumbTipDistance = Math.sqrt(
            pow(candidateThumbTipVector[0] - rightHandGesture[p].thumbTipVector[0], 2) +
            pow(candidateThumbTipVector[1] - rightHandGesture[p].thumbTipVector[1], 2) +
            pow(candidateThumbTipVector[2] - rightHandGesture[p].thumbTipVector[2], 2)
        );

        // Difference between the number of raised digits, normalized (maximum difference is 4):
        nbDigitDistance /= 4;


        // Weighted sum (I suggest starting with all the weights at .33 and see what happens)
        // I'm assuming that .val is the final score and that lower is better
        this._list[p].val = ordinalDistance * ORDINAL_DISTANCE_WEIGHT + thumbAngleDistance * THUMB_TIP_WEIGHT + nbDigitDistance * NB_FINGER_WEIGHT;

    }
};