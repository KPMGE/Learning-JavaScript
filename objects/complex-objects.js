// we can create arrays where each element is an object, as follow:

let myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Beethoven",
    "title": "5th Symphony",
    "release_year": 1808,
    "formats": [
      "piano",
      "digital"
    ],
    "gold": true
  }
];

console.log("the first artist: ", myMusic[0].artist);
console.log("He has the music: " + myMusic[0].title + " released in " + myMusic[0].release_year);
console.log("there are these formats: ", myMusic[0].formats);
console.log("\nthe second artist is: ", myMusic[1].artist);
console.log("his music is: ", myMusic[1].title);
console.log("there are these formats to his music: ", myMusic[1].formats);