"use strict";
function parsePartCode(){
    let partCode = {supplierCode: "someValue", productNumber: "someValue", size: "someValue"}
    return partCode;
}
let partCode1 = parsePartCode("XYZ:1234-L");
let part1 = parsePartCode(partCode1);
console.log("Supplier: "+ part1.supplierCode + " Product Number: " +
             part1.productNumber + " Size: " + part1.size);