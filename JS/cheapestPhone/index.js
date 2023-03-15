const phones = [
    { name: 'samsung', camera: 12, storage: '32gb', price: 3400, color: 'silver' },
    { name: 'Walton', camera: 12, storage: '32gb', price: 8400, color: 'silver' },
    { name: 'iphone', camera: 12, storage: '32gb', price: 4400, color: 'silver' },
    { name: 'xaomi', camera: 12, storage: '32gb', price: 3400, color: 'silver' },
    { name: 'oppo', camera: 12, storage: '32gb', price: 2000, color: 'silver' },
    { name: 'htc', camera: 12, storage: '32gb', price: 14000, color: 'silver' },
];

function cheapestPhone(phones) {
    let cheap = phones[0];
    for (let i = 0; i < phones.length; i++){
        const phone = phones[i];
        // console.log(phone);
        if (phone.price < cheap.price) {
            cheap=phone
        }
    }
    return cheap;
}
const prices = cheapestPhone(phones);
console.log(prices);
