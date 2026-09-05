// function greet(name){
//     console.log("hello, ", name);
// };
// greet("mantosh");


// constructor function

// function person(name , age){
//     this.name = name
//     this.age = age

// }
// 2.
function Car(make, model){
    this.make = make
    this.model = model
}


let myCar = new Car("Toyota", "camry")
// console.log(myCar);


// 3.

function Tea(type){
    this.type = type;
    this.describe = function(){
        return `this is a cup of ${this.type}`
    }
}
let lemonTea = new Tea("lemon tea");
// console.log(lemonTea.describe())

// 4

function Animal(species){
    this.species = species;
}

Animal.prototype.sound = function(){
    return`${this.species} makes a sound `
};
// let dog = new Animal("Dog")
// console.log(dog.sound())

// let cat = new Animal("Cat")
// console.log(cat.sound())


// 5. Raising a error 

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyworkd ");
        
    }
    this.name = name;
}

let tea = new Drink("tea");
let coffee = Drink("coffee")