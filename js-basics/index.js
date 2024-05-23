console.log('Hello World');

//VARIABLES
//variables cannot be named a reserved keyword
//variable names should be meaningful
//cannot start with a number, contain a space or contain a hyphen (use camelCase)
let name = 'Mosh';
console.log(name); 

//CONSTANTS
const interestRate = 0.3; //now we cannot reassign to interestRate
console.log(interestRate);

//PRIMITIVE TYPES
//strings, numbers, booleans, undefined, and null
let secondName = 'Mosh'; //string literal
let age = 30; // number literal. 
//note: in js there are not "ints" and "floats", just numbers
let isApproved = true; //boolean literal
let thirdName = undefined;
let fourthName = null;

//DYNAMIC TYPING
//There are two kinds of programming languages. in a static language, once you declare a type
//for a variable, you cannot change it. in a dynamic language, you can change it. 
console.log(typeof name);
name = 1;
console.log(typeof name);

//OBJECTS (1 of 3 Reference types)
let person = {
    personName: 'Mosh',
    personAge: 30
};
console.log(person);

person.personName = 'Zoya'; //dot notation
console.log(person)

person['personAge'] = 35; //bracket notation
console.log(person);

//ARRAYS
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]);
selectedColors[2] = 'green';
console.log(selectedColors);
selectedColors[3] = 2;
console.log(selectedColors);
console.log(typeof selectedColors);
console.log(selectedColors.length);

//FUNCTIONS
function greet() {
    console.log('Hello World');
}
greet();

function greetName(greetingName) {
    console.log('Hello '+greetingName);
}
greetName('Zoya');

//Calculating a value
function square(number) {
    return number*number;
}

let number = square(2);
console.log(number);