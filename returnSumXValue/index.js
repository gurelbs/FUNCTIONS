const calcEachX = (x) => {
    let arrayOfDigits = Array.from(String(x), Number);
    let calc = arrayOfDigits.reduce((final, item) => {
        return item + final;
    },0)
    return calc;
} 
console.log(calcEachX(1));
console.log(calcEachX(123));
console.log(calcEachX(12345));
console.log(calcEachX(123456789));
