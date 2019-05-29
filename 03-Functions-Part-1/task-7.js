var getDivisors = function(n) {
    if (typeof n !== 'number') {
        throw new Error('all parameters type should be a Number');
    } else if (n == 0) {
        throw new Error('parameter can\'t be a 0');
    }

    var devisors = [];
    for (var i = 1; i <= n; i++)
    {
        if (n % i == 0) {
            devisors.push(i);
        }
    }
    
    return devisors;
}

console.log(getDivisors(12));
console.log(getDivisors('Content'));
console.log(getDivisors(0));
