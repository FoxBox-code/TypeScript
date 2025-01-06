import { of, Observable, from, interval, forkJoin } from "rxjs";


//of is important function that  takes the values of the observable type
const emitter: Observable<number> = of(1, 2, 3, 4, 5);

emitter.subscribe((value: number) =>
{
    console.log(`value : ${value}`);
});
//In order to call the emmiter type we use the function subscribe this will take the value that of returns
//Note the observable emmits its data individualy first it will display 1 then 2 and etc like an array doing a for cycle

const emittArray: Observable<number> = from([1, 2, 3, 4, 5]);

emittArray.subscribe((value: number) =>
{
    console.log(`array values : ${value}`);

});
//here we use fucntion From which works with arrays creates an observable <nubmer>
//Differnece between of and from : of works with individual elements when we pass 1,2,3,4 thoes are 4 seperate integers that of organises one by one
//By working like that we can emmit the values separetly ,but if we pass an arry , an array is a one object that contains [1,2,3,4] of will treat it as an individual
//and emmit it upon subscribing as a one whole loging [1,2,3,4,5]. Thats were from comes it will take an object like array and organise it individually making the subscriber
//emiit elemetns like an [1,2,3,4] to 1,2,3,4

//pipe and map

import { catchError, map, mergeMap, take, concatMap, toArray } from "rxjs/operators";


const mapEmitter: Observable<number> = of(1, 2, 3, 4, 5);

const pleaseWork = mapEmitter.pipe(map((value: number) =>
{
    console.log(`reciver ${value}`);
    return value % 2;
}));
//Map here transofmrs our obseravble to value % 2 , pipe ensures it works with each element individually first transforming the data using map and then returning observable 
//this observable then is subscribed and it logs the individual then it pipe line strats with the next one 
//Note Pipe returns a new observable that map has modified for us
pleaseWork.subscribe((value: number) =>
{
    console.log(`module value : ${value}`);

});
//NOTE very importnatn I don t know how but all elements work individually first we pass 1 along the process we console log at pipe.map function and then at the subscribe ,then
//we repat this for the second element in the observable in this case 2

//Combining operators
const emitter3 = of(1, 2, 3, 4);

const stringEmitter: Observable<string> = emitter3.pipe(
    map((value: number) => { return value * 2 }),
    map((value: number) => { return `str_${value}` })//str_{variable} is a prefix that will transform the variable to a string
);

stringEmitter.subscribe((value: string) =>
{
    console.log(`stringMap emitted : ${value}`);
});

//Avoid swallowing values
const emitOneTwo = of(1, 2);
const swallowedValues = emitOneTwo.pipe(
    map((value: number) =>
    {
        console.log(`swallowing ${value}`);
        // not returning a value;
    })
);
swallowedValues.subscribe((value: void) =>
{
    console.log(`subscriber received value: ${value}`)
});
//Here we forget to say to the map to return a value which means that the pipe will create an undefined observable
//Better option would be to have this in mind an return a null or number
const swallowedValues2: Observable<number | null> =
    emitOneTwo.pipe(
        map((value: number) =>
        {
            if (value < 2)
            {
                return null;
            }
            return value;
        })
    );
swallowedValues2.subscribe((value: number | null) =>
{
    console.log(`subscriber received value: ${value}`)
});

//Time-based Observables
// const sourceInterval = interval(1000);//Note interval returns an observable<number>
// //Interval start a count from 0 to infinite we gave it a inteval of 1000ms meaning each second he'll count starting 0 , 1 , 2 , 3 , etc...
// const IntervalMaped = sourceInterval.pipe(
//     take(5),//Since interval will return observable to infinte we take only 5
//     map((value: number) =>
//     {
//         console.log(`map recived ${value}`);
//         return value * 2;
//     }),
//     map((value: number) =>
//     {
//         return `$str_${value}`;
//     })
// );

// IntervalMaped.subscribe((value: string) =>
// {
//     console.log(`${new Date().toLocaleTimeString()} ${value}`);

// });

//Observable errors
//catchError
interface IValue
{
    value: number;
}
interface INestedObject
{
    id?: IValue;
}

const objEmit: Observable<INestedObject> = of(
    { id: { value: 1 } },
    {},
    { id: { value: 2 } }
);

const returnIdValue = objEmit.pipe(
    map((value: INestedObject) =>
    {
        return value!.id!.value;
    }),
    catchError((error: unknown) =>
    {
        console.log(`stream caught : ${error}`);



        return of(null);//this will return a new observable cutting of the original data 
    })
);
//Note the diference between this operator ? and !. ? Safetly handles null | undefined porperties , ! will alarm if a property is null | undefiend throwing an error since 
//you tell the compiler that this prop MUST have a value; ? means optinal , ! mean mandatory 


returnIdValue.subscribe(
    (value: number | null) =>
    {
        console.log(`received ${value} `);
    },
    // called if an error occurs
    (error: unknown) =>
    {
        console.log(`error : ${error}`);
    },
    // complete function
    () =>
    {
        console.log(`complete`);
    }
);

//Observables returning Observables
interface IProductId
{
    id: number;
}

interface IProductDescription
{
    name: string;
    description: string;
}

const productList: Observable<IProductId> = from([{ id: 1 }, { id: 2 }, { id: 3 }])

function GetProduct(id: number): Observable<IProductDescription>
{
    return of(
        {
            id: id,
            name: `Product_${id}`,
            description: `Description_${id}`
        })
}

productList.pipe(
    map((value: IProductId) =>
    {
        console.log(`Product id: ${value.id}`);
        return GetProduct(value.id);
    })
).subscribe((value: Observable<IProductDescription>) =>
{
    value.subscribe((value: IProductDescription) =>
    {
        console.log(`product name : ${value.name}`);
        console.log(`product desc : ${value.description}`);
    });
});
//a better way of doing it is to use merge map
productList.pipe(
    map((value: IProductId) =>
    {
        console.log(`Extracting Id ${value.id}`);
        return value.id;
    }),
    mergeMap((value: number) =>
    {
        return GetProduct(value);
    })//instead of doing nested subscribe mergeMap directly takes the reruned type Observable<IProductDescription> and transforms it into IProductDescription
).subscribe((value: IProductDescription) =>
{
    console.log(`loggin product name ${value.name}`);
    console.log(`loggin product description ${value.description}`);

})

//concatMap
// Source Observable emits 1, 2, 3
const source = of(1, 2, 3);

// `concatMap` maps each value to an Observable that emits values from 0 to 2
const result = source.pipe(
    concatMap(value =>
        interval(1000).pipe(
            take(3), // Emits 0, 1, 2 and completes
            map(innerValue => `Source: ${value}, Inner: ${innerValue}`)
        )
    )
);

// Subscribe to the resulting Observable
result.subscribe(console.log);
//Not sure whats this for

//forkJoin
const onePerSecond = interval(1000);
const threeNumbers: Observable<number[]> = onePerSecond.pipe(
    take(3),
    map((value: number) =>
    {
        console.log(`>> threeNumbers emitting : ${value}`);
        return value;
    }),
    toArray()
);
const twoStrings: Observable<string[]> = onePerSecond.pipe(
    take(2),
    map((value: number) =>
    {
        console.log(`>> twoStrings emitting : value_${value}`);
        return `value_${value}`;
    }),
    toArray()
);

forkJoin([threeNumbers, twoStrings]).subscribe(([threeNumbersOutput, twoStringOutput]) =>
{
    console.log(`Three numbers: ${threeNumbersOutput}`);
    console.log(`Two strings : ${twoStringOutput}`);


});
