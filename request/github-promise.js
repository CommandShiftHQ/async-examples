const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');

const errorLog = path.join(__dirname, 'error.log');
const reposFile = path.join(__dirname, 'repos.json');

const options = {
  url: 'https://api.github.com/users/harrim91/repos',
  headers: {
    'User-Agent': 'harrim91',
  },
};

// using promises, we can remove some nesting and write the code in a more logical order
// axios is a library to make http requests using promises

axios(options)
  .then(({ data }) => {
    return fs.writeFile(reposFile, JSON.stringify(data));
  })
  .then(() => {
    console.log('Repo data written to file');
  })
  .catch((error) => {
    return fs.writeFile(errorLog, error)
      .then(() => {
        console.log('Error written to log');
      })
      .catch(() => {
        console.log(writeError);
      });
  });
