// Your task is to calculate the total budget required to buy electronics:

// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.


function calculateElectronicsBudget(laptopQuant, tabletQuant, mobileQuant) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;
    const laptopTotalPrice = laptopPrice * laptopQuant;
    const tabletTotalPrice = tabletPrice * tabletQuant;
    const mobileTotalPrice = mobilePrice * mobileQuant;
    const totalPrice = laptopTotalPrice + tabletTotalPrice + mobileTotalPrice;
    return totalPrice
}

const laptop = 2;
const tablet = 3;
const mobile = 5;

const budget = calculateElectronicsBudget(laptop, tablet, mobile)
console.log('Total budget needed for electronics:', budget);