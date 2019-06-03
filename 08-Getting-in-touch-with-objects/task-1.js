const person = {
    get salary() {
        const today = new Date();
        if (31 - today.getDay() > 20) {
            return 'good salary';
        }
        else return 'bad salary';
    }
};

console.log(person.salary);