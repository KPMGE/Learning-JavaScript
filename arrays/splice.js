// we can use the splice method to replace an array or remove some itens of it

let arr = ["kevin", 20, "carvalho", 9, "2020"];

// removing elements
let removedItems = arr.splice(1, 3);

console.log("New array: ", arr);
console.log("Removed elements: ", removedItems);
