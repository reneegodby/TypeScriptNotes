// Properties

class Person {
    firstName: string;
    lastName: string;
}

let user: Person = new Person();
user.firstName = "Timmy";
user.lastName = "Smith";

class User {
    firstName: string;
    lastName: string;

    sayHello(){
        console.log("Hello", this.firstName);
    }
}

let ken : User = new User();
ken.firstName = "Ken";
ken.sayHello();

//Constructors

class Game {
    constructor(name: string, maker: string){
        this.name = name;
        this.maker = maker;
    }
    name: string
    maker: string
}

let battleShip: Game = new Game("Battleship", "Hasbro");


//Inheritance

class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}

class Automobile extends Vehicle{
    isSelfDriving: boolean;
    
}
let myCar: Automobile = new Automobile();
console.log({myCar})

myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "Volvo";
console.log({myCar});

class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = false;
myMotorcycle.topSpeed =250;

console.log({myMotorcycle});

//Accessors

// class Store {
//     name: string;
//     city: string;

//     constructor(name: string, city: string){
//         this.name=name;
//         this.city=city;

//     }
// }

//Streamlined Approach. The code below replaces above commented out code. 
class Store {
       constructor(public name: string, public city: string) {}
    }
    
let ikea: Store = new Store("Ikea", "Chicago");
console.log ({ikea});

class Employee extends Person{
    private _salary: number; //_ shows other coders this class is private
    public badgeId: number;
    schedule: string[];

    getSalary():number{
        return this._salary;
    }

    setSalary(newSal: number){
        this._salary = newSal;
    }
}

let newEmployee: Employee = new Employee();
// newEmployee._salary; (this won't work bc salary is a private class)
newEmployee.badgeId = 496316546;
newEmployee.schedule = ["test"];
newEmployee.setSalary(30000);
console.log(newEmployee.getSalary());
