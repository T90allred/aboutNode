console.log('Starting app.js');

//NODE MODULE AND 3RD PARTY STUFF
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

//MY CUSTOME MODULES
const notes = require('./notes');
const argv = yargs.argv;
const command = argv._[0];

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if(command === 'list') {
    notes.getAll();
} else if(command === 'read') {
    notes.getNote(argv.title);
} else if(command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}