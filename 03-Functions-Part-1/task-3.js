var f = function(a, b, c) {
    for (var number of arguments) {
        if (typeof number !== 'number') {
            throw new Error('parameter type is not a Number')
        }
    }
    return (a - b) / c;
}

console.log(f(9,3,2));
console.log(f('s',9,3));
