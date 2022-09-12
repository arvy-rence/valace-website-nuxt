let digits = [9, 7, 8];

generateISBNArray(10);

function generateISBNArray(amount) {
    let isbnArray = [];
    for (let i = 0; i < amount; i++) {
        isbnArray.push(generateRandomISBN())
    }
    return isbnArray;
}
function generateRandomISBN() {
    let generatedISBN = "";
    for (let x = 0; x < 9; x++) {
        digits[x + 3] = Math.floor(Math.random() * 9);
    }
    digits.push(checkIfISBN(digits));
    generatedISBN = digits.toString().replaceAll(",", "");
    // console.log(generatedISBN);
    digits = [9, 7, 8];
    return generatedISBN;
}

function checkIfISBN(items) {
    let sum = 0;
    let finalanswer;
    for (let i = 0; i < items.length; i++) {
        if (((i + 1) % 2) === 0) {
            sum += (items[i] * 3);
        } else {
            sum += (items[i] * 1);
        }
    }
    // console.log(sum % 10);
    finalanswer = 10 - (sum % 10);
    if (finalanswer === 10) {
        finalanswer = 0;
    }
    return finalanswer;
}

module.exports = {
    generateRandomISBN,
    generateISBNArray
};