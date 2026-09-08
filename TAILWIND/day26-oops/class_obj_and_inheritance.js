

let car = {
    make : "toyota",
    model: "camry",
    year:2020,
    start : function(){
        return`${this.make} car got started in ${this.year}`
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


                                                /* ===============
                                                ABSTRACTION
                                                 ===========*/

class CoffeMachine {
    start(){
        // call DB
        // filter value 
        return 'Starting the machine ..... '
    }

    brewCoffee (){
        // complex calculation
        return 'Brewing coffee ' 
    }


    pressStartButton(){
        let msgone = this.start()
        let msgTwo = this.brewCoffee()
        return `${msgone} + ${msgTwo}`
    } 
}

let myMachine = new CoffeMachine()
// console.log(myMachine.start())
// console.log(myMachine.brewCoffee())


// console.log(myMachine.pressStartButton())



                                                    /* ================
                                                       Polymorphism 
                                                       =============*/

class Bird {
    fly(){
        return 'Flying .... '
    }
}


class Penguin extends Bird {
    fly(){
        return 'Penguins can not fly ';
    }
}

let bird = new Bird()
let penguin = new Penguin()

// console.log(bird.fly())
// console.log(penguin.fly())
// )


