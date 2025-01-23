function analyseArray(arr){

    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let length = arr.length;
    let average = arr.reduce((a, b) => a + b, 0) / length;

    return {
        average,
        min,
        max,
        length
    }
};

module.exports = analyseArray
