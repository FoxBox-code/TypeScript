"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
//of is important function that  takes the values of the observable type
const emitter = (0, rxjs_1.of)(1, 2, 3, 4, 5);
emitter.subscribe((value) => {
    console.log(`value : ${value}`);
});
//In order to call the emmiter type we use the function subscribe this will take the value that of returns
//Note the observable emmits its data individualy first it will display 1 then 2 and etc like an array doing a for cycle
const emittArray = (0, rxjs_1.from)([1, 2, 3, 4, 5]);
emittArray.subscribe((value) => {
    console.log(`array values : ${value}`);
});
//here we use fucntion From which works with arrays creates an observable <nubmer>
//Differnece between of and from : of works with individual elements when we pass 1,2,3,4 thoes are 4 seperate integers that of organises one by one
//By working like that we can emmit the values separetly ,but if we pass an arry , an array is a one object that contains [1,2,3,4] of will treat it as an individual
//and emmit it upon subscribing as a one whole loging [1,2,3,4,5]. Thats were from comes it will take an object like array and organise it individually making the subscriber
//emiit elemetns like an [1,2,3,4] to 1,2,3,4
//pipe and map
const operators_1 = require("rxjs/operators");
const mapEmitter = (0, rxjs_1.of)(1, 2, 3, 4, 5);
const pleaseWork = mapEmitter.pipe((0, operators_1.map)((value) => {
    console.log(`reciver ${value}`);
    return value % 2;
}));
//Map here transofmrs our obseravble to value % 2 , pipe ensures it works with each element individually first transforming the data using map and then returning observable 
//this observable then is subscribed and it logs the individual then it pipe line strats with the next one 
//Note Pipe returns a new observable that map has modified for us
pleaseWork.subscribe((value) => {
    console.log(`module value : ${value}`);
});
//NOTE very importnatn I don t know how but all elements work individually first we pass 1 along the process we console log at pipe.map function and then at the subscribe ,then
//we repat this for the second element in the observable in this case 2
//Combining operators
const emitter3 = (0, rxjs_1.of)(1, 2, 3, 4);
const stringEmitter = emitter3.pipe((0, operators_1.map)((value) => { return value * 2; }), (0, operators_1.map)((value) => { return `str_${value}`; }) //str_{variable} is a prefix that will transform the variable to a string
);
stringEmitter.subscribe((value) => {
    console.log(`stringMap emitted : ${value}`);
});
//Avoid swallowing values
const emitOneTwo = (0, rxjs_1.of)(1, 2);
const swallowedValues = emitOneTwo.pipe((0, operators_1.map)((value) => {
    console.log(`swallowing ${value}`);
    // not returning a value;
}));
swallowedValues.subscribe((value) => {
    console.log(`subscriber received value: ${value}`);
});
//Here we forget to say to the map to return a value which means that the pipe will create an undefined observable
//Better option would be to have this in mind an return a null or number
const swallowedValues2 = emitOneTwo.pipe((0, operators_1.map)((value) => {
    if (value < 2) {
        return null;
    }
    return value;
}));
swallowedValues2.subscribe((value) => {
    console.log(`subscriber received value: ${value}`);
});
const objEmit = (0, rxjs_1.of)({ id: { value: 1 } }, {}, { id: { value: 2 } });
const returnIdValue = objEmit.pipe((0, operators_1.map)((value) => {
    return value.id.value;
}), (0, operators_1.catchError)((error) => {
    console.log(`stream caught : ${error}`);
    return (0, rxjs_1.of)(null); //this will return a new observable cutting of the original data 
}));
//Note the diference between this operator ? and !. ? Safetly handles null | undefined porperties , ! will alarm if a property is null | undefiend throwing an error since 
//you tell the compiler that this prop MUST have a value; ? means optinal , ! mean mandatory 
returnIdValue.subscribe((value) => {
    console.log(`received ${value} `);
}, 
// called if an error occurs
(error) => {
    console.log(`error : ${error}`);
}, 
// complete function
() => {
    console.log(`complete`);
});
const productList = (0, rxjs_1.from)([{ id: 1 }, { id: 2 }, { id: 3 }]);
function GetProduct(id) {
    return (0, rxjs_1.of)({
        id: id,
        name: `Product_${id}`,
        description: `Description_${id}`
    });
}
productList.pipe((0, operators_1.map)((value) => {
    console.log(`Product id: ${value.id}`);
    return GetProduct(value.id);
})).subscribe((value) => {
    value.subscribe((value) => {
        console.log(`product name : ${value.name}`);
        console.log(`product desc : ${value.description}`);
    });
});
//a better way of doing it is to use merge map
productList.pipe((0, operators_1.map)((value) => {
    console.log(`Extracting Id ${value.id}`);
    return value.id;
}), (0, operators_1.mergeMap)((value) => {
    return GetProduct(value);
}) //instead of doing nested subscribe mergeMap directly takes the reruned type Observable<IProductDescription> and transforms it into IProductDescription
).subscribe((value) => {
    console.log(`loggin product name ${value.name}`);
    console.log(`loggin product description ${value.description}`);
});
//concatMap
// Source Observable emits 1, 2, 3
const source = (0, rxjs_1.of)(1, 2, 3);
// `concatMap` maps each value to an Observable that emits values from 0 to 2
const result = source.pipe((0, operators_1.concatMap)(value => (0, rxjs_1.interval)(1000).pipe((0, operators_1.take)(3), // Emits 0, 1, 2 and completes
(0, operators_1.map)(innerValue => `Source: ${value}, Inner: ${innerValue}`))));
// Subscribe to the resulting Observable
result.subscribe(console.log);
//Not sure whats this for
//forkJoin
const onePerSecond = (0, rxjs_1.interval)(1000);
const threeNumbers = onePerSecond.pipe((0, operators_1.take)(3), (0, operators_1.map)((value) => {
    console.log(`>> threeNumbers emitting : ${value}`);
    return value;
}), (0, operators_1.toArray)());
const twoStrings = onePerSecond.pipe((0, operators_1.take)(2), (0, operators_1.map)((value) => {
    console.log(`>> twoStrings emitting : value_${value}`);
    return `value_${value}`;
}), (0, operators_1.toArray)());
(0, rxjs_1.forkJoin)([threeNumbers, twoStrings]).subscribe(([threeNumbersOutput, twoStringOutput]) => {
    console.log(`Three numbers: ${threeNumbersOutput}`);
    console.log(`Two strings : ${twoStringOutput}`);
});
//# sourceMappingURL=Observables.js.map