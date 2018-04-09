const delayedLogger = (value) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (value === 5) {
      // to throw an error, we use reject
      reject('You can\'t log 5!');
    } else {
      console.log(value);
      // if everything is ok, we resolve the promise
      resolve();
    }
  }, Math.random() * 5000);
});

// using promises, we can rewrite callback hell in a nice concise way
// note that we no longer have to write an error handler for each level

delayedLogger(1)
  .then(() => delayedLogger(2))
  .then(() => delayedLogger(3))
  .then(() => delayedLogger(4))
  .then(() => delayedLogger(5))
  .then(() => delayedLogger(6))
  .then(() => delayedLogger(7))
  .then(() => delayedLogger(8))
  .catch((error) => {
    console.log(error);
  });
