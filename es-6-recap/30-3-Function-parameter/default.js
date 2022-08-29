function add(first, second = 40){
    // console.log(first, second);
    const total = first + second;
    return total;
}

const result = add( 10);
// console.log(result);


function fullName (first, second = 'The King'){
    const name = first + ' '+ second;
    return name;
}

const name = fullName( 'Fahad Abdul');
console.log(name);

//Argument মানে হলো যেগুলো তুমি পাঠাবা 
// আর parameter মানে হলো যেগুলো তুমি ডিক্লেয়ার করবা।
