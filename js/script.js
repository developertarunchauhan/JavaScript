console.log("JavaScript Basic to Advance"); // returns data to console

/**
 * JavaScript Data types : 
 * 1. String
 * 2. Number
 * 3. Bigint
 * 4. Boolean
 * 5. Undefined
 * 6. Null
 * 7. Symbol
 * 8. Object
 */

/**
 *  Declaring a variable :
 */

var name = "Tarun Chauhan"; // can be accessed anywhere in a program

let job = "Software Developer"; // can be accessed inside a scope where it is declared only

const YOB = 1990; // immuatable value


/**
 * Assignment Variables : 
 */

var a;
a = 2;
var b = 3; // `=` is an assignment operator

/**
 * Uninitialized variables : variable is declared but value not set
 */

var aa, bb, cc;


var msg = "Hello, my name is " + name + "and I am well";

console.log(msg);
console.log(msg.length);

name[0] = "V"; // can't be done

name = "Varun Chauhan"; // we can change entire value

console.log(name);

/**
 * 
 * Array : Special variable that can hold more than one data of same or different data type.
 * 
 */


var myList = ["Tarun Chauhan", 32, "Software Developer"];

console.log(myList);

console.log(myList[2]);

myList[1] = 33;

console.log(myList);


/**
 * Multidimensional array : Array inside and another array
 */

var mulArray = [
    ["Tarun Chauhan", 32, "Software Developer"],
    ["Priya Chauhan", 28, "House Wife"],
    ["Yagnya Chauhan", 1, "Baby"]
];

console.log(mulArray);

console.log(mulArray[1]);

console.log(mulArray[1][2]);

mulArray[2][2] = "Toodler";

console.log(mulArray[2]);


/**
 * 3 - level array : 
 */

var threeLevel = [
    ["abc", 123],
    ["pqr", 789],
    [["x", "y", "z"], 5467]
];

console.log(threeLevel);

/**
 * Appending data to an array: PUSH
 */

threeLevel.push([23, 45, 67]);

console.log(threeLevel);

/**
 * Removing from array : POP
 */


var removedArray = threeLevel.pop();
console.log(threeLevel);
console.log('Removed Array : ' + removedArray);

/**
 * Removing the first element of the array : Shift()
 */

threeLevel.shift();

console.log(threeLevel);

/**
 * Adding an element to starting of the array : unshift
 */

threeLevel.unshift([23, 12, "HELLO"]);

console.log(threeLevel);

/**
 * ARRAYS : 
 */

var shoppingList = [
    ["mango", 1],
    ["Apple", 2],
    ["Milk", 3],
    ["Sugar", 4]
];

console.log(shoppingList);

/**
 * Write Reuseable Code with Functions
 */

function funOne() {
    console.log("This is first function");
}

funOne();

function funTwo(name) {
    console.log("Hello " + name);
}

funTwo("Tarun");

/**
 * Scope : refers to the visibility of the variables
 * Global scope : variable declared outside of a function and can be accessed accros the program or inside any function.
 * Local scope : variables declared inside of a function and can only be accessed by the function itself.
 */

var abc_1 = "ABC"; // this is global variable

function funThree() {
    var abc_2 = "ABC_2"; // this is local variable
}

function funFour() {
    if (typeof (abc_1 != "undefined")) {
        console.log("GLOABL " + abc_1);
    }
    if (typeof (abc_2 != "undefined")) {
        console.log("LOCAL" + abc_2);
    }
}

funFour();