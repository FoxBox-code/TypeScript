"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module1 = void 0;
let idObject = {
    id: 2,
    name: "this is a name"
};
let optionalId = {
    id: 1
};
let optionalIdName = {
    id: 2,
    name: "optional name"
};
;
;
function checkIntefrace(obj) {
    if ('id' in obj) {
        console.log(obj.name);
    }
    else if ('value' in obj) {
        console.log(obj.desc);
    }
}
checkIntefrace({
    id: 1,
    name: "nameValue"
});
checkIntefrace({
    desc: "description",
    value: 2
});
function getProperty(key, value) {
    console.log(`${key} = ${value[key]}`);
}
getProperty("id", { id: 1, name: "firstName" });
getProperty("name", { id: 2, name: "secondName" });
//    getProperty("telephone",
//     { id: 3, name: "thirdName" }
//    ); this will fail since telephone is not a key in our PersonPropertyName
//not sure whats this for importnat to rember that keyof takes the keys of an object prop(all of them)
//Classes
class SimpleClass {
    print() {
        console.log(`SimpleClass.print() called ${this.id}.`); //using this to specify that we call the id that belongs in the class
    }
}
let mySimpleClass = new SimpleClass();
mySimpleClass.print();
let newClass = new SimpleClass();
newClass.id = 5;
newClass.print();
//Implementing interfaces
class ClassA {
    print() {
        console.log(`ClassA.print() called.`);
    }
    ;
}
class ClassB {
    print() {
        console.log(`ClassB.print() called.`);
    }
    ;
}
;
function Printing(a) {
    a.print();
}
let classA = new ClassA();
let classB = new ClassB();
classB.print();
Printing(classA);
Printing(classB);
class ClassC {
    print() {
        console.log(`ClassC.print() called.`);
    }
    ;
}
let classC = new ClassC();
Printing(classC);
//Importnat note type script can see that if a class has the fucntion (same naming) it wont matter if the class has the Intefrace or not 
//ClassC has print as a prop so it can run the following code 
//Class constructors
class ClassWithConstructor {
    constructor(_id) {
        this.id = _id;
    }
}
let classWithConstructor = new ClassWithConstructor(10);
console.log(`classWithConstructor =
 ${JSON.stringify(classWithConstructor)}`);
