class Validator {
    isEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email));
    }

    isDomain(domain) {
        var re = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
        return re.test(String(domain));
    }

    isDate(date) {
        var re = /^\d{2}([./-])\d{2}\1\d{4}$/;
        return re.test(String(date));
    }

    isPhone(phone) {
        var re = /\+[0-9]{3} ?\([0-9]{2}\) ?[0-9]{3}-?([0-9]{2}-?){2}/;
        return re.test(String(phone));
    }
}

var validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); // it can be format of your country
