const delayedLogger = (value, callback) => {
  setTimeout(() => {
    if (callback) {
      if (value === 5) {
        // throw an error if the value is 5
        // we throw an error by passing a value to the callback
        callback('You can\'t log 5!');
      } else {
        console.log(value);
        // if there is no error, we pass no value to the callback
        callback(null);
      }
    }
  }, Math.random() * 5000);
};

// error handling with nested callbacks
// aka callback hell

delayedLogger(1, (error1) => {
  if (error1) {
    console.log(error1);
  } else {
    delayedLogger(2, (error2) => {
      if (error2) {
        console.log(error2);
      } else {
        delayedLogger(3, (error3) => {
          if (error3) {
            console.log(error3);
          } else {
            delayedLogger(4, (error4) => {
              if (error4) {
                console.log(error4);
              } else {
                delayedLogger(5, (error5) => {
                  if (error5) {
                    console.log(error5);
                  } else {
                    delayedLogger(6, (error6) => {
                      if (error6) {
                        console.log(error6);
                      } else {
                        delayedLogger(7, (error7) => {
                          if (error7) {
                            console.log(error7);
                          } else {
                            delayedLogger(8);
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
