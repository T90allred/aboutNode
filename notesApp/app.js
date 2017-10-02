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
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note Created');
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
} else if(command === 'list') {
    notes.getAll();
} else if(command === 'read') {
    let readMessage = notes.getNote(argv.title);
    if (readMessage) {
        console.log('Note Found');
        notes.logNote(readMessage);
    } else {
        console.log('Note not found');
    }
} else if(command === 'remove') {
    let notedRemoved = notes.removeNote(argv.title);
    let message = notedRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}