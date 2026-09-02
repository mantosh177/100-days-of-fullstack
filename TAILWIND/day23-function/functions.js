// A function is a reusable block of code designed to perform a specific task. It runs when we call/invoke it.


// function add() {
//     console.log(2 + 3);
// }

// add();
// function greet() {
//     console.log("Hello, Mantosh!");
// }

// greet();


// function name(){
//     console.log("Mantosh kuamar , RAM Ram ");

// }
// // name();

// function greet(name){
//     console.log("Hello "+ name)
// }
// greet("Mantosh");


// function add(a , b){
//     return(a + b );

// }

// let result = add( 32 , 5 );
// console.log(result)


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function add(a, b) {
    return a + b;
}

rl.question("Enter first number: ", (a) => {
    rl.question("Enter second number: ", (b) => {

        let result = add(Number(a), Number(b));

        console.log("Result:", result);

        rl.close();
    });
});