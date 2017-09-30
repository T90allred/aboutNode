console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');

// let res = notes.addNote();
// console.log(res);

// let sum = notes.add(1,3);
// console.log(sum);

// let user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username} you are ${notes.age} years old`);

console.log(_.isString(true));
console.log(_.isString('Derek'));

const filteredArray = _.uniq(['Derek','Derek',1,2,3,2,1,5])
console.log(filteredArray);
