console.log('Starting notes.js');

// module.exports.addNote = () => {
//     console.log('added note');
//     return 'New note';
// }

// module.exports.add = (a, b) => a + b;

module.exports = {
    addNote: () => {
        console.log('added note');
        return 'New note';
    },
    
    add: (a, b) => a + b,
};