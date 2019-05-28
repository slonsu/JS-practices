var arr = [1,14,25,2,43,6,8,7];
var swap;

for (var i = 0; i < arr.length - 1 ; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j+1]) {
            swap = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = swap;
        }
    }
}

for (let i of arr) {
    console.log(i);
}
