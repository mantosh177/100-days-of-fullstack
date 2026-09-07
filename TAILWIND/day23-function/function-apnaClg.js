// // function  = Block of code that performs a specific task, can be invoked whenever needed. 


// function myFunction(){
//     console.log(" welcome \n we are students ")
// }

// // myFunction();
// // myFunction();


// function Msg(msg){
//     console.log(msg);
// }

// // Msg("mantosh")

// function add(a , b){
    
//     return a + 
//     b;
// }
// let val = add(8 , 9);
// // console.log(val)

//                                                             /* ===========
//                                                             Arrow Functions 
//                                                             =============*/
//                                 // Compact way of writing a function 

 
// const arrowSum = (a, b ) => {
//     console.log(a + b);
// }

// // arrowSum(80, 9)

// // arrow function for multiplication 

// const arrowMultiplication = (a, b , c ) =>{
//     return a* b * c;
// }
// let a = arrowMultiplication(8, 9 , 5 );
// // console.log(a)
// // or you can do it like 

// // console.log(arrowMultiplication(5, 6 , 9));

// const printHello=() => {
//     return 'hello mantosh '
// }

// // console.log(printHello())

// Question - Create a function using the 'function' keyword that takes a string as an argument & returns the number of vowels in the string .Create

// function findVowels(str){
//     let count = 0;

//     for(const char of str ){
//         if(char === "a" ||char === "e"|| char === "i"||char === "o" ||char === "u"){
//             count++;
//         }
        
//     }
//     console.log(count);
// }
// findVowels("mantoshws")


// // Question - same above ques by arrow function

// const countVowel = (name) =>{
//     count = 0;
//     for(const c of name){
//         if(c ==="a" || c === "e"){
//             count++;
//         }
//     }
//     console.log(count)
// }

// countVowel()


                                                    // =====================

                                                    // forEach loop in arrays

                                                    // ============================

// let arr = [1, 2,3, 4, 5]

// arr.forEach(function printVal(val, idx){
//     console.log(val, arr, idx)}
// )

// Question - For a given array of numbers, print the square of each value using the forEach loop.

let arr = [1, 2, 3, 4, 5];

arr.forEach(function squareOf(val){
    console.log(val * val);
})