const person = {};

Object.defineProperties(person, {
    rate: {
        configurable: false,
        enumerable: false,
    },
    salary: {
        writable: false,
        get() {
            const today = new Date();
            return this.rate * today.getDay();
        },
    }
});

person.rate = 30;
console.log(person.salary)
