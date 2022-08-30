//Var is a functional Scope

if(true){
    var varVariable = 'This is var';
    var varVariable = 'This is var again';
}

console.log(varVariable);


//Let is a block scope
if(true){
    let letVariable = 'This is let'
    console.log(letVariable);
}
//We Can't re assign const multiple times. But you can update an object in the const