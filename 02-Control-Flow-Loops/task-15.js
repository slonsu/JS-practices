var n = [1000, 0]; // second element of the array is to memorise the previous loop iteration so the result would be greater than 50;
var number = 0;

while (true) {
    n[1] = n[0];
    n[0] = n[0] / 2;
    if (n[0] <= 50) break;
    number ++;
}

console.log(n[1]);
console.log(number);
