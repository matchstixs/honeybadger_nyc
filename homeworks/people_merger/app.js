const fs = require('fs');

const people1 = fs.readFileSync('people1.json', 'utf8');
const string = JSON.parse(people1);
const people2 = fs.readFileSync('people2.json', 'utf8');
const strings = JSON.parse(people2);


newArray = string.concat(strings);
newArrays = newArray.sort();

fs.writeFileSync('peopleComplete.txt', newArrays);