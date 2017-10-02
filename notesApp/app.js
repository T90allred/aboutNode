//NODE MODULE AND 3RD PARTY STUFF
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

//MY CUSTOME MODULES
const notes = require('./notes');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};
const argv = yargs
    .command('add','Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list','List all notes',)
    .command('read','Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
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
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach( (note) => {
        notes.logNote(note);
    });
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