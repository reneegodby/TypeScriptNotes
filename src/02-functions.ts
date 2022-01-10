//In JS
// function demoFunction(someNum){
//     return someNum;
// }

// demoFunction(1);
// demoFunction("string");
// demoFunction(1, "dksfjsd", true);

//We can call the func with a number as an argument
//We can call the func with a string as an argument
//We can add arguments that weren't originally declared.

function addNumbers(num1: number, num2: number): number{
    return num1 + num2;
}
addNumbers(1, 2); 


function hello(greetingString: string){
    return greetingString; 
}

hello("hello");

//Function with optional params

function showNameOrAge(
    firstName: string,
    lastName: string,
    age?:number){
        console.log(firstName + " " + lastName);
        return age;
}

showNameOrAge("Bob", "Smith", 5)