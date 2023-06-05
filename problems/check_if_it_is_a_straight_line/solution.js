/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */

const checkStraightLine = function(coordinates) {
    if (coordinates.length === 2) return true;
    const startingX = coordinates[1][0] - coordinates[0][0];
    const startingY = coordinates[1][1] - coordinates[0][1];
    let startingRatio;
    if (startingY === 0) {
        startingRatio = Math.abs(startingX / startingY);
    } else {
        startingRatio = startingX / startingY;
    }
    for (let i = 2; i < coordinates.length; i++) {
        const currentX = coordinates[i][0] - coordinates[i - 1][0];
        const currentY = coordinates[i][1] - coordinates[i - 1][1];
        let currentRatio;
        if (currentY === 0) {
        currentRatio = Math.abs(currentX / currentY);
        } else {
        currentRatio = currentX / currentY;
        }
        if (currentRatio !== startingRatio) return false;
    }
    return true;
};