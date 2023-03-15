
function ticketPrice(ticketQuantity) {
    const frist100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if (ticketQuantity <= 100) {
        const price = ticketQuantity * frist100Rate;
        return price;
    }
    else if (ticketQuantity <= 200) {
        const frist100Price = 100 * frist100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = frist100Price + restTicketPrice;
        return totalPrice;
    }
    else {
        const frist100Price = 100 * frist100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = frist100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}
const price = ticketPrice(500)
console.log(price);