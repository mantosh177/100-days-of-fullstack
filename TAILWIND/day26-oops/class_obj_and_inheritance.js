let car = {
    maeke : "toyota",
    model: "camry",
    year:2020,
    start : function(){
        return`${this.maeke} car got started in ${this.year}`
    }
}
// console.log(car.start())

function person(name,age){
    this.name = name,
    this.age= age
}
let john = new person("jhon doe", 40)
// console.log(john.name)



function Animal(type){
    this.type = type;
}

Animal.prototype.speak = function() {
    return `${this.type} makes a sound `;
};

Array.prototype.mantosh = function() {
    return `Custom method ${this}`;
};

let myArray = [1,2,3]
// console.log(myArray.mantosh());



// class

class vehicle {
    constructor(make, model){
        this.make = make
        this.model= model
    }
    
    start(){
        return `${this.model} is a car from ${this.make}`
    }
}



class Car extends vehicle {
    drive (){
        return `${this.make} this is an inheritance example `;
    }
    
}

let myCar = new Car("Tata", "punch")
// console.log(myCar.start())
// console.log(myCar.drive())

let vehOne = new vehicle("Toyota", "Corolla")
// console.log(vehOne.make)

// =================
// Encapsulation 
// ================

class BankAccount {
    #balance = 0;
    deposit(amount){
        this.#balance += amount
        return this.#balance;

    }
    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount()
console.log(account.getBalance());