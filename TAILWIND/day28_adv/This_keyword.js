const person = {
    name : "mantosh",

    greet() {
        console.log(`Hi , I am ${this.name}`);
    },
};

person.greet()

const greetFunctio = person.greet

greetFunctio()
// now binding the context 
const boundGreet = person.greet.bind({name: "John"})
boundGreet()

// learn this = bind, call and apply 