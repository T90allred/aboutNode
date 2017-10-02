console.log('Starting notes.js');

let addNote = (title, body) => {
    console.log('Added Note', title, body);
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
