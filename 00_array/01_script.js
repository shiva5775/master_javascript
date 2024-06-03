let fruits = ["mango", "apple", "banana", "orange", "grapes", "watermelon"];
console.log(fruits);

let neeFruits = fruits.join(" ");
console.log(neeFruits);

let fruitsTo = ["mango", "apple", "banana", "orange", "grapes", "watermelon"];
console.log(fruitsTo);
console.log(fruitsTo.length);

for (const fruit of fruitsTo) {
    console.log(fruit);
}

fruitsTo.forEach((fruit) => {
    console.log(fruit.length);
});
