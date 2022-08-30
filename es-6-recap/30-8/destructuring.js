const profile = {
    name: 'Fahad Abdul Aziz',
    address: 'Banasree, Block b',
    phone: 1821177189,
    salary: 12000,
}
const {phone} = profile;

// console.log(phone);

const {address} = profile;
// console.log(address);

//Array Destructuring
const [first, second] = [10, 20 , 30, 40, 50, 60, 70];
// console.log(first, third);

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
// console.log(notun);

function getNames() {
    return ['Fahad', 'Aziz'];
}

const [one, sec] = getNames();
console.log(sec, one);