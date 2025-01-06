var version = `es6`;
console.log(`Hello ${version} TypeScript`);

var myString: string = "This is a string";

// myString = 1; cannot a sign a numeric value to a string


var myNum: number = 1234;
var bool: boolean = true;
var myStringArray: string[] = [`First`, "Second", `Third`];

var integer = 33; // Auto selects number variable 

console.log(bool = myNum === 456);

myStringArray = [myNum.toString(), `5678`];


console.log(`myStringArray = ${myStringArray}`);
myNum = myStringArray.length;
console.log(`myNumber = ${myNum}`);

console.log(integer);


var ObjectId = { name: "myName", id: 1, print() { } };
ObjectId = { id: 2, name: "ImSecond", print() { } };//using duck typing we can change the objects data by not following order of the porps 

// ObjectId = {id : 3, name : "Him"} since the function print is missing this causes an error

var obj1 = { id: 1, print() { } };
var obj2 = { id: 2, print() { }, select() { } }

obj1 = obj2;
// obj2 = obj1; here obj2 has all the props of obj1 which makes them comparable , however obj1 != obj2 since obj2 has one addinal prop


function calculate(a: number, b: number, c: number): number
{
    return (a * b) + c;
}

console.log(`result of calculation : ${calculate(3, 2, 1)}`)

var returnedValue: string = calculate(3, 2, 1).toString();

console.log(returnedValue);

/**
 * 
 * Given a string value, log it to the console
 * 
 * @param a     The input string.
 */
function printString(a: string): void
{
    console.log(a);
}

printString("testing fucntion");


var items = <any>{ id: 1, name: "JohnDoe" };

var items2 = { id: 1, name: "JohnDoe" } as any;

var index: number = 1;
if (index == 0)
{
    var index: number = 2;
    console.log(`index = ${index}`);
}
console.log(`index = ${index}`);


var newIndex: number = 0;
if (newIndex == 0)
{
    let newIndex: number = 2;
    console.log(`index = ${newIndex}`);
}
console.log(`index = ${newIndex}`);

// let allows us to make a fresh copy of our original value 

function printObject(obj: string | number): void
{
    console.log(`result of object = ${obj}`);

}

printObject(5);
printObject("PrintingString");

function addWithTypeGuard( //union function
    arg1: string | number,
    arg2: string | number): void
{

    if (typeof arg1 === "number" && typeof arg2 === "number")
    {
        console.log("both props are of number");
        console.log(arg1 + arg2);

    }
    else
    {
        console.log("Default function behaviour");
        console.log(`${arg1} , ${arg2}`);

    }

}

addWithTypeGuard(5, "hello");
addWithTypeGuard(48, 43);

type StringAndInt = string | number; // this is called Type aliases

function Allieses(obj: StringAndInt): void
{
    console.log(obj);

}

enum DoorState
{
    Open,
    Closed
}

