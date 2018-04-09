const delayedLogger = (value) => {
  setTimeout(() => {
    console.log(value);
  }, Math.random() * 5000);
};

// these async functions will log in an unpredictable order
// the each call will take a random amount of time to complete,
// and each call will log when it is finished

delayedLogger(1);
delayedLogger(2);
delayedLogger(3);
