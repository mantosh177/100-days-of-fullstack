// 1. Write a 'while' loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named 
// 'sum'.

let sum = 0;
let i = 0;

while (i <= 5 ) {
    // sum = sum + i;
     sum += i;
    i++;
}
console.log(sum);

/* 2. Write a "for" loop that loops through the array ["green tea", "black tea", "Masala chai", "oolong tea"] 
and stops the loop when it finds "masala chai".*/

let tea = ["green tea", "black tea", "masala chai", "oolong tea"];

let selectedTeas = [];

for(let t = 0; i< tea.length; i++){
    if(tea[i]=== 'masala chai'){
        break;
    }
    selectedTeas.push(tea[i])

}
console.log(selectedTeas)