function Door(state: DoorState): void
{
    console.log(`enum value is ${state}`)//enums can have specific indexes example could be Open = 5, Close = 3;

    switch (state)
    {
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

enum DoorStateString
{
    OPEN = "Open",
    CLOSE = "Close"
}
console.log(`The current door state is ${DoorStateString.OPEN}`);

const enum DoorStateConst
{
    Open = 10,
    Closed = 20
}// const enums are the best ones when it comes to javaScript since it generates a simple faster code
console.log(`const Closed = ${DoorStateConst.Open}`);


let array = ["123", "456", "789"];
delete array[0];
for (let i = 0; i < array.length; i++)
{
    checkPrintedElement(array[i]);
}

function checkPrintedElement(element: string | undefined): void
{
    if (element === undefined)
    {
        console.log("Invalid array element");

    }
    else
    {
        console.log(`Current array element is ${element}`);

    }
}

//using conditional expressions

const value: number = 77;
const valueString = value > 10 ? "Value is bigger than 10" : "value is lesser or equal to 10"
console.log(valueString);

var objectA = {
    nestedProperty: {
        name: "nestedPropertyName"
    }
}

function printNestedObject(obj: any)
{
    if (obj != undefined
        && obj.nestedProperty != undefined
        && obj.nestedProperty.name)
    {
        console.log(`name = ${obj.nestedProperty.name}`)
    } else
    {
        console.log(`name not found or undefined`);
    }
}


function printNestedOptionalChain(obj: any)
{
    if (obj?.nestedProperty?.name)
    {
        console.log(obj.nestedProperty.name);

    } else
    {
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

function isNullCheck(a: number | undefined | null)
{
    console.log(`a is : ${a ?? `the variable is undefined/null`}`);

}

isNullCheck(2);
isNullCheck(0);
isNullCheck(null);
// this is called Nullish coalescing

let structuredObject: object = {
    name: "MyObject",
    props: {
        id: 1,
        type: "AnObject"
    }
};

function toJson(obj: object)
{
    console.log(JSON.stringify(obj));

}

toJson(structuredObject);

let a: any = "test";
let aNumber: number = 2;
aNumber = a;
console.log(aNumber);

let u: unknown = "an unknown";
u = 1;
let aNumber2: number;
aNumber2 = <number>u;
//CAREFULL WITH THESE 2 EXAMPLES since they both bypass the compiler and run a valid JS code 
//Dont use any in 99% of senarios , unkown could be usefull simetimes if you don t know how to use a the variable at the current moment

enum AnEnum
{
    FIRST,
    SECOND
}

function getEnumValue(enumValue: AnEnum): string
{
    switch (enumValue)
    {
        case AnEnum.FIRST: return "First Case";
        case AnEnum.SECOND: return "Second Case";
    }
    let returnValue: never = enumValue;
    return returnValue;
}
//the never key word is very useful it will make the compiler to check any possible outcomes , If you somehow don t run your desired code path it will wanr you of an issue

//Object spread
let firstObj: object = { id: 1, name: "firstObj" };
let secondObj: object = { ...firstObj };
console.log(`secondObj : ${JSON.stringify(secondObj)}`);
//using the syntax ...(objectName) allows us to copy it 

let nameObj: object = { name: "nameObj name" };
let idObj: object = { id: 1 };
let obj3 = { ...nameObj, ...idObj };
console.log(`obj3 = ${JSON.stringify(obj3)}`);
//This allows us to merge object into one definitive object

let objPrec1: object = { id: 1, name: "obj1 name" };
let objPrec2: object = { id: 1001, desc: "obj2 description" };
let objPrec3 = { ...objPrec1, ...objPrec2 };
console.log(`objPrec3 : ${JSON.stringify(objPrec3, null, 2)}`);
//Note if both objects have the same prop the last added object will override the first prop

//Spread with arrays

let numarray: number[] = [1, 2, 3, 4, 5];
let numarray2: number[] = [5, 6, 7, 8];
let combinedArray: number[] = [...numarray, ...numarray2];
console.log(combinedArray);
//Note that if first and second array have common indexes it will make 2 copies 

//combining array and object
let objArray1 = [
    { id: 1, name: "first element" },
]
let objArray2 = [
    { id: 2, name: "second element" }
]
let objArray3 = [
    ...objArray1,
    { id: 3, name: "third element" },
    ...objArray2
]
console.log(`objArray3 = ${JSON.stringify(objArray3, null, 4)}`);
//Since this is an array the object props will not override 

//Tuples are data type that must store all its properties 
let tupleExample: [string, boolean];
tupleExample = ["Test", true];// This is a valid fill for the data
//  tupleExample = ["test"] Here this will fail since it not filling the criteria 

console.log(`tuple1[0] : ${tupleExample[0]}`);
console.log(`tuple1[1] : ${tupleExample[1]}`);
//since tuple is an array of data types logging the information is easy matter of indexes
let [deconstructionString, deconstructionBool] = tupleExample;
console.log(deconstructionString);
console.log(deconstructionBool);
//interesting way of assigning the data of a tuple. This creates to variables for us to use one with a string and anothre with bool
//Optional tuple elements
let optinalTuple: [string, boolean?];
optinalTuple = ["Hello", false];
console.log(optinalTuple[0], optinalTuple[1]);
optinalTuple = ["Removing bool"];
console.log(optinalTuple[0], optinalTuple[1]);
//Here we use ? to make a prop optinal so boolean is not required when filling the variable
//Tuples and spread syntax
let tupleRest: [number, ...string[]];
tupleRest = [1];
tupleRest = [1, "string1"];
tupleRest = [1, "string1", "string2"];

//Object destructuring for easier work with object they can be assigned to variables
let complexObject = {
    aNum: 1,
    bStr: "name",
    cBool: true
}
let { aNum, bStr, cBool } = complexObject;
console.log(`aNum : ${aNum}`);
console.log(`bStr : ${bStr}`);
console.log(`cBool : ${cBool}`);

let { aNum: objId, bStr: objName, cBool: isValid }
    = complexObject;//here we can change the names of the key for the property : aNum = objId, bStr = objName, cBool = IsValid
console.log(`objId : ${objId}`);
console.log(`objName : ${objName}`);
console.log(`isValid : ${isValid}`);

//Functions
//Optional parameters    
function concatValues(a: string, b?: string)
{
    console.log(`a + b = ${a + b}`);
}
concatValues("first", "second");
concatValues("third");//this will return third and undefines since b was not passed 
//BIG NOTE: When using optinal parameters they always have to be after all main parameters Example we cannot use a?:string , b:string
//Default parameters
function concatWithDefault(a: string, b: string = "default string")
{
    console.log(`a + b = ${a + b}`);
}
concatWithDefault("first", "second");
concatWithDefault("third");
//A much better option than using optinal parameters ? is to use default values if b is not assigned it takes the form of the given default data
//Rest parameters
function testArguments(...args: string[] | number[])
{
    for (let i in args)
    {
        console.log(`args[${i}] = ${args[i]}`);
    }
}
testArguments("Helo", "World");
testArguments(1, 2, 3);
//this fucntion will accept an array eighter a string[] or a number[]

//Function with callback WARNING CONFUSION
function call(text: string): void
{
    console.log(`myCallback called with ${text}`);

}

function callback(message: string, callFn: (text: string) => void)
{
    console.log(`withCallback called, message : ${message}`);
    callFn(message);

}

callback("Hello World", call);

//Function overrides trash fucntion don t use 
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any)
{
    return a + b;
}

//Literals
type AllowedStringValues = "one" | "two" | "three";
type AllowedNumericValues = 1 | 20 | 65535;
function withLiteral(input:
    AllowedStringValues | AllowedNumericValues)
{
    console.log(`called with : ${input}`);
}
withLiteral("one")
withLiteral("two");
withLiteral("three");

withLiteral(65535);
// withLiteral("four");//this will fail because it not in the type
// withLiteral(2);//this will fail because it not in the type



enum SwitchEnum
{
    ONE,
    TWO
}
function testEnumSwitch(value: SwitchEnum): string
{
    let returnValue = "";
    switch (value)
    {
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