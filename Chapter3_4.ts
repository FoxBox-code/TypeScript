interface IIdName
{
    id: number;
    name: string;
}

let idObject: IIdName = {
    id: 2,
    name: "this is a name"
}
//Simple Interface. Interface's every prop must be in the inheriter 
//Optional properties
interface IOptional
{
    id: number;
    name?: string;
}
let optionalId: IOptional = {
    id: 1
}
let optionalIdName: IOptional = {
    id: 2,
    name: "optional name"
}
//Optinal props just like in functions and classes 
//The in operator
interface IIdName
{
    id: number,
    name: string
};
interface IDescValue
{
    value: number,
    desc: string
};

function checkIntefrace(obj: IIdName | IDescValue): void
{
    if ('id' in obj)
    {
        console.log(obj.name);
    }
    else if ('value' in obj)
    {
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
//Here we make two interfaces pass it to a function and the function checks what the obj contains 
//using key of word
interface IPerson
{
    id: number;
    name: string;
}
type PersonPropertyName = keyof IPerson;// assings id|name to the type

function getProperty(key: PersonPropertyName, value: IPerson)
{
    console.log(`${key} = ${value[key]}`);
}
getProperty("id",
    { id: 1, name: "firstName" }
);
getProperty("name",
    { id: 2, name: "secondName" }
);
//    getProperty("telephone",
//     { id: 3, name: "thirdName" }
//    ); this will fail since telephone is not a key in our PersonPropertyName
//not sure whats this for importnat to rember that keyof takes the keys of an object prop(all of them)

//Classes
class SimpleClass
{
    id: number | undefined;
    print(): void
    {
        console.log(`SimpleClass.print() called ${this.id}.`);//using this to specify that we call the id that belongs in the class
    }
}
let mySimpleClass = new SimpleClass();
mySimpleClass.print();
let newClass = new SimpleClass();
newClass.id = 5;
newClass.print();

//Implementing interfaces
class ClassA implements IPrint
{
    print(): void
    {
        console.log(`ClassA.print() called.`)
    };
}
class ClassB implements IPrint
{
    print(): void
    {
        console.log(`ClassB.print() called.`)
    };
}
//here we make two classes and to call the function we need to make an instance of the specific class and from there call the function
//Its better to have them both inherit an Intefrace if they posses similar data
interface IPrint
{
    print(): void
};
function Printing(a: IPrint)
{
    a.print();
}
let classA = new ClassA();
let classB = new ClassB();
classB.print();
Printing(classA);
Printing(classB);
class ClassC
{
    print(): void
    {
        console.log(`ClassC.print() called.`)
    };
}
let classC = new ClassC();
Printing(classC);
//Importnat note type script can see that if a class has the fucntion (same naming) it wont matter if the class has the Intefrace or not 
//ClassC has print as a prop so it can run the following code 

//Class constructors
class ClassWithConstructor
{
    id: number;
    constructor(_id: number)
    {
        this.id = _id;
    }
}
let classWithConstructor = new ClassWithConstructor(10);
console.log(`classWithConstructor =
 ${JSON.stringify(classWithConstructor)}`);
//note that when using a contructor we don t have to use in this case id: number:undefined since with the constructor value is always asured

//Class modifiers
class ClassWithPublicProperty
{
    public id: number | undefined;
}
let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;
//simple modifier public leaves the prop available to everyone
class ClassWithPrivateProperty
{
    private id: number;
    constructor(id: number)
    {
        this.id = id;
    }
}
let privateAccess = new ClassWithPrivateProperty(10);
//    privateAccess.id = 20; since the id is private it cannot be accessed outside of the class 

//Constructor parameter properties
class ClassWithCtorMods
{
    constructor(public id: number, private name: string)
    {
    }
}
let myClassMod = new ClassWithCtorMods(1, "test");
console.log(`myClassMod.id = ${myClassMod.id}`);
//    console.log(`myClassMod.name = ${myClassMod.name}`); again throws an error because we try to use a prop thats private
//this is a neat little shorthand writting using modifiers in a constructor will auto write the props 

//Readonly
class ClassWithReadonly
{
    readonly name: string;
    constructor(_name: string)
    {
        this.name = _name;
    }
    // setNameValue(_name: string) {
    // this.name = _name;
    // } read only is only to be set once and thats during the constuctor 
}

//Get and set
class WithGetAndSet
{
    private _id: number = 0;
    get id(): number
    {
        console.log(`getting id ${this._id}`);
        return this._id;//this needs to point out to private _id
    }
    set id(value: number)
    {
        console.log(`Setting the id prop`);
        this._id = value;//this needs to point out to private _id
    }
    //note make sure the prop id and the get and seters have different names example private prop _id; get and set = id 
    //And make sure to retun the private field prop in mind   
}
let classWithAccessors = new WithGetAndSet();
classWithAccessors.id = 10;
console.log(`classWithAccessors.id = ${classWithAccessors.id}`);

//Static functions
class StaticProperty
{
    static count = 0;
    updateCount()
    {
        StaticProperty.count++;
    }
}
let firstInstance = new StaticProperty();
let secondInstance = new StaticProperty();
firstInstance.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);
secondInstance.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);
//

