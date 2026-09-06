// Static method 

class Calculator{
    static add(a , b ){
        return a + b;
    }
}
// You can't do like this 
// let miniCalc  = new Calculator()
// console.log(miniCalc.add(3, 5 ))

// console.log(Calculator.add(8 , 44))


// Getters and Setters 

class Employee {
    #salary;

    constructor(name, salary) {
        if (salary < 0) {
            throw new Error("Salary cannot be negative");
        }

        this.name = name;
        this.#salary = salary;
    }

    get salary() {
        return "You are not allowed to see salary";
    }

    set salary(value) {
        if (value < 0) {
            console.error("Invalid Salary");
        } else {
            this.#salary = value;
        }
    }
}

let emp = new Employee("Mantosh", 700000);

console.log(emp.salary);

