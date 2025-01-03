interface IIdName {
    id: number;
    name: string;
   }

   let idObject: IIdName = {
    id: 2,
    name : "this is a name"
   }
//Simple Interface. Interface's every prop must be in the inheriter 
//Optional properties
interface IOptional {
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
interface IIdName{
    id : number,
    name : string
};
interface IDescValue{
    value : number,
    desc : string
};

function checkIntefrace(obj : IIdName | IDescValue) : void {
    if('id' in obj){
        console.log(obj.name);
    }
    else if('value' in obj){
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
interface IPerson {
    id: number;
    name: string;
   }
   type PersonPropertyName = keyof IPerson;// assings id|name to the type

   function getProperty(key: PersonPropertyName, value: IPerson) {
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
class SimpleClass {
    id: number | undefined;
    print(): void {
    console.log(`SimpleClass.print() called ${this.id}.`);//using this to specify that we call the id that belongs in the class
    }
   }
   let mySimpleClass = new SimpleClass();
   mySimpleClass.print();
   let newClass = new SimpleClass();
   newClass.id = 5;
   newClass.print();

//Implementing interfaces
class ClassA implements IPrint{
    print(): void {
    console.log(`ClassA.print() called.`)
    };
   }
   class ClassB implements IPrint {
    print(): void {
    console.log(`ClassB.print() called.`)
    };
   }
   //here we make two classes and to call the function we need to make an instance of the specific class and from there call the function
   //Its better to have them both inherit an Intefrace if they posses similar data
interface IPrint {
    print() : void
};
function Printing(a : IPrint){
    a.print();
}
let classA = new ClassA();
let classB = new ClassB();
classB.print();
Printing(classA);
Printing(classB);
class ClassC {
    print(): void {
    console.log(`ClassC.print() called.`)
    };
   }
   let classC = new ClassC();
Printing(classC);
//Importnat note type script can see that if a class has the fucntion (same naming) it wont matter if the class has the Intefrace or not 
//ClassC has print as a prop so it can run the following code 

//Class constructors
class ClassWithConstructor {
    id: number;
    constructor(_id: number) {
    this.id = _id;
    }
   }
   let classWithConstructor = new ClassWithConstructor(10);
    console.log(`classWithConstructor =
 ${JSON.stringify(classWithConstructor)}`);
 //note that when using a contructor we don t have to use in this case id: number:undefined since with the constructor value is always asured

 //Class modifiers
 class ClassWithPublicProperty {
    public id: number | undefined;
   }
   let publicAccess = new ClassWithPublicProperty();
   publicAccess.id = 10;
   //simple modifier public leaves the prop available to everyone
   class ClassWithPrivateProperty {
    private id: number;
    constructor(id: number) {
    this.id = id;
    }
   }
   let privateAccess = new ClassWithPrivateProperty(10);
//    privateAccess.id = 20; since the id is private it cannot be accessed outside of the class 

//Constructor parameter properties
class ClassWithCtorMods {
    constructor(public id: number, private name: string) {
    }
   }
   let myClassMod = new ClassWithCtorMods(1, "test");
   console.log(`myClassMod.id = ${myClassMod.id}`);
//    console.log(`myClassMod.name = ${myClassMod.name}`); again throws an error because we try to use a prop thats private
//this is a neat little shorthand writting using modifiers in a constructor will auto write the props 

//Readonly
class ClassWithReadonly {
    readonly name: string;
    constructor(_name: string) {
    this.name = _name;
    }
    // setNameValue(_name: string) {
    // this.name = _name;
    // } read only is only to be set once and thats during the constuctor 
   }

//Get and set
class WithGetAndSet{
    private _id : number = 0;
    get id() : number {
        console.log(`getting id ${this._id}`);
        return this._id;//this needs to point out to private _id
    }
    set id(value : number){
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
class StaticProperty {
    static count = 0;
    updateCount() {
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
namespace FirstNameSpace {
    export class NameSpaceClass {}
    class NotExported {}
   }
let nameSpaceClass = new FirstNameSpace.NameSpaceClass();
// let notExported = new FirstNameSpace.NotExported(); throws an error since this is not inherited from FirstNameSPcae

//Inheritance
//Interface inheritance
interface IBase {
    id: number;
   }
   interface IDerivedFromBase extends IBase {
    name: string;
   }
   class IdNameClass implements IDerivedFromBase {
    id : number = 0;
    name: string = "nameString";
   }
interface IBaseStringOrNumber {
id: string | number;
}
interface IDerivedFromBaseNumber
extends IBaseStringOrNumber {
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
class BaseClass implements IBase {
    id: number = 0;
   }
   class DerivedFromBaseClass
    extends BaseClass
    implements IDerivedFromBase
   {
    name: string = "nameString";
   }
   //just like Interface Class can also inherit or extend other classes 