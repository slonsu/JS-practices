class Customers {
    constructor() {
            this.arr = [];
    }

    add(obj) {
        if (obj.verified === true) {
            this.arr.push(obj);
        }
    }

    [Symbol.iterator] () {
        let index = 0;
        let next = () => {
            if (index >= this.arr.length) {
                return {
                    value: undefined,
                    done: true
                };
            } else {
                return {
                    value: this.arr[index++],
                    done: false
                };
            }
        }
        return {next};
    }
}

const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}