"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const Chapter3_4_1 = require("./Chapter3_4");
let md1 = new Chapter3_4_1.Module1();
md1.print();
const Chapter3_4_2 = require("./Chapter3_4"); //custom naming to Module1 improt
let myModule = new Chapter3_4_2.Module1();
myModule.print();
//NOTE module renaiming is not recommende for use since it unpractical to rename well defined classes
const module_manyExports_1 = require("./module_manyExports"); // importing multiple classes
let mc1 = new module_manyExports_1.MultipleClass1();
let mc2 = new module_manyExports_1.MultipleClass2();
//Module namespaces
const AllExports = __importStar(require("./module_manyExports")); //this is another way of exporting , * marks every class marked with export and retrives them in a specific named variable
let export1 = new AllExports.MultipleClass1();
let export2 = new AllExports.MultipleClass2();
//# sourceMappingURL=modules_main.js.map