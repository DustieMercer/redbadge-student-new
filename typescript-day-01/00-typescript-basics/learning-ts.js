"use strict";
let number1;
let name1;
let stringExample;
let unionStringNumber;
unionStringNumber = 5;
unionStringNumber = 'five';
stringExample = 'Hello';
// stringExample = 4;
//Type Inference
let number2 = 5;
let restaurant = {
    name: "McDonalds",
    dineIn: false,
    foodItems: ["hamburgers", "fries", "apple pie"],
};
restaurant.foodItems.forEach((item) => {
    console.log(item.toUpperCase());
});
function buySellStock(stockName, qty, action) {
    let total = +qty * 15;
    let status = action === "sell-stock" ? "sold" : "bought";
    return `You just ${status} ${qty} shares of ${stockName} for a total of $${total}`;
}
buySellStock("Bank of America", 15, "sell-stock");
// // let weather ={
//     temp: 78,
//     cloudCondition: "overcast"
//     next5dayTemps: [5,6,7,8,9]
// // }
let weather = {
    temp: 78,
    cloudCondition: 'sunny',
};
