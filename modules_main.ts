import { Module1 } from "./Chapter3_4";

let md1 = new Module1();

md1.print();

import { Module1 as MyModule } from "./Chapter3_4";//custom naming to Module1 improt

let myModule = new MyModule();

myModule.print();
//NOTE module renaiming is not recommende for use since it unpractical to rename well defined classes

import {MultipleClass1, MultipleClass2 } from "./module_manyExports"; // importing multiple classes

let mc1 = new MultipleClass1();
let mc2 = new MultipleClass2();

//Module namespaces

import * as AllExports from "./module_manyExports"; //this is another way of exporting , * marks every class marked with export and retrives them in a specific named variable

let export1 = new AllExports.MultipleClass1();
let export2 = new AllExports.MultipleClass2();

