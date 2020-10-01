
exports.min = function min (array) {
    if (typeof array === 'undefined') return 0;
    if (array.length === 0) return 0;
    let num = array[0];
    let i = 0;
    while (i < array.length) {
        if (num < array[i]) {
            i = i + 1;
        } else {
            num = array[i];
            i = i + 1;
        }
    }
  return num;
}

exports.max = function max (array) {
    if (typeof array === 'undefined') return 0;
    if (array.length === 0) return 0;
    let num = array[0];
    let i = 0;
    while (i < array.length) {
        if (num > array[i]) {
            i = i + 1;
        } else {
            num = array[i];
            i = i + 1;
        }
    }
  return num;
}

exports.avg = function avg (array) {
    if (typeof array === 'undefined') return 0;
    if (array.length === 0) return 0;
    let sum = 0;
    let i = 0;
    while (i < array.length) {
        sum = array[i] + sum;
        i = i + 1;
    }
    let avg = sum / array.length;
  return avg;
}