//Namespaces
namespace FirstNameSpace
{
    export class NameSpaceClass { }
    class NotExported { }
}
let nameSpaceClass = new FirstNameSpace.NameSpaceClass();
// let notExported = new FirstNameSpace.NotExported(); throws an error since this is not inherited from FirstNameSPcae

//Inheritance
//Interface inheritance
interface IBase
{
    id: number;
}
interface IDerivedFromBase extends IBase
{
    name: string;
}
class IdNameClass implements IDerivedFromBase
{
    id: number = 0;
    name: string = "nameString";
}
interface IBaseStringOrNumber
{
    id: string | number;
}
interface IDerivedFromBaseNumber
    extends IBaseStringOrNumber
{
    id: number;
}
//this will override the id of base classs to the new IDerived meaning id will only work with number
interface IMultiple extends
    IDerivedFromBase,
    IDerivedFromBaseNumber
{
    description: string;
}
let multipleObject: IMultiple = {
    id: 1,
    name: "myName",
    description: "myDescription"
};

//Class inheritance
class BaseClass implements IBase
{
    id: number = 0;
}
class DerivedFromBaseClass
    extends BaseClass
    implements IDerivedFromBase
{
    name: string = "nameString";
}
//just like Interface Class can also inherit or extend other classes 

//The super function
class BaseClassWithCtor
{
    private int: number;
    constructor(int: number)
    {
        this.int = int;
    }
}
class ExtendedBaseClass extends BaseClassWithCtor
{
    private name: string;
    constructor(int: number, name: string)
    {
        super(int);//Important when inheriting a class that has a constructor we need to use its props and use the function super(name of the prop)
        this.name = name;
    }
}
//aslo super function must be called before assigning values to the class's own props

//Function overriding
class BaseClassWithFn
{
    print(text: string)
    {
        console.log(`BaseClassWithFn.print() : ${text}`)
    }
}
class DerivedClassFnOverride extends
    BaseClassWithFn
{
    print(text: string)
    {
        console.log(`DerivedClassFnOverride.print(${text})`);
    }
}
let derivedClassFnOverride = new DerivedClassFnOverride();
derivedClassFnOverride.print("test");
//this child will override the base function when called from it 
class DerivedClassFnCallthrough extends BaseClassWithFn
{
    print(text: string): void
    {
        super.print(`from DerivedClassFncallthrough : ${text}`);
    }
}
//better way of writing it would be 
class DerivedClassFnCallthrough2 extends BaseClassWithFn
{
    print(text: string): void
    {
        const formattedText = `from DerivedClassFncallthrough : ${text}`;
        super.print(formattedText);
    }
}
let derivedCallthrough = new DerivedClassFnCallthrough();
derivedCallthrough.print("text");
//order of operation text gets send to the class print and from there the result gets send to the base class to finish the function
//In a way this isnt just calling the base function but extending it 

//Protected
class BaseClassProtected
{
    protected id: number;
    private name: string = "";
    constructor(id: number)
    {
        this.id = id;
    }
}
class AccessProtected extends BaseClassProtected
{
    constructor(id: number)
    {
        super(id);
        console.log(`base.id = ${this.id}`);// since the prop is protected every child can access it 
        // console.log(`base.name = ${this.name}`) this is an error since this prop is private
    }
}
let accessProtected = new AccessProtected(1);
// accessProtected.id = 1;// this will throw an error since protected props can only accessed inside the base class an its children
// accessProtected.name = "test";This throws an error since we try to use a private prop 

//Abstract classes
abstract class EmployeeBase
{
    public id: number;
    public name: string;
    constructor(id: number, name: string)
    {
        this.id = id;
        this.name = name;
    }
    abstract doWork(): void;
}
class OfficeWorker extends EmployeeBase
{
    doWork(): void
    {
        console.log(`${this.name} : doing work`);
    }
}
class OfficeManager extends OfficeWorker
{
    public employees: OfficeWorker[] = [];
    manageEmployees() 
    {
        super.doWork();//since officemanager gets this method from OfficeWorker it will execute its function
        for (let employee of this.employees)
        {
            employee.doWork();
        }
    }
}
let joeBlogg = new OfficeWorker(1, "Joe");
let jillBlogg = new OfficeWorker(2, "Jill")
let jackManager = new OfficeManager(3, "Jack");

