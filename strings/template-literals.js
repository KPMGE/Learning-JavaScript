// we can evaluate a value from a expression using the string literal sintax
// we must put the text in `${variable}`

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
  const failureItems = [];
  for (let prop of arr) {
    failureItems.push('<li class="text-warning">' + `${prop}` + '</li>');
  }
  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);