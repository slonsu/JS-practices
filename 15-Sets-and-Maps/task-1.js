class DB {
    constructor() {
        this._dperson = new Map();
    }

    create(person) {
        if (this._id >= 0) {
            this._id++
        } else this._id = 0;

        this._dperson.set(this._id, person)

        if (typeof person.name !== 'string') {
            throw new Error("Object name parameter must be a string");
        }
        if (typeof person.age !== 'number') {
            throw new Error("Object age parameter must be a number");
        } 
        if (typeof person.country !== 'string') {
            throw new Error("Object country parameter must be a string");
        }
        if (typeof person.salary !== 'number') {
            throw new Error("Object salary parameter must be a number");
        }

        return this._id;
    }

    read(id) {
        if (id == null) {
            throw new error('No passing parameter');
        } else if (typeof id != 'number') {
            throw new error('No passing number');
        }

        if (!this._dperson.has(id)) {
            console.log('you got yeeted');
            return null;
        } else {
            var obj = this._dperson.get(id);
            obj.id = id;

            return obj;
        }
    }

    readAll() {
        var returnarr = [];
        for (let i = 0; i <= this._dperson.size - 1; i++) {
            returnarr = returnarr + i + this._dperson.get(i);
            console.log(this._dperson.get(i));
        }
        
    }
}

const db = new DB();

const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // array of users
//db.update(id, { age: 22 }); // id
//db.delete(id); // true