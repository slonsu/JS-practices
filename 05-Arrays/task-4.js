const mysome = function(arr, cb) {
    if (Array.isArray(arr) == false) {
        throw new Error('First parameter required and has to be only array')
    }
    if (typeof cb !== 'function') {
        throw new Error('Second parameter required and has to be only function');
    }

    let comparer = false;

    for (i in arr) {
        if (cb(arr[i], i, arr)) {
            comparer = true;
        }
    }
    
    return comparer;
}

const arr = [1, 2, 3];
console.log(mysome(arr, function(item, i, arr) {
    return item < 4;
}));
