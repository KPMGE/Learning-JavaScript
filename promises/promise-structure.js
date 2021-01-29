// a primise has 2 parameters, resolve and reject he is a constructo, therefore, we can use 'new

const makeServerRequest = new Promise((resolve, reject) => {
  let serverAnswer = true;

  if (serverAnswer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  } 
});
