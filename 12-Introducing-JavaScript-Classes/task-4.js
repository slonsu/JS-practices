class MyString {
    reverse(word) {
        var revstr = '';
        for (let i = word.length - 1; i >= 0; i--) {
            revstr += word[i];
        }
        return revstr;
    }

    ucFirst(word) {
        var firstletter = word.substring(0, 1).toUpperCase();
        return firstletter + word.substring(1);
    }

    ucWords(word) {
        var letcheck = word.split(' ');
        for (var i = 0; i < letcheck.length; i++) {
            letcheck[i] = letcheck[i].charAt(0).toUpperCase() + letcheck[i].substring(1);     
        }
        return letcheck.join(' '); 
    }
}

var str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'
