                    // /ONE WAY---------------------

const calcEachX = (x) => {
    let calc = Array.from(String(x), Number).reduce((final, item) => {
        return item + final;
    },0)
    return calc.toString().length >= 2 ? calcEachX(calc) : calc;
}
console.log(calcEachX(1117199912));

// const calcX = (x) => {
//     let result = 0;
//     while (x) {
//         digit = x % 10;
//         result += digit;
//         x = (x - digit) / 10; 
//     }
//     return result;
// }

// console.log(calcX(13111133344565));