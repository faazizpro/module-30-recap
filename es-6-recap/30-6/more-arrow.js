const multiply = (a, b) => a * b
const result = multiply( 7, 8);
// console.log(result);

//No parameter arrow function
const getPie = () => 3.14;

//One parameter 
const doubleIt = (five) => five * 2;

//One parameter simple version
const trippleIt = three => three * 3;

//MultiLine Arrow Function
const MultiLine = (x, y, z) => {
    const firstsum = x + y;
    const secondsum = y + z;
    const result = firstsum + secondsum;
    return result;
}
const value = MultiLine(10, 20, 50);
console.log(value);