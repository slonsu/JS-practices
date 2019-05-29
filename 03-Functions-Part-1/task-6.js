var isEven = function(n) {
    if (typeof n !== 'number') {
        throw new Error('all parameters type should be a Number');
    }
    return n % 2 == 0 ? true : false;
}

console.log(isEven(3));
console.log(isEven(4));
console.log(isEven('Content'));
