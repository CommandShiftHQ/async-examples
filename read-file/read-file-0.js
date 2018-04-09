const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'hello.txt');

console.log(1);

const data = fs.readFileSync(filepath, 'utf8');

// this log will not run until the synchronous readFile has completed
console.log(data);
