const firstPersion = 'This is single quotation string';
const secondPerson = "This is double quotation string";
const thirdPerson = `
                    This is multiline backtick string`;

// console.log(thirdPerson);

//We can use dynamic template string using backtick 
const a = 10;
const b = 20;
const num = [10, 20, 30 , 40 , 50];
const summary = `sum of ${a} and ${num.length} is equal to ${a + num.length}`;
console.log(summary);