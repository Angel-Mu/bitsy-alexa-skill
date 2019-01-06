const lambda = require('./index');

lambda.handler({}, {}, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
});
