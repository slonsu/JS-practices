function checkSpam(str, spm) {
    if (typeof str !== 'string' || typeof spm !== 'string') {
        throw new Error('Input must be string');
    }

    if (str.toLowerCase().indexOf(spm.toLowerCase()) == -1) {
        return false;
    }


    return true;
}

console.log(checkSpam('pitterXXX@gmail.com', 'xxx'));
console.log(checkSpam('pitterxxx@gmail.com', 'XXX'));
