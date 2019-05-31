const myforEach = function(arr, cb) {
    if (Array.isArray(arr) == false) {
        throw new Error('First parameter required and has to be only array')
    }
    if (typeof cb !== 'function') {
        throw new Error('Second parameter required and has to be only function');
    }

    for (i in arr) {
        cb(arr[i], i, arr);
    }
}

const arr = [1, 2, 3];
myforEach(arr, function(item, i, arr) {
    console.log('Item: ' + item);
    console.log('Index: ' + i);
    console.log('Array: ' + arr);
    console.log('---');
});