//note that when using a contructor we don t have to use in this case id: number:undefined since with the constructor value is always asured
//Class modifiers
class ClassWithPublicProperty {
}
let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;
//simple modifier public leaves the prop available to everyone
class ClassWithPrivateProperty {
    constructor(id) {
        this.id = id;
    }
}
let privateAccess = new ClassWithPrivateProperty(10);
//    privateAccess.id = 20; since the id is private it cannot be accessed outside of the class 
//Constructor parameter properties
class ClassWithCtorMods {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let myClassMod = new ClassWithCtorMods(1, "test");
console.log(`myClassMod.id = ${myClassMod.id}`);
//    console.log(`myClassMod.name = ${myClassMod.name}`); again throws an error because we try to use a prop thats private
//this is a neat little shorthand writting using modifiers in a constructor will auto write the props 
//Readonly
class ClassWithReadonly {
    constructor(_name) {
        this.name = _name;
    }
}
//Get and set
class WithGetAndSet {
    constructor() {
        this._id = 0;
        //note make sure the prop id and the get and seters have different names example private prop _id; get and set = id 
        //And make sure to retun the private field prop in mind   
    }
    get id() {
        console.log(`getting id ${this._id}`);
        return this._id; //this needs to point out to private _id
    }
    set id(value) {
        console.log(`Setting the id prop`);
        this._id = value; //this needs to point out to private _id
    }
}
let classWithAccessors = new WithGetAndSet();
classWithAccessors.id = 10;
console.log(`classWithAccessors.id = ${classWithAccessors.id}`);
//Static functions
class StaticProperty {
    updateCount() {
        StaticProperty.count++;
    }
}
StaticProperty.count = 0;
let firstInstance = new StaticProperty();
let secondInstance = new StaticProperty();
firstInstance.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);
secondInstance.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);
//
//Namespaces
var FirstNameSpace;
(function (FirstNameSpace) {
    class NameSpaceClass {
    }
    FirstNameSpace.NameSpaceClass = NameSpaceClass;
    class NotExported {
    }
})(FirstNameSpace || (FirstNameSpace = {}));
let nameSpaceClass = new FirstNameSpace.NameSpaceClass();
class IdNameClass {
    constructor() {
        this.id = 0;
        this.name = "nameString";
    }
}
let multipleObject = {
    id: 1,
    name: "myName",
    description: "myDescription"
};
//Class inheritance
class BaseClass {
    constructor() {
        this.id = 0;
    }
}
class DerivedFromBaseClass extends BaseClass {
    constructor() {
        super(...arguments);
        this.name = "nameString";
    }
}
//just like Interface Class can also inherit or extend other classes 
//The super function
class BaseClassWithCtor {
    constructor(int) {
        this.int = int;
    }
}
class ExtendedBaseClass extends BaseClassWithCtor {
    constructor(int, name) {
        super(int); //Important when inheriting a class that has a constructor we need to use its props and use the function super(name of the prop)
        this.name = name;
    }
}
//aslo super function must be called before assigning values to the class's own props
//Function overriding
class BaseClassWithFn {
    print(text) {
        console.log(`BaseClassWithFn.print() : ${text}`);
    }
}
class DerivedClassFnOverride extends BaseClassWithFn {
    print(text) {
        console.log(`DerivedClassFnOverride.print(${text})`);
    }
}
let derivedClassFnOverride = new DerivedClassFnOverride();
derivedClassFnOverride.print("test");
//this child will override the base function when called from it 
class DerivedClassFnCallthrough extends BaseClassWithFn {
    print(text) {
        super.print(`from DerivedClassFncallthrough : ${text}`);
    }
}
//better way of writing it would be 
class DerivedClassFnCallthrough2 extends BaseClassWithFn {
    print(text) {
        const formattedText = `from DerivedClassFncallthrough : ${text}`;
        super.print(formattedText);
    }
}
let derivedCallthrough = new DerivedClassFnCallthrough();
derivedCallthrough.print("text");
//order of operation text gets send to the class print and from there the result gets send to the base class to finish the function
//In a way this isnt just calling the base function but extending it 
//Protected
class BaseClassProtected {
    constructor(id) {
        this.name = "";
        this.id = id;
    }
}
class AccessProtected extends BaseClassProtected {
    constructor(id) {
        super(id);
        console.log(`base.id = ${this.id}`); // since the prop is protected every child can access it 
        // console.log(`base.name = ${this.name}`) this is an error since this prop is private
    }
}
let accessProtected = new AccessProtected(1);
// accessProtected.id = 1;// this will throw an error since protected props can only accessed inside the base class an its children
// accessProtected.name = "test";This throws an error since we try to use a private prop 
//Abstract classes
class EmployeeBase {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class OfficeWorker extends EmployeeBase {
    doWork() {
        console.log(`${this.name} : doing work`);
    }
}
class OfficeManager extends OfficeWorker {
    constructor() {
        super(...arguments);
        this.employees = [];
    }
    manageEmployees() {
        super.doWork(); //since officemanager gets this method from OfficeWorker it will execute its function
        for (let employee of this.employees) {
            employee.doWork();
        }
    }
}
let joeBlogg = new OfficeWorker(1, "Joe");
let jillBlogg = new OfficeWorker(2, "Jill");
let jackManager = new OfficeManager(3, "Jack");
jackManager.employees.push(joeBlogg);
jackManager.employees.push(jillBlogg);
jackManager.manageEmployees();
//Abstract classes are classes build to extend others 
//Abstract class methods
//instanceof
class A {
}
class BfromA extends A {
}
class CfromA extends A {
}
class DfromC extends CfromA {
}
console.log(`A instance of A : ${new A() instanceof A}`);
console.log(`BFromA instance of A : ${new BfromA() instanceof A}`);
console.log(`BfromA instance of BfromA : ${new BfromA() instanceof BfromA}`);
console.log(`CfromA instance of BfromA : ${new CfromA instanceof BfromA}`);
console.log(`DfromC instance of CfromA : ${new DfromC() instanceof CfromA}`);
console.log(`DfromC instance of A :${new DfromC() instanceof A}`);
//when working with lots of classes that inherit something it good to check whether a class has an instance of a class
//key word instanceof returns a boolean wether the statment is true or not
//Interfaces extending classes
class BaseInterfaceClass {
    constructor() {
        this.id = 0;
    }
    print() {
        console.log(`this.id = ${this.id}`);
    }
}
class ImplementsExt extends BaseInterfaceClass {
    setId(id) {
        this.id = id;
    }
}
//Exporting modules
class Module1 {
    print() {
        localPrint(`Module1.print() called`);
    }
}
exports.Module1 = Module1;
function localPrint(text) {
    console.log(`localPrint: ${text}`);
}
//modules are small amount of code made to be exported or imported to outside sources
//NOTE function localPrint is not exported but its encapsulated so it can be used upon calling from an outside source
//Exporting to module_main.ts
//Generics and Advanced Type Inference chapter 4
function printGeneric(value) {
    console.log(`the type of value is : ${typeof value}`);
    console.log(`value === ${value}`);
}
printGeneric(1);
printGeneric("test");
printGeneric(true);
printGeneric(() => { });
printGeneric({ id: 1 });
//Generic can take all kinds of values from number,string,boolean,function,classes
printGeneric("string printing"); //this makes a specific request to generic that it will use a string 
// printGeneric<string>(2); Here by specifing string and giving a number generic is working and will trow an error
//Multiple generic types
function multipleGenericParams(param1, param2) {
}
multipleGenericParams(1, "test");
multipleGenericParams(1, "test");
multipleGenericParams(true, false);
multipleGenericParams("first", "second");
//Allows for multiple params to be generic leading to all sorts of combinations
//Constraining the type of T
class Concatenator {
    concatenateArray(items) {
        let returnString = "";
        for (let i = 0; i < items.length; i++) {
            returnString += i > 0 ? "," : "";
            returnString += items[i].toString();
        }
        return returnString;
    }
}
//using this complex syntax ClassName<T extends data type | data type> this allows for the class to work with specific data types 
//in the concatenateArrayFn(Items: T) T references the class T so only the specified data type will work this ensured typesafety 
let concator = new Concatenator();
let concatResult = concator.concatenateArray([
    "first", "second", "third"
]);
console.log(`concatResult = ${concatResult}`);
concatResult = concator.concatenateArray([
    1000, 2000, 3000
]);
console.log(`concatResult = ${concatResult}`);
function useT(item) {
    item.print();
    //    item.id = 1; // error : id is not common
    //    item.name = "test"; // error : name is not common
}
//this fails because if we work with IprintId it wont have name ,a nd if we work with PrintName it wont have id
//Generic constraints
function objectKey(obj, key) {
    let keyValue = obj[key];
    console.log(`object has ${key.toString()} with a value of ${keyValue}`);
}
//We name a function set it to accept Generic <T> and Generic <K> that takes the keyof the T 
//we then take the value of the key with a variable let keyVlaue = object[key];
//NOTE Extends key word makes it so that generic can work only with specific data type
let obj1 = {
    id: 1,
    name: "myName",
    print() { console.log(`${this.id}`); }
};
objectKey(obj1, "id");
objectKey(obj1, "name");
//    objectKey(obj1, "surname"); Surname is not a key in obj1
objectKey(obj1, "print"); //Interesting this works with functions as well 
class LogClass {
    logToConsole(iPrintObj) {
        iPrintObj.print();
    }
}
let printObject = {
    print() { console.log(`printObject.print() called`); }
};
//interesting way to write the fucntion of an interface 
let logClass = new LogClass();
logClass.logToConsole(printObject);
//THIS IS A BIT COMPLEX
//Creating new objects within generics
class Class1 {
}
class Class2 {
}
function createClassInstance(arg1) {
    return new arg1(); // error : see below
}
let classAInstance = createClassInstance(ClassA);
let ab = {
    a: 1,
    b: "test"
};
let allOptional = {};
let readOnlyVar = {
    a: 1,
    b: "test"
};
let pickAbObject = {
    a: 1,
    b: "test"
};
let recordVariable = {
    a: 5,
    b: 33
};
//this is a custom type that accepts a generic then it will check if its a number if its not it will return string
function loginNumberOrString(input) {
    console.log(`Log number or string : ${input}`);
}
loginNumberOrString(1);
loginNumberOrString("test");
// loginNumberOrString<boolean>(true); 
//Function is a good way of making use for our custom generic type 
loginNumberOrString("Test");
function ReturnGenericChaninig(input) {
    let context = [...input];
    let stringToReturn = "";
    for (let item in context) {
        stringToReturn += context[item];
    }
    return stringToReturn;
}
let keyA = ReturnGenericChaninig([1]);
console.log(`keyA = ${keyA}`);
let keyAb = ReturnGenericChaninig([1, "test"]);
console.log(`keyAb = ${keyAb}`);
let keyAbc = ReturnGenericChaninig([1, "test", true]);
console.log(`keyAbc = ${keyAbc}`);
function compareValues(input, compareTo) {
    // do comparison
}
compareValues(new Date(), new Date());
compareValues(1, new Date());
compareValues(1, 2);
compareValues("test", new Date());
compareValues("test", 1);
compareValues("test", "test");
function testInferFromPropertyType(arg) { }
testInferFromPropertyType("test");
testInferFromPropertyType(1);
//# sourceMappingURL=Chapter3_4.js.map