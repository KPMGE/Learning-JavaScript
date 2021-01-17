// we can have nested objects in javaScript
// so, when we want to access some value of it, we can put the way to information, with dot or bracket notation

let ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": {
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

console.log("cabinet-top drawer-folder1: ", ourStorage["cabinet"]["top drawer"]["folder1"]);
console.log("cabinet-top drawer-folder2: ", ourStorage.cabinet["top drawer"].folder2);