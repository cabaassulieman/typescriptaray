"use strict";
const people = ['sara', 'mohamed', 'Jama', 'aamina', 'ali'];
console.table(people);
let TemCustomers = [];
for (const customer of people) {
    if (customer.length <= 4) {
        TemCustomers.push(customer);
    }
}
console.table(TemCustomers);
const requireList = people.filter(function (cu) {
    return cu.length <= 4;
});
console.table(requireList);
const antherCode = people.filter(peope => peope.length <= 4);
console.table(antherCode);
