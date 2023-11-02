"use strict";
function parsePartCode() {
    let partCode = {
        supplierCode: partCode1.slice(0, partCode1.indexOf(":")), productNumber: partCode1.slice(partCode1.indexOf(":") + 1, partCode1.indexOf("-")),
        size: partCode1.slice(partCode1.indexOf("-"))
    }
    return partCode;
}
let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);
console.log("Supplier: " + part1.supplierCode + " Product Number: " +
    part1.productNumber + " Size: " + part1.size);