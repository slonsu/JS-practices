const person = {
    rate: 0,
};

Object.defineProperties(person, {
    rate: {
        configurable: false,
        enumerable: false,
    },
    salary: {
        get() {
            const today = new Date();
            return this.rate * today.getDay();
        },
    
        set salary(str) {
            throw new Error();
        }
    }
});

person.rate = 30;
console.log(person.salary)
