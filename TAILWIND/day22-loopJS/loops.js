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

// let citiesPopulation = {
//     "London": 890000,
//     "New York": 840000,
//     "Paris": 220000,
//     "Berlin": 350000,
// };
// let cityNewPopulation = {};

// for(const city in citiesPopulation){
//     {
//         if(city == 'Paris'){
//             break;
//         }
//     }
// //    key = value

// cityNewPopulation[city]= citiesPopulation[city];
// }
// console.log(cityNewPopulation)

// console.log(Object.keys(citiesPopulation))
// console.log(Object.values(citiesPopulation))
   

/* 6. use a 'for-in' loop to loop through an object containg city populations. 
    Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

    let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000,
    };
    */


// let worldCitites  = {
//     "Sydney": 5000000,
//     "Tokyo": 9000000,
//     "Paris": 2200000,
//     "Berlin": 3500000,
// };
// let largeCities = {};

// for (const city in worldCitites) {
//     if(worldCitites[city] < 3000000){
//         continue;
//     }
//     largeCities[city] = worldCitites[city];
    
// }
// console.log(largeCities);



/* 7. Write a 'forEach' loop that iterates through the array 
["earl grey", "green tea", "chai", "oolong tea"]. 
   Stop the loop when "chai" is found , and store all previous 
     tea types in an array named 'availableTeas'. 
     */

// let teaTypes = ["earl gery", "green tea", "chai", "oolong tea"];
// let availableTEas = [];

// teaTypes.forEach(function(tea){
// if(tea === 'chai'){
    // return;
    // }
    // availableTEas.push(tea);
// });
// console.log(availableTEas);


/* 8. Write a 'forEach' loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"].
  Skip "Sydney", and store the other cities in a new array nmed 'traveledCities'.
*/

let cities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

// cities.forEach(function(city){
//     if(city === 'Sydney'){
//         return;
//     }


//     traveledCities.push(city);

// });

cities.forEach(city => {
    if(city === "Sydney"){
        return;
    }
    
});
// console.log(traveledCities);


/* 9. Write a 'for' loop that iterates through the array [2, 5, 7, 9].
  Skip the value '7' and multiply the rest by 2. Store the results in a new array named 'doubledNumber'.*/


let arr = [2, 5, 7, 9];
let doubledNumber = [];
for(let i = 0; i<arr.length; i++ ){
    if(arr[i]===  7){
        continue;
    }
   doubledNumber.push(arr[i]*2);
}
//  console.log(doubledNumber);


/* 10. Use a 'for-of' loop to iterate through the array ` ["chai", "green tea", "black tea", "jasmine tea", "heatea"]
  and stop when the length of the current tea name is greater than 10.
    Store the teas iterated over in an array named 'shortTeas'.*/

let teaTypes = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of teaTypes) {
    if(tea.length >= 10){
        continue;
    }
    shortTeas.push(tea);
}
console.log(shortTeas);
  


let man = "mantosh kumar ";
console.log(man.length)