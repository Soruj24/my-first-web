// const shoppingCard = [
//     { name: 'shoe', price: 1200 },
//     { name: 'shirt', price: 2200 },
//     { name: 'pant', price: 3700 },
//     { name: 'belt', price: 600 },
// ];

// function totalCost(products) {
//     let sum = 0;
//     for (let i = 0; i < products.length; i++){
//         const product = products[i]
//         sum = sum + product.price
//         console.log(product);
//     }
//     return sum;
// }
// const expense = totalCost(shoppingCard);
// console.log(expense);

const shoppingCard = [
    { name: 'shoe', price: 1200, qontetie:2 },
    { name: 'shirt', price: 2200, qontetie:4 },
    { name: 'pant', price: 3700, qontetie:3 },
    { name: 'belt', price: 600, qontetie:2 },
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i]
        sum = sum + product.price * product.qontetie;
        console.log(product);
    }
    return sum;
}
const expense = totalCost(shoppingCard);
console.log(expense);