function upperCaseFirst(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be string');
    }

    return str.substring(0, 1).toUpperCase() + str.substring(1);
}

console.log(upperCaseFirst('pitter'));
console.log(upperCaseFirst(''));
