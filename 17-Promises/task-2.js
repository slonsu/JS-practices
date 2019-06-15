function getCustomers(customers, countries) {
    return new Promise((resolve, reject) => {
        let icountry = {};
        let merge = [];
        for (let i = 0; i < countries.length; i++) {
            icountry[countries[i].id] = countries[i].country;
        }
        for (let customer of customers) {
            if (typeof icountry[customer.id] == 'undefined') {
                reject('We don\'t have information about country for this customer: ' + customer.name)
            } else if (customer.verified === true) {
                merge.push({
                    id: customer.id,
                    name: customer.name,
                    country: icountry[customer.id]
                });
            } 
        }
        resolve(merge);
    });
}

const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex'
    }
];


const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

for (let i; i <= customers.length; i++)
{
    if (customers[i].id == countries[i].id) {
        var obj1 = {...customers[1], ...countries[1]};
        console.log(obj1);
    }
}

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))
