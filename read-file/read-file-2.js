const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'hello.txt');

// these will log in an unpredicatable order
// each request to read the file will take an different amount of time to complete
// they will log in whatever order they complete

fs.readFile(filepath, () => {
  console.log(1);
});

fs.readFile(filepath, () => {
  console.log(2);
});

fs.readFile(filepath, () => {
  console.log(3);
});
