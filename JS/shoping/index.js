const phones = [
    { name: 'samsung', camera: 12, storage: '32gb', price: 36000, color: "silvar" },
    { name: 'nokia', camera: 8, storage: '42gb', price: 5400, color: "silvar" },
    { name: 'semponiy', camera: 32, storage: '42gb', price: 4600, color: "silvar" },
    { name: 'oppe', camera: 23, storage: '67gb', price: 2000, color: "silvar" },
    { name: 'i-phone', camera: 12, storage: '30gb', price: 8100, color: "silvar" },

];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            
             cheapest = phone
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);

