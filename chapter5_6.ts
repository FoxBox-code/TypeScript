// import { setTimeout } from "timers";
// function delayedResponseWithCallback(callback: () => void) {
//     function executeAfterTimeout() {
//     console.log(`5. executeAfterTimeout()`);
//     callback();
//     }
//     console.log(`2. calling setTimeout`)
//     setTimeout(executeAfterTimeout, 1000);
//     console.log(`3. after calling setTimeout`)
//    }

// //

// function callDelayedAndWait() {
//     function afterWait() {
//     console.log(`6. afterWait()`);
//     }
//     console.log(`1. calling delayedResponseWithCallback`);
//     delayedResponseWithCallback(afterWait);
//     console.log(`4. after calling delayedResponseWithCallback`)
//    }
//    callDelayedAndWait();
//    //run down of how i see it
//    //first we call callDelayedAndWait this logs step 1 then it calls Fn delayedResponseWithCallback with params Fn afterWait
//    //this goes to delayedResponseWithCallback which now has a reference for the afterWait function but its not ran instantly it just a callback
//    //we log step 2 then a setTimeout is called a function that will execute fn ExecuteAfter timeout in total of 1000ms = 1s so the program continues
//    //it will log step 3 and be done with delayedResponseWithCallback it returns to callDelayed and logs step 4 after the 1 sec wait is over the programs uses the function
//    //ExecuteAfterTimeOut and logs step 5 and uses the callback the reference that we placed to our AfterWait function and its finally called

//    //

// //Promises
// import * as fs from "fs";
// import { log } from "console";
// // import { setTimeout } from "timers/promises";

// fs.promises.readFile("./test1.txt")
//  .then((value) =>
//     {
//  console.log(`ps test1.txt read : ${value}`);
//  return fs.promises.readFile("./test2.txt");
//     }).then((value) => {
//  console.log(`ps test2.txt read : ${value}`);
//  return fs.promises.readFile("./test3.txt");
//  }).then((value) => {
//  console.log(`ps test3.txt read : ${value}`);
//  })
//  .catch((error) => {
//  console.log(`an error occurred : ${error}`);
//  });

//  //Promise syntax

// //  function fnDelayedPromise(resolve : () => void, reject : () => void){
// //     function AfterTimeout(){
// //         resolve();
// //     }
// //     setTimeout(AfterTimeout, 1000);
// //  }
// //  function delayedPromise(): Promise<void> {
// //     // return new Promise object
// //     return new Promise<void>
// //     ( // start constructor
// //     (
// //     resolve: () => void, // resolve function
// //     reject: () => void // reject function
// //     ) => {
// //     // start of function definition
// //     function afterTimeout() {
// //     resolve();
// //     }
// //     setTimeout(afterTimeout, 1000);
// //     // end of function definition
// //     }
// //     ); // end constructor
// //    }
// ///////
// function fnDelayedPromise(
//     resolve: () => void,
//     reject: () => void) {
//     function afterTimeout() : void {
//         resolve();
//     }
//     setTimeout(() => resolve(), 1000);
// }

// function delayedResponsePromise(): Promise<void> {
//     return new Promise<void>(fnDelayedPromise);
// }

// function delayedPromise(): Promise<void> {
//     // return new Promise object
//     return new Promise<void>
//         ( // start constructor
//             (
//                 resolve: () => void, // resolve function
//                 reject: () => void   // reject function
//             ) => {
//                 // start of function definition
//                 function afterTimeout() :void {
//                     resolve();
//                 }
//                 setTimeout(afterTimeout, 1000);
//                 // end of function definition
//             }
//         ); // end constructor
// }

// delayedPromise().then(() => {
//     console.log(`delayed promise returned`);
// }).catch(() => {
//     console.log(`an error occurred`);
// })

//Async and await
//Await syntax
// async function callDelayedPromise() {
//     try {
//     console.log(`1. before calling delayedPromise`);
//     await delayedPromise();}
//     catch(error) {
//         console.log(`3. after calling delayedPromise`)
//     }
// }

//    callDelayedPromise();
// console.log(Hello World);
//Going over how this works we mark a function with an async till runs like a normal function until it hits the await now the async function stops and waits for promise ,
//while it waits it returns to the main code and prints Hello World after the promise is returned when that happens the async function continues and logs step 3 .

//Await errors
//its a good practise to use try catch in the async thread in case the promise returns a faulty data

//Await values
// async function getValuesFromPromise() {
//     let values = await promiseWithValues();
//     for (let value of values) {
//     console.log(`value : ${value}`)
//     }
//    }
//    getValuesFromPromise();
//Here we use promise to return data for us and asing it to variable

//Decorator syntax
function simpleDecorator(constuctor: Function)
{
    console.log(`Implementing simpleDecorator`);
}

@simpleDecorator
@secondDecorator
class ClassWithSimpleDecorator { }
//Decorators are function that we can implement in classes as of now if we run this code even if we don t have an instance of the class with the decorator
//We can see that the decorator function has been called

let instance_1 = new ClassWithSimpleDecorator();
let instance_2 = new ClassWithSimpleDecorator();
console.log(`instance_1 : ${JSON.stringify(instance_1)}`);
console.log(`instance_2 : ${JSON.stringify(instance_2)}`);
//we can see that the decorator only gets called for the defenition of the class and not its instances

