console.log('Starting notes.js');
const fs = require('fs');

let addNote = (title, body) => {
    let notes = [];
    let note = {
        title,
        body
    };

    try{
        let notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch(e) {

    }

    let duplicateNotes = notes.filter( (note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    } else {
        console.log('A note with that title already excists...');
    }
};

let getAll = () => {
    console.log('Getting all notes');
};

let getNote = (title) => {
    console.log(title);
};

let removeNote = (title) => {
    console.log(title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};
