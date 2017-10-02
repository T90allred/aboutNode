console.log('Starting app.js');

//NODE MODULE AND 3RD PARTY STUFF
const fs = require('fs');
const _ = require('lodash');

//MY CUSTOME MODULES
const notes = require('./notes');

let command = process.argv[2];
console.log(command);

if (command === 'add') {
    console.log('Adding a new note');
} else if(command === 'list') {
    console.log('Listing all notes');
} else if(command === 'remove') {
    console.log('Removing a note');
} else if(command === 'read') {
    console.log('Reading a note');
} else {
    console.log('Command not recognized');
}