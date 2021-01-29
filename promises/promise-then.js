// we use 'then' to handle with resolve method

const makeServerRequest = new Promise((resolve, reject) => {
  let serverAnswer = true;

  if (serverAnswer) {
    resolve("We got the data");
  } else {
    reject("Data not received")
  }
});

makeServerRequest.then(result => {
  console.log(result);
});