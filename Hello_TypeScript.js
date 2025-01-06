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
var objectA = {
    nestedProperty: {
        name: "nestedPropertyName"
    }
};
function printNestedObject(obj) {
    if (obj != undefined
        && obj.nestedProperty != undefined
        && obj.nestedProperty.name) {
        console.log(`name = ${obj.nestedProperty.name}`);
    }
    else {
        console.log(`name not found or undefined`);
    }
}
function printNestedOptionalChain(obj) {
    var _a;
    if ((_a = obj === null || obj === void 0 ? void 0 : obj.nestedProperty) === null || _a === void 0 ? void 0 : _a.name) {
        console.log(obj.nestedProperty.name);
    }
    else {
        console.log(`name not found!`);
    }
}
printNestedOptionalChain(undefined);
printNestedOptionalChain({
    aProperty: "another property"
});
printNestedOptionalChain({
    nestedProperty: {
        name: null
    }
});
function isNullCheck(a) {
    console.log(`a is : ${a !== null && a !== void 0 ? a : `the variable is undefined/null`}`);
}
isNullCheck(2);
isNullCheck(0);
isNullCheck(null);
// this is called Nullish coalescing
let structuredObject = {
    name: "MyObject",
    props: {
        id: 1,
        type: "AnObject"
    }
};
function toJson(obj) {
    console.log(JSON.stringify(obj));
}
toJson(structuredObject);
let a = "test";
let aNumber = 2;
aNumber = a;
console.log(aNumber);
let u = "an unknown";
u = 1;
let aNumber2;
aNumber2 = u;
//CAREFULL WITH THESE 2 EXAMPLES since they both bypass the compiler and run a valid JS code 
//Dont use any in 99% of senarios , unkown could be usefull simetimes if you don t know how to use a the variable at the current moment
var AnEnum;
(function (AnEnum) {
    AnEnum[AnEnum["FIRST"] = 0] = "FIRST";
    AnEnum[AnEnum["SECOND"] = 1] = "SECOND";
})(AnEnum || (AnEnum = {}));
function getEnumValue(enumValue) {
    switch (enumValue) {
        case AnEnum.FIRST: return "First Case";
        case AnEnum.SECOND: return "Second Case";
    }
    let returnValue = enumValue;
    return returnValue;
}
//the never key word is very useful it will make the compiler to check any possible outcomes , If you somehow don t run your desired code path it will wanr you of an issue
//Object spread
let firstObj = { id: 1, name: "firstObj" };
let secondObj = Object.assign({}, firstObj);
console.log(`secondObj : ${JSON.stringify(secondObj)}`);
//using the syntax ...(objectName) allows us to copy it 
let nameObj = { name: "nameObj name" };
let idObj = { id: 1 };
let obj3 = Object.assign(Object.assign({}, nameObj), idObj);
console.log(`obj3 = ${JSON.stringify(obj3)}`);
//This allows us to merge object into one definitive object
let objPrec1 = { id: 1, name: "obj1 name" };
let objPrec2 = { id: 1001, desc: "obj2 description" };
let objPrec3 = Object.assign(Object.assign({}, objPrec1), objPrec2);
console.log(`objPrec3 : ${JSON.stringify(objPrec3, null, 2)}`);
//Note if both objects have the same prop the last added object will override the first prop
//Spread with arrays
let numarray = [1, 2, 3, 4, 5];
let numarray2 = [5, 6, 7, 8];
let combinedArray = [...numarray, ...numarray2];
console.log(combinedArray);
//Note that if first and second array have common indexes it will make 2 copies 
//combining array and object
let objArray1 = [
    { id: 1, name: "first element" },
];
let objArray2 = [
    { id: 2, name: "second element" }
];
let objArray3 = [
    ...objArray1,
    { id: 3, name: "third element" },
    ...objArray2
];
console.log(`objArray3 = ${JSON.stringify(objArray3, null, 4)}`);
//Since this is an array the object props will not override 
//Tuples are data type that must store all its properties 
let tupleExample;
tupleExample = ["Test", true]; // This is a valid fill for the data
//  tupleExample = ["test"] Here this will fail since it not filling the criteria 
console.log(`tuple1[0] : ${tupleExample[0]}`);
console.log(`tuple1[1] : ${tupleExample[1]}`);
//since tuple is an array of data types logging the information is easy matter of indexes
let [deconstructionString, deconstructionBool] = tupleExample;
console.log(deconstructionString);
console.log(deconstructionBool);
//interesting way of assigning the data of a tuple. This creates to variables for us to use one with a string and anothre with bool
//Optional tuple elements
let optinalTuple;
optinalTuple = ["Hello", false];
console.log(optinalTuple[0], optinalTuple[1]);
optinalTuple = ["Removing bool"];
console.log(optinalTuple[0], optinalTuple[1]);
//Here we use ? to make a prop optinal so boolean is not required when filling the variable
//Tuples and spread syntax
let tupleRest;
tupleRest = [1];
tupleRest = [1, "string1"];
tupleRest = [1, "string1", "string2"];
//Object destructuring for easier work with object they can be assigned to variables
let complexObject = {
    aNum: 1,
    bStr: "name",
    cBool: true
};
let { aNum, bStr, cBool } = complexObject;
console.log(`aNum : ${aNum}`);
console.log(`bStr : ${bStr}`);
console.log(`cBool : ${cBool}`);
let { aNum: objId, bStr: objName, cBool: isValid } = complexObject; //here we can change the names of the key for the property : aNum = objId, bStr = objName, cBool = IsValid
console.log(`objId : ${objId}`);
console.log(`objName : ${objName}`);
console.log(`isValid : ${isValid}`);
//Functions
//Optional parameters    
function concatValues(a, b) {
    console.log(`a + b = ${a + b}`);
}
concatValues("first", "second");
concatValues("third"); //this will return third and undefines since b was not passed 
//BIG NOTE: When using optinal parameters they always have to be after all main parameters Example we cannot use a?:string , b:string
//Default parameters
function concatWithDefault(a, b = "default string") {
    console.log(`a + b = ${a + b}`);
}
concatWithDefault("first", "second");
concatWithDefault("third");
//A much better option than using optinal parameters ? is to use default values if b is not assigned it takes the form of the given default data
//Rest parameters
function testArguments(...args) {
    for (let i in args) {
        console.log(`args[${i}] = ${args[i]}`);
    }
}
testArguments("Helo", "World");
testArguments(1, 2, 3);
//this fucntion will accept an array eighter a string[] or a number[]
//Function with callback WARNING CONFUSION
function call(text) {
    console.log(`myCallback called with ${text}`);
}
function callback(message, callFn) {
    console.log(`withCallback called, message : ${message}`);
    callFn(message);
}
callback("Hello World", call);
function add(a, b) {
    return a + b;
}
function withLiteral(input) {
    console.log(`called with : ${input}`);
}
withLiteral("one");
withLiteral("two");
withLiteral("three");
withLiteral(65535);
// withLiteral("four");//this will fail because it not in the type
// withLiteral(2);//this will fail because it not in the type
var SwitchEnum;
(function (SwitchEnum) {
    SwitchEnum[SwitchEnum["ONE"] = 0] = "ONE";
    SwitchEnum[SwitchEnum["TWO"] = 1] = "TWO";
})(SwitchEnum || (SwitchEnum = {}));
function testEnumSwitch(value) {
    let returnValue = "";
    switch (value) {
        case SwitchEnum.ONE:
            returnValue = "One";
            break;
        case SwitchEnum.TWO:
            returnValue = "Two";
    }
    return returnValue;
}
console.log(`SwitchEnum.ONE = ${testEnumSwitch(SwitchEnum.ONE)}`);
console.log(`SwitchEnum.TWO = ${testEnumSwitch(SwitchEnum.TWO)}`);
console.log(`hello mom`);
//# sourceMappingURL=Hello_TypeScript.js.map