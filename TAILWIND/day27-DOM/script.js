// example 1

// const { Double } = require("mongodb");

// const { Double } = require("mongodb");



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

document
.getElementById("changeOrder")
.addEventListener("click", function(){
    let coffee = document.getElementById("coffeeOrder");
    coffee.textContent = "Espresso";
    coffee.style.backgroundColor = "brown"
    coffee.style.padding = "5px";
})



// Example: 4

document
.getElementById("addNewItem")
.addEventListener("click", function(){

    let newItem = document.createElement('li')
    newItem.textContent = "Eggs"

    document.getElementById("shoppingList").appendChild(newItem)
})

// example :5

document
.getElementById("removeLastTask")
.addEventListener("click", function(){
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove()
    
    
})


// example : 6 -> 
document
.getElementById("clickMeButton")
.addEventListener("dblclick", function(){
    alert("Bas ker bhai ab ")

})


// example : 7 =>

document
.getElementById("teaList")
.addEventListener("click", function(event){
    if(event.target && event.target.matches('.teaItem')){
        alert("you selected : " + event.target.textContent)
    }
})