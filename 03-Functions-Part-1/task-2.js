var f = function() {
    var sum = 0;
    for (number of arguments) {
        if (typeof number !== 'number'){
            throw new Error('all parameters type should be a Number');
        }
        sum = sum + number;
    }
    return sum;
}

console.log(f(1,2,3));
console.log(f(1,1,1,1,1,1,1,1));
console.log(f(1,2,'s',4));