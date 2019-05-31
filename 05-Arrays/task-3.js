const myevery = function(arr, cb) {
    if (Array.isArray(arr) == false) {
        throw new Error('First parameter required and has to be only array')
    }
    if (typeof cb !== 'function') {
        throw new Error('Second parameter required and has to be only function');
    }

    let comparer = false;

    for (i in arr) {
        if (cb(arr[i], i, arr) == false) {
            return comparer = false;
        }
    }

    return comparer = true;
}

const arr = [1, 2, 5];
console.log(myevery(arr, function(item, i, arr) {
    return item < 4;
}));
