// 1.m create an array named teaDlavors and it should have content "green tea", "black tea", "oolong tea" . 
    //    make a new variable and acces and store the first element of teaFlavors array. 

// let teaFlavors = ["green tea", "black tea", "oolong tea"];

// const firstTea = teaFlavors[0]

// 2.

let cities = ["London", "Tokyo", "Parish","New York "];

const favoritecity = cities[2];

// 3. You have an array named 'teaTypes' containing "herbal tea ". "White tea", "masala chai ", 
        // Change the second element of the array to "jasmine tea".

        let teaTypes = ["herbal tea", "white tea", "masala chai"];
        teaTypes[1] = "jasmine tea"
        // console.log(teaTypes)

//  4. Given an array of numbers, find the second largest unique number.
    // let numbers = [10, 5, 20, 8, 20, 15];

    let numbers = [10, 5, 20, 8, 20, 15];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > largest) {
        secondLargest = largest;
        largest = numbers[i];
    } 
    else if (numbers[i] > secondLargest && numbers[i] !== largest) {
        secondLargest = numbers[i];
    }
}

console.log(secondLargest);