jackManager.employees.push(joeBlogg);
jackManager.employees.push(jillBlogg);
jackManager.manageEmployees();
//Abstract classes are classes build to extend others 
//Abstract class methods

//instanceof
class A { }
class BfromA extends A { }
class CfromA extends A { }
class DfromC extends CfromA { }

console.log(`A instance of A : ${new A() instanceof A}`);
console.log(`BFromA instance of A : ${new BfromA() instanceof A}`);
console.log(`BfromA instance of BfromA : ${new BfromA() instanceof BfromA}`);
console.log(`CfromA instance of BfromA : ${new CfromA instanceof BfromA}`);
console.log(`DfromC instance of CfromA : ${new DfromC() instanceof CfromA}`);
console.log(`DfromC instance of A :${new DfromC() instanceof A}`);
//when working with lots of classes that inherit something it good to check whether a class has an instance of a class
//key word instanceof returns a boolean wether the statment is true or not

//Interfaces extending classes
class BaseInterfaceClass
{
    id: number = 0;
    print()
    {
        console.log(`this.id = ${this.id}`);
    }
}
interface IBaseInterfaceClassExt
    extends BaseInterfaceClass
{
    setId(id: number): void;
}
class ImplementsExt extends BaseInterfaceClass
    implements IBaseInterfaceClassExt
{
    setId(id: number): void
    {
        this.id = id;
    }
}

//Exporting modules
export class Module1
{
    print(): void
    {
        localPrint(`Module1.print() called`);
    }
}
function localPrint(text: string)
{
    console.log(`localPrint: ${text}`);
}
//modules are small amount of code made to be exported or imported to outside sources
//NOTE function localPrint is not exported but its encapsulated so it can be used upon calling from an outside source
//Exporting to module_main.ts

//Generics and Advanced Type Inference chapter 4

function printGeneric<T>(value: T): void
{
    console.log(`the type of value is : ${typeof value}`);
    console.log(`value === ${value}`);


}
printGeneric(1);
printGeneric("test");
printGeneric(true);
printGeneric(() => { });
printGeneric({ id: 1 });
//Generic can take all kinds of values from number,string,boolean,function,classes
printGeneric<string>("string printing");//this makes a specific request to generic that it will use a string 
// printGeneric<string>(2); Here by specifing string and giving a number generic is working and will trow an error

//Multiple generic types
function multipleGenericParams<A, B>(param1: A, param2: B)
{

}
multipleGenericParams<number, string>(1, "test");
multipleGenericParams(1, "test");
multipleGenericParams<boolean, boolean>(true, false);
multipleGenericParams("first", "second");
//Allows for multiple params to be generic leading to all sorts of combinations

