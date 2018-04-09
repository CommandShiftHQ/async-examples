const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'hello.txt');

// using callbacks, we can ensure that reading the file occurs before writing to it

fs.readFile(filepath, (err, data) => {
  console.log(1);

  fs.writeFile(filepath, `${data} world!`, () => {
    console.log(2);
  });
});
