const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'hello.txt');

// this will log 1, 3, 2 because the asynchronous readFile will not wait

console.log(1);

fs.readFile(filepath, () => {
  console.log(2);
});

console.log(3);