//Multiple decorators
function secondDecorator(constuctor: Function)
{
    console.log("secondDecorator called");
}
//strange when running the code after adding the second decorator the console prints it out first
//Decorators seem to called out in reverse order

//Types of decorators
//Decorators can be applied to class defentions , props , meothods and parameters
function classDecorator(constructor: Function) { }
function propertyDecorator(target: any, propertyKey: string) { }
function methodDecorator(
    target: any,
    methodName: string,
    descriptor?: PropertyDescriptor
) { }
function parameterDecorator(
    target: any,
    methodName: string,
    parameterIndex: number
) { }

@classDecorator
class ClassWithAllKindsOfDecorators
{
    @propertyDecorator
    id: number = 0;

    @methodDecorator
    print() { }
    setId(@parameterDecorator id: number) { }
}

//Decorator factories
function decoratorFactory(name: string)
{
    return (constructor: Function) =>
        console.log(`decorator function called with ${name}`);
}
//A decorator that accepts param

@decoratorFactory("testName")
class decoratorWithFactory { }

//Class decorators
function classConstructorDec(constructor: Function)
{
    console.log(`constructor : ${constructor}`);
    constructor.prototype.testProperty = "testProperty_value";
}
@classConstructorDec
class ClassWithConstructor
{
    constructor(id: number) { }
}

let classInstance = new ClassWithConstructor(1); //all instances of classConstuctor inherit the prototype variable
console.log(`classInstance.testProperty =
    ${(<any>classInstance).testProperty}`);

//Property decorators
function propertyDec(target: any, propertyName: string)
{
    if (typeof target === "function")
    {
        console.log(`class name ${target.name}`);
    } else
    {
        console.log(`class name ${target.constructor.name}`);
    }

    console.log(`the property name ${propertyName}`);
}
class ClassWithPropertyDec
{
    @propertyDec
    nameProperty: string | undefined;
}
//it seem decorators are useful for storing metadata about our classes and their props

//Static property decorators
class StaticClassWithPropertyDec
{
    @propertyDec
    static staticProperty: string;
}

//Method decorators
function methodDec(target: any, methodName: string, desc?: PropertyDescriptor)
{
    console.log(`target: ${target}`);
    console.log(`methodName : ${methodName}`);
    console.log(`descriptor : ${JSON.stringify(desc)}`);
    console.log(`target[methodName] : ${target[methodName]}`);
}
class ClassWithMethodDec
{
    @methodDec
    print(output: string)
    {
        console.log(`ClassWithMethodDec.print` + `(${output}) called.`);
    }
}
//Note methods can be controlled trough the decorators changing behaviours like choosing wheter to be readolny or mutable/writable
//Using method decorators
function auditLogDec(
    target: any,
    methodName: string,
    descriptor?: PropertyDescriptor
)
{
    let originalFunction = target[methodName];
    let auditFunction = function (this: any)
    {
        console.log(`1. auditLogDec : overide of ` + ` ${methodName} called`);
        for (let i = 0; i < arguments.length; i++)
        {
            console.log(`2. arg : ${i} = ${arguments[i]}`);
        }
        originalFunction.apply(this, arguments);
    };
    target[methodName] = auditFunction;
    return target;
}

class ClassWithAuditDec
{
    @auditLogDec
    print(arg1: string, arg2: string)
    {
        console.log(`3. ClassWithMethodDec.print`
            + `(${arg1}, ${arg2}) called.`);
    }
}
let auditClass = new ClassWithAuditDec();
auditClass.print("test1", "test2");
//here the decorator adds aditinal information to the method

//Parameter decorators
function parameterDec(target: any, methodName: string, parameterIndex: number)
{
    console.log(`target: ${target}`);
    console.log(`methodName : ${methodName}`);
    console.log(`parameterIndex : ${parameterIndex}`);
}

class ClassWithParamDec
{
    print(@parameterDec value: string)
    {
    }
}

//Decorator metadata
function metadataParameterDec(
    target: any,
    methodName: string,
    parameterIndex: number
) { }
class ClassWithMetadata
{
    print(
        @metadataParameterDec id: number, name: string
    ) { }
}

//Using decorator metadata
import 'reflect-metadata';

function reflectParameterDec(target: any,
    methodName: string,
    parameterIndex: number)
{
    let designType = Reflect.getMetadata("design:type", target, methodName);//This returns the type in this case function
    console.log(`design type: ${designType.name}`)

    let designParamTypes = Reflect.getMetadata("design:paramtypes", target, methodName);//this returns an array of parameters
    for (let paramType of designParamTypes)
    {
        console.log(`param type : ${paramType.name}`);
    }
    let designReturnType = Reflect.getMetadata(
        "design:returntype", target, methodName);//this returns the return type of the function
    console.log(`return types : ${designReturnType.name}`);
}
class ClassWithReflectMetaData
{
    print(
        @reflectParameterDec
        id: number,
        name: string
    ): number
    {
        return 1000;
    }
}
//Note docorators meta data are used in class, props , methods/functinons and params.