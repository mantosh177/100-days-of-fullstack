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



// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function add(a, b) {
//     return a + b;
// }

// rl.question("Enter first number: ", (a) => {
//     rl.question("Enter second number: ", (b) => {

//         let result = add(Number(a), Number(b));

//         console.log("Result:", result);

//         rl.close();
//     });
// });





/* ==================
      FUNCTION 
===================== */
/* 1 . Write a function named `makeTea` that takes one parameter , 'typeOfTea' , and returns a string like "Making green Tea" when 
called with "green tea" , Store the result in a variable named 'teaOrder
'
*/

function makeTea(typeOfTea){
    return `Making ${typeOfTea}`
    console.log(test);
}
 
let teaOrder = makeTea("green tea")
// console.log(teaOrder)


/* 2 . Create a function named 'orderTea' that takes one parameter , 'teaType'. Inside this function, create another function 
    named 'confirmOrder' that rerturns a message like "Order confirmed for chai ". Call 'confirmOrder' from within 'orderTea' and return the result */ 

    function orderTea(teaType){
        function confirmOrder(){
            return("order confirmed for chai ")
        }
     return confirmOrder()
    }
 
    let ordeConfirmation = orderTea("chai")

    // console.log(ordeConfirmation);

/* 3. Write an arrow function named 'calculateTotal' that take two parametrs: 'price' and 'quantity'. The function should
   return the total cost by multiplying the 'price' and 'quantity'. Store the result in a variable named 'totalCost'
   */
 

 const calculateTotal = (price , quantity ) =>  price * quantity

 let totalCost = calculateTotal(499 , 100)

//  console.log(totalCost)



/* =========
Function as a parameter 
==============*/ 


/* 4. Write a function named 'processTeaOrder' that takes another function, 'makeTea', as a parameter and calls it 
    with argument "earl grey". Return the result of calling 'makeTea'
    */ 

    function makeTea(typeOfTea){
        return `maketea ${typeOfTea}`;
    }

    function processTeaOrder(teaFunction){
        return teaFunction('earl grey')
    }
    let order = processTeaOrder(makeTea)

    // console.log(order);


/* 5.  Write a function named 'createTeaMaker' that returns another function . 
     The returned function should take one parameter 'teaType', and return a message like '"making green tea"'. 
      Store the returned function in a variable named 'teaMaker' and call it with '"green tea"'.
      */

      function createTeaMaker(){
        return function(teaType){
            return `Making ${teaType}`;
        };
      }

      let teamaker = createTeaMaker()
      console.log(teamaker("green tea"));
      let result = teamaker("lal chai");
      console.log(result);








