// example 1

const { Double } = require("mongodb");

document
.getElementById("changeTextButton")
.addEventListener("click" ,function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph is changed ";
});

// example: 2

document
.getElementById("highlightFisrtCity")
.addEventListener("click", function (){
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight") 
});



// example: 3

// document
// .getElementByIdA("changeOrder")
// .addEventListener("click", function (){
//     let coffeeType = document.getElementById("coffeeType");
//     coffeeType.textContent = "Espresso";
//     // coffeeType.style.backgroundColor = "red"

    
// })

