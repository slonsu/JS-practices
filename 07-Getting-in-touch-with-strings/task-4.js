function extractCurrencyValue(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be string');
    }

    let ret = str.substring(1) * 1;

    return ret;
}

console.log(extractCurrencyValue('$120'));
console.log(typeof extractCurrencyValue('$120'));
