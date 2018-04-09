const request = require('axios');

// these will log in an unpredicatable order
// each request to the github api will take an different amount of time to complete
// they will log in whatever order they complete

const michael = {
  url: 'https://api.github.com/users/harrim91/repos',
  headers: {
    'User-Agent': 'mcrcodes',
  },
};

const joe = {
  url: 'https://api.github.com/users/joestephens/repos',
  headers: {
    'User-Agent': 'mcrcodes',
  },
};

let position = 0;

request(michael).then(() => {
  position += 1;
  console.log(position, 'Michael');
});

request(joe).then(() => {
  position += 1;
  console.log(position, 'Joe');
});
