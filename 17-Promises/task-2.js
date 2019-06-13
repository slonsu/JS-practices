function getCustomers(customers, countries) {
    return new Promise((resolve, reject) => {
        const obj1 = {};
        console.log(obj1);
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






// getCustomers(customers, countries)
//     .then((customers) => console.log(customers))
//     .catch(error => console.log(error))