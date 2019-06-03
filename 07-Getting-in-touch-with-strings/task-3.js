function truncate(str, maxlength) {
    if (typeof str !== 'string') {
        throw new Error('Input must be string');
    } else if (typeof maxlength !== 'number') {
        throw new Error('Input must be number');
    }

    return str > maxlength ? str : str.substring(0, 19) + '...';
}

console.log(truncate('I wanna to say next thing about this topic', 22));
