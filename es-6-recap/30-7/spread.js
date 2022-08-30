const max = Math.max(10, 20, 30, 40, 50);
// console.log(max)

const numbers = [10, 20, 30 , 40, 50];
const largest = Math.max(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(100);
numbers2.push(444);
console.log(numbers);
console.log(numbers2);