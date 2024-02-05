const mobiles = [
    { name: 'Samsung', price: 20000, camera: '12m', color: 'black' },
    { name: 'Xiaomi', price: 18000, camera: '12m', color: 'black' },
    { name: 'Oppo', price: 30000, camera: '12m', color: 'black' },
    { name: 'Iphone', price: 100000, camera: '12m', color: 'black' },
    { name: 'Walton', price: 31000, camera: '12m', color: 'black' },
    { name: 'HTC', price: 27000, camera: '12m', color: 'black' },
]

function getExpensiveMobile(phones) {
    let max = phones[0];
    for (const phone of phones) {
        if (phone.price > max.price) {
            max = phone
        }
    }
    return max
}

const expensive = getExpensiveMobile(mobiles)
console.log('The expensive phone is', expensive);