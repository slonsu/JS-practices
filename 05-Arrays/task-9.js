function arrayFill(item, length) {
    if (!(Array.isArray(item)) && typeof item !== 'number' && typeof item !== 'string') {
        throw new Error('First parameter required and has to be only number, string, object array');
    }
    if (typeof length !== 'number') {
        throw new Error('Second parameter required and has to be only number');
    }
    
    let arr = [];

    for (i = 0; i < length; i++) {
        arr.push(item);
    }

    return arr;
}

const arr = arrayFill('x',5);
console.log(arr);
