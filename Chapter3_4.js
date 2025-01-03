"use strict";
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
//# sourceMappingURL=Chapter3_4.js.map