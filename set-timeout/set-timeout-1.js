const delayedLogger = (value, callback) => {
  setTimeout(() => {
    console.log(value);
    if (callback) {
      // note the callback here!
      callback();
    }
  }, Math.random() * 5000);
};

// using a callback, we can make sure that the logs happen in the order we want

delayedLogger(1, () => {
  delayedLogger(2, () => {
    delayedLogger(3, () => {
      delayedLogger(4, () => {
        delayedLogger(5, () => {
          delayedLogger(6, () => {
            delayedLogger(7, () => {
              delayedLogger(8);
            });
          });
        });
      });
    });
  });
});
