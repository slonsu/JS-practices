function reverse(arr) {
    if (!(Array.isArray(arr))) {
        throw new Error('First parameter required and has to be only array')
    }
    if (arr.length == 0) {
        throw new Error('Array must not be empty')
    }

    let temparray = [];
    
    for (i in arr) {
        temparray[arr.length - 1 - i] = arr [i]
    }

    return temparray;
}

const arr = [1,2,3];
const array = reverse(arr)
console.log(array)