//Constraining the type of T
class Concatenator<T extends string[] | number[]>
{
    public concatenateArray(items: T): string
    {
        let returnString = "";
        for (let i = 0; i < items.length; i++)
        {
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
//    concatResult = concator.concatenateArray([
//     true, false, true
//    ]); This will fail because it not in the specified data type 

//Using the type T
interface IPrintId
{
    id: number;
    print(): void;
}
interface IPrintName
{
    name: string;
    print(): void;
}
function useT<T extends IPrintId | IPrintName>(item: T)
    : void
{
    item.print();
    //    item.id = 1; // error : id is not common
    //    item.name = "test"; // error : name is not common
}
//this fails because if we work with IprintId it wont have name ,a nd if we work with PrintName it wont have id

//Generic constraints
function objectKey<T extends object, K extends keyof T>(obj: T, key: K): void
{
    let keyValue = obj[key];

    console.log(`object has ${key.toString()} with a value of ${keyValue}`);

}
//We name a function set it to accept Generic <T> and Generic <K> that takes the keyof the T 
//we then take the value of the key with a variable let keyVlaue = object[key];
//NOTE Extends key word makes it so that generic can work only with specific data type
let obj1 = {
    id: 1,
    name: "myName",
    print() { console.log(`${this.id}`) }
}
objectKey(obj1, "id");
objectKey(obj1, "name");
//    objectKey(obj1, "surname"); Surname is not a key in obj1
objectKey(obj1, "print");//Interesting this works with functions as well 
//fucntions are a prop to a class an can be called like that resulting in print() { console.log(`${this.id}`) }

//Generic interfaces
interface IPrint
{
    print(): void;
}
interface ILogInterface<T extends IPrint>
{
    logToConsole(iPrintObj: T): void;
}
class LogClass<T extends IPrint>
    implements ILogInterface<T>
{
    logToConsole(iPrintObj: T): void
    {
        iPrintObj.print();
    }
}
let printObject: IPrint = {
    print() { console.log(`printObject.print() called`) }
}
//interesting way to write the fucntion of an interface 
let logClass = new LogClass();
logClass.logToConsole(printObject);
//THIS IS A BIT COMPLEX

//Creating new objects within generics
class Class1 { }
class Class2 { }
function createClassInstance<T>(arg1: { new(): T }): T
{

    return new arg1(); // error : see below
}
let classAInstance = createClassInstance(ClassA);
//Here we create any type of object using Generic in order for this to work we need
//function to accept generic <T> and in the parameters to specify that the generic will be of new construct type using the syntax (obj : {new() : T})
//and since we can have all type of object we need to return generic T as well 

//Advanced type inference
//Mapped types
interface IAbRequired
{
    a: number;
    b: string;
}
let ab: IAbRequired = {
    a: 1,
    b: "test"
}
type WeakInterface<T extends object> = {
    [K in keyof T]?: T[K];
}
let allOptional: WeakInterface<IAbRequired> = {}
//NO IDEA TBH
//original code doesnt use T extends object but I think its should 

//Partial, Readonly, Record, and Pick
/**
 * Make all properties in T optional
 */
type Partial<T> = {
    [P in keyof T]?: T[P];
};//This type we made WeakInterface is already build in TypeScript called type Partial

type Readonly<T extends object> = {
    readonly [K in keyof T]: T[K];
}
let readOnlyVar: Readonly<IAbRequired> = {
    a: 1,
    b: "test"
};
//    readOnlyVar.a = 5;//cannot assing value to readOnly
//this creates a readonly object 

interface IAbc
{
    a: number;
    b: string;
    c: boolean
}
type PickAb = Pick<IAbc, "a" | "b">;
let pickAbObject: PickAb = {
    a: 1,
    b: "test"
}
//Pick is a TypeScript class that allows us to select specific props we want to take from an object
//In this case we leave behind c: boolean 
type PickC = Pick<IAbc, "c">;//this will only pick prop c from IAbc interface

type RecordCd = Record<"a" | "b", number>
let recordVariable: RecordCd = {
    a: 5,
    b: 33
};
//Record is a class that can set properties and gives them all to one data type

//Conditional types
type NumberOrString<T> = T extends number ? number : string;
//this is a custom type that accepts a generic then it will check if its a number if its not it will return string
function loginNumberOrString<T>(input: NumberOrString<T>)
{
    console.log(`Log number or string : ${input}`);

}
loginNumberOrString<number>(1);
loginNumberOrString<string>("test");
// loginNumberOrString<boolean>(true); 
//Function is a good way of making use for our custom generic type 
loginNumberOrString<boolean>("Test");

//Conditional type chaining
interface IA
{
    a: number;
}
interface IAb
{
    a: number;
    b: string;
}
interface IAbc
{
    a: number;
    b: string;
    c: boolean;
}

type GenericChaining<T> =
    T extends IAbc ? [number, string, boolean] :
    T extends IAb ? [number, string] :
    T extends IA ? [number] : never;

function ReturnGenericChaninig<T>(input: GenericChaining<T>): string
{
    let context = [...input];
    let stringToReturn = "";

    for (let item in context)
    {
        stringToReturn += context[item];
    }

    return stringToReturn;
}
let keyA = ReturnGenericChaninig<IA>([1]);
console.log(`keyA = ${keyA}`);

let keyAb = ReturnGenericChaninig<IAb>([1, "test"]);
console.log(`keyAb = ${keyAb}`);
let keyAbc = ReturnGenericChaninig<IAbc>([1, "test", true]);
console.log(`keyAbc = ${keyAbc}`);

//Distributed conditional types
type dateOrNumberOrString<T> =
    T extends Date ? Date :
    T extends number ? Date | number :
    T extends string ? Date | number | string :
    never;

function compareValues<
    T extends string | number | Date | boolean
>(
    input: T, compareTo: dateOrNumberOrString<T>
)
{
    // do comparison
}

compareValues(new Date(), new Date());
compareValues(1, new Date());
compareValues(1, 2)
compareValues("test", new Date());
compareValues("test", 1);
compareValues("test", "test");

//Conditional type inference
type UsingInfer<T> = T extends { id: infer U } ? U : never;

function testInferFromPropertyType<T>
    (
        arg: UsingInfer<T>
    ) { }
testInferFromPropertyType<{ id: string }>("test");
testInferFromPropertyType<{ id: number }>(1);