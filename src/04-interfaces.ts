interface Animal {
    name: string;
    numberOfLegs: number; 

}
// !Error cannot instantiate them, interfaces are not classes
// let a: Animal = new Animal()

// !Error bc an interface was assigned, the var expects to have the same props within that interface
// let dog: Animal= {}

let dog: Animal = {
    name: "Fido",
    numberOfLegs: 4,
};

//Methods
//? Interfaces have methods, but they can only have method signatures, not the implementation of the method
//Method signature is the first line of the function
//  sayHello(name:string): string
//
//MEthod Implementation is the execution code for the function
//  {
//     let fName = name;
//     return fName;
// }

interface Product {
    name: string;
    price: number;
    stock: number;
    setTimeOfPurchase(d: Date):void;
    stockCount(): void;
}

class Apples implements Product {
    name = "Green Apples";
    price = 5.5;
    stock = 30;

    setTimeOfPurchase(d: Date){
        console.log("Apples purchased on", d);
    }

    stockCount(){
        console.log("Apples remaining", this.stock);
    }
}

let myApples: Apples = new Apples();

myApples.setTimeOfPurchase(new Date(Date.now()));
myApples.stockCount();

//Sharing Interface Types

type id = number;

interface UserObjInterface{
    id: id;
    username: string;
    avatar: string;
}

interface CommentObjInterface{
    id: id;
    user: UserObjInterface;
    text: string;
}

interface AuthProps {
    sessionToken: string;
}

interface AuthState {
    email: string;
    password: string;
}

interface PostObjInterface{
    id: id;
    poster: UserObjInterface;
    title: string;
    text: string;
    comments: CommentObjInterface[];
}

//Simulate a get all fetch for posts
//Posts -> hasMany -> Comments
//User -> hasOne -> Comments

const Posts: PostObjInterface[] = [
    {
      id: 1,
      poster: {
        id: 1,
        username: "user1",
        avatar: "user1.png",
      },
      title: "My first post",
      text: "Hello World",
      comments: [
        {
          id: 1,
          user: {
            id: 3,
            username: "user3",
            avatar: "user3.png",
          },
          text: "Some comment!",
        },
        {
          id: 2,
          user: {
            id: 2,
            username: "user2",
            avatar: "user2.png",
          },
          text: "Another comment!",
        },
      ],
    },
  ];


//Interfaces + Classes

type Year = number | string;

interface Colors {
    interior: string;
    exterior: string;
}
interface CarInterface {
    year: Year;
    model: string;
    color: Colors;
    price: number;
    electric?: true;
}

class Car implements CarInterface{
    constructor (
        public year: Year,
        public color: Colors,
        public model: string,
        public price: number,

    ){}

    testDrive(){
    console.log(`Test drove the ${this.model}`);
    }
}

class Tesla extends Car{
    private _owner: string = "Tesla Dealership";
    public electric: true = true;
    constructor(
        public year: Year,
        public color: Colors,
        public model: string,
        public price: number,
    ) {
       super(year,color,model,price) 
    }
purchase(price:number, purchaser: string){
    if(price >= this.price){
        this.changeOwner(purchaser);
        console.log(`Bought the ${this.model}. Enjoy your purchase! `);
    }
    else{
        console.log(`Need $${this.price - price} more!`);
    }
}

    private changeOwner (newOwner:string){
        this._owner = newOwner;
    }
}
let TeslaForSale = new Tesla(
    2022,
    {interior: "Grey", exterior: "Black"},
    "Model - S",
    94_900,
)

console.log({TeslaForSale});

//! Error - Cannot access a private property.
//TeslaForSale._owner = "Me";
//or
//TeslaForSale.changeOwner("Me");

TeslaForSale.testDrive();

TeslaForSale.purchase(100000, "Me");
console.log({TeslaForSale});