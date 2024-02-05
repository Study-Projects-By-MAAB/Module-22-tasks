/**
 * ---- shirt price: 500
 * pant price: 300
 * shoe price: 900
*/

function getPrice(shirtQuantity, pantQuantity, shoeQuantity) {
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900;

    const shirtTotal = shirtPrice * shirtQuantity
    const pantTotal = pantPrice * pantQuantity
    const shoeTotal = shoePrice * shoeQuantity

    const totalPrice = shirtTotal + pantTotal + shoeTotal
    return totalPrice
}

const buyThings = getPrice(2, 2, 1)
console.log('balance needed', buyThings);