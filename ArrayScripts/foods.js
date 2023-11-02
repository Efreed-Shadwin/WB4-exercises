"use strict";
let lunch = [{ item: "Steak Fajitas", price: 9.95 },
{ item: "Chips and Guacamole", price: 3.95 },
{ item: "Soda", price: 1.95 },
{ item: "Water", price: 0.00 }
];

function getMealCost(orders) {
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
        total += orders[i].price;
    }
    return total;
}
let tax = 0.08 * getMealCost(lunch);
let tip = 0.18 * getMealCost(lunch);
let mealCost = getMealCost(lunch) + tax + tip;
console.log("The total cost of lunch is: $" + mealCost.toFixed(2) + " which includes tax of $" + tax.toFixed(2) + " and tip of $" + tip.toFixed(2));