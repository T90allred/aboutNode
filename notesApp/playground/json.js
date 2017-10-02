var obj = {
    name: 'Derek'
};
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

let personString = '{"name": "Derek", "age": "27"}';
let person = JSON.parse(personString);
console.log(typeof person);
console.log(person);

const fs = require('fs');

let originalNote = {
    title: 'My Title',
    body: 'The body'
};
//originalNoteString
let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');

//note
let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);