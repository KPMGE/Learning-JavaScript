// the catch method looks like then, but we use it to handle with reject method 

const makeSeverRequest = new Promise((resolve, reject) => {
  let serverAnswer = false;

  if (serverAnswer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeSeverRequest.catch(error => {
  console.log(error);
});