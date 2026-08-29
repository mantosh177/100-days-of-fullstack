// 1. Write a 'while' loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named 
// 'sum'.

// let sum = 0;
// let i = 0;

// while (i <= 5 ) {
//     // sum = sum + i;
//      sum += i;
//     i++;
// }
// console.log(sum);

/* 2. Write a "for" loop that loops through the array ["green tea", "black tea", "Masala chai", "oolong tea"] 
and stops the loop when it finds "masala chai".*/

// let tea = ["green tea", "black tea", "masala chai", "oolong tea"];

// let selectedTeas = [];

// for(let i = 0; i< tea.length; i++){
//     if(tea[i]=== 'masala chai'){
//         break;
//     }
//     selectedTeas.push(tea[i])

// }
// console.log(selectedTeas)

/* 2. Write a 'for ' loop that loops through the array
["London", "New York ", "Paris", "Berlin"] and skips "Paris". */


// let contry = ["London", "New York ", "Paris", "Berlin"];
// let selectedContries = [];

// for(let i = 0; i<contry.length; i++){
//     if(contry[i] === 'Paris'){
//         continue;
//     }
//     selectedContries.push(contry[i])

// }
// console.log(selectedContries)


/* 3. Use a 'for-of', loop to iterate through the array `[1, 2, 3, 4, 5]` 
and stop when the number 4 is found. Store the numbers before '4' in an array named "smallNumbers".*/
// let numbers = [1, 2, 3, 4, 5];
// let smallNumbers = [];

// for (const num of numbers) {
//     if(num === 4){
//         break;
//     }
//     smallNumbers.push(num);
// }
// console.log(smallNumbers);


/* 4. Use a "for-of" loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]
` and skip "herbal tea".
                Store the other teas in an array named `preferredTeas`.*/


// let arr = ["chai", "green tea", "herbal tea", "black tea",];
// let preferredTeas = [];

// for (const tea of arr) {
//     if(tea === 'herbal tea' ){
//         continue;
//     }
//     preferredTeas.push(tea);
    
// }
// console.log(preferredTeas);

/* 5. Use a 'for-in ' loop to loop through an object containing city populations. 
     Stop the loop when the population of "Berlin", is found and store all previous 
     cities population in a new object named 'cityPopulation'.

     let citiesPopulation = {
     "London": 890000,
     "New Yourk": 840000,
     "Paris": 220000,
     "Berlin": 350000,
     
     };*/

let citiesPopulation = {
    "London": 890000,
    "New York": 840000,
    "Paris": 220000,
    "Berlin": 350000,
};
let cityPopulation = {};
for (const people of citiesPopulation) {
    if(people === 220000){
        break;
    }
    cityPopulation.push(people);
    
}
console.log(cityPopulation)
     






