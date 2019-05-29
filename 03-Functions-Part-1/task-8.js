var f = function(n) {
    if (typeof n !== 'object') {
        throw new Error('parameter type should be an array');
    } else if (n.length == 0) {
        throw new Error('parameter can\'t be a 0');
    }

    console.log(n[0])
    n.splice(0, 1);
    return n.length > 0 ? f(n) : false;
}

f([1,2,3]);
f(1,2,3)
f('Content')
f([])
