const myreduceRight = function(arr, cb, acc) {
    if (Array.isArray(arr) == false) {
        throw new Error('First parameter required and has to be only array')
    }
    if (typeof cb !== 'function') {
        throw new Error('Second parameter required and has to be only function');
    }
    if (typeof acc !== 'string' && typeof acc !== 'number')
    {
        throw new Error('Third parameter required and has to be only string or number');
    }

    let item = 0;
    let sum = 0;

    for (i = arr.length - 1; i >= 0; i--)
    {
        item = item + arr[i];
        if (i == 0) {
            sum = cb(acc, item, i, arr);
        }
    }

    return sum;
}

const arr = [1, 2, 3];
const acc = 0;
console.log(myreduceRight(arr, function(acc, item, i, arr) {
    return acc + item;
}, acc));
