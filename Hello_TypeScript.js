"use strict";
var version = `es6`;
console.log(`Hello ${version} TypeScript`);
var myString = "This is a string";
// myString = 1; cannot a sign a numeric value to a string
var myNum = 1234;
var bool = true;
var myStringArray = [`First`, "Second", `Third`];
var integer = 33; // Auto selects number variable 
console.log(bool = myNum === 456);
myStringArray = [myNum.toString(), `5678`];
console.log(`myStringArray = ${myStringArray}`);
myNum = myStringArray.length;
console.log(`myNumber = ${myNum}`);
console.log(integer);
var ObjectId = { name: "myName", id: 1, print() { } };
ObjectId = { id: 2, name: "ImSecond", print() { } }; //using duck typing we can change the objects data by not following order of the porps 
// ObjectId = {id : 3, name : "Him"} since the function print is missing this causes an error
var obj1 = { id: 1, print() { } };
var obj2 = { id: 2, print() { }, select() { } };
obj1 = obj2;
// obj2 = obj1; here obj2 has all the props of obj1 which makes them comparable , however obj1 != obj2 since obj2 has one addinal prop
function calculate(a, b, c) {
    return (a * b) + c;
}
console.log(`result of calculation : ${calculate(3, 2, 1)}`);
var returnedValue = calculate(3, 2, 1).toString();
console.log(returnedValue);
/**
 *
 * Given a string value, log it to the console
 *
 * @param a     The input string.
 */
function printString(a) {
    console.log(a);
}
printString("testing fucntion");
var items = { id: 1, name: "JohnDoe" };
var items2 = { id: 1, name: "JohnDoe" };
var index = 1;
if (index == 0) {
    var index = 2;
    console.log(`index = ${index}`);
}
console.log(`index = ${index}`);
var newIndex = 0;
if (newIndex == 0) {
    let newIndex = 2;
    console.log(`index = ${newIndex}`);
}
console.log(`index = ${newIndex}`);
// let allows us to make a fresh copy of our original value 
function printObject(obj) {
    console.log(`result of object = ${obj}`);
}
printObject(5);
printObject("PrintingString");
function addWithTypeGuard(//union function
arg1, arg2) {
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        console.log("both props are of number");
        console.log(arg1 + arg2);
    }
    else {
        console.log("Default function behaviour");
        console.log(`${arg1} , ${arg2}`);
    }
}
addWithTypeGuard(5, "hello");
addWithTypeGuard(48, 43);
function Allieses(obj) {
    console.log(obj);
}
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
})(DoorState || (DoorState = {}));
function Door(state) {
    console.log(`enum value is ${state}`); //enums can have specific indexes example could be Open = 5, Close = 3;
    switch (state) {
        case DoorState.Open:
            console.log(`The door is open`);
            break;
        case DoorState.Closed:
            console.log(`The door is closed`);
            break;
    }
}
Door(DoorState.Open);
Door(DoorState.Closed);
//Enums could also be strings 
var DoorStateString;
(function (DoorStateString) {
    DoorStateString["OPEN"] = "Open";
    DoorStateString["CLOSE"] = "Close";
})(DoorStateString || (DoorStateString = {}));
console.log(`The current door state is ${DoorStateString.OPEN}`);
console.log(`const Closed = ${10 /* DoorStateConst.Open */}`);
let array = ["123", "456", "789"];
delete array[0];
for (let i = 0; i < array.length; i++) {
    checkPrintedElement(array[i]);
}
function checkPrintedElement(element) {
    if (element === undefined) {
        console.log("Invalid array element");
    }
    else {
        console.log(`Current array element is ${element}`);
    }
}
//using conditional expressions
const value = 77;
const valueString = value > 10 ? "Value is bigger than 10" : "value is lesser or equal to 10";
console.log(valueString);
//# sourceMappingURL=Hello_TypeScript.js.map