/**
 * @param {string} senate
 * @return {string}
 */

const predictPartyVictory = function(senate) {
    let dCount = 0;
    let rCount = 0;
    let dBlockCount = 0;
    let rBlockCount = 0;
    let winner = "";
    let senateArray = senate.split('');

    senateArray.forEach(member => {
        if (member === "R") {
            rCount++;
        }
        if (member === "D") {
            dCount++;
        }
    })

    for (let i = 0; i < senateArray.length; i++) {
        let currentChar = senateArray[i];

        if (currentChar === "B") {
            if (i === senateArray.length - 1) {
                i = -1;
            }   else {
                    continue;
                }
        }
        if (currentChar === "R") {
            if (rBlockCount > 0) {
                senateArray[i] = "B";
                rBlockCount--;
                rCount--;
                dBlockCount--;
            }
            if (dCount === 0) {
                winner = "Radiant";
            }
            dBlockCount++;
        }
        if (currentChar === "D") {
            if (dBlockCount > 0) {
                senateArray[i] = "B";
                dBlockCount--;
                dCount--;
                rBlockCount--;
            }
            if (rCount === 0) {
                winner = "Dire";
            }
            rBlockCount++;
        }
        if (winner !== "") {return winner};
        if (i === senateArray.length - 1) {
            i = -1;
        }
    }
};