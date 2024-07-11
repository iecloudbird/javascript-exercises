const removeFromArray = function (array, ...theTargets) {
    for (const target of theTargets) {
        for (i = array.length - 1; i >= 0; i--) {
            if (array[i] === target) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
