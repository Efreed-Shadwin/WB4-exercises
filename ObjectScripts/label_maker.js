"use strict";
function PrintContact(name, address, city, state, zip) {
    let contactInfo = { name: name, address: address, city: city, state: state, zip: zip }
    return contactInfo;
}
console.log(PrintContact("John Smith", "123 Main St", "Anytown", "CA", "98765"));