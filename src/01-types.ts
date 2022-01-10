//Type Declarations

// let x = 7;
// x = "seven"

//Declare types w/out initialization
let address: string;
let phoneNumber: string;
let email: string;
let sS: number;
let isMarried: boolean;

//Declare types w/initialization
let username: string = "instructor";
let password: string = "password";
let instructorId: number = 1;

let greeting = "hello";

//Basic types
//primitives

//Number
let age: number = 40;
let currentYear: number = 2022;
let balance: number = 1_000_000;

//String
let companyName: string;
companyName = "EFA";
let appName: string;
appName = "Twitter";

//Boolean
let isLoggedIn: boolean = true;
let isAdmin: boolean = true;

//Arrays

//expressed in 2 ways
//1. Best practice
let studentList: string[] = ["Timmy", "Bobby"];

//2
let allScores: Array<number> = [0,1,2,3,4,5];

//Any
let dataFromThirdParty: any = "123456789"; 12476111
dataFromThirdParty = 2345678; 2345678
typeof dataFromThirdParty; 

//Void
//A void type has no type at all. This is not really seen in variables, but is more common to see in functions that return no value. 
function sayHelloToAll(): void {
    console.log("Hello All")
}

//Null & undefined
let undefinedVariable: undefined = undefined; 
let nullVariable: null = null;

//Tuple
//Tuple type allows you to create an array with multiple different types

let usernameAndId: [string, number];
usernameAndId = ["something", 49874];

//Enumerators
//Enums allow us to give names to numeric values in enum
 enum Color{
     "Red",//0
     "Blue",//1
     "Green",//2 
 }
 let selected:string = Color[Color.Red];
// console.log("test");

enum CardType {
    Ace = 1,
    Two,
    Three,
    Four,
}

let cardType: string = CardType[2]; 

//Union Types

let x: number | string | boolean;
x = 49854;
x = "string";
x = true;


