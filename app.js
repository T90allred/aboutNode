console.log('Starting Node App');

const fs = require('fs');
const os = require('os');

let user = os.userInfo();

fs.appendFileSync('greetings.txt', `Hello ${user.username}`);

console.log(__dirname)