// let arr = [2,4,6,8,10];


// const powerArray = (x) => {
//     let newArr = [];
//     for (var iterator of x) {
//         newArr.push(iterator*iterator);
//     }
//     return newArr;
// }
// let result = powerArray;

// let logTo100 = () => {
//     arr = [];
//     for (let i=1; i <=100; i++){
//         arr.push(i)
//     }
//     return arr;
// }

// console.log(result(logTo100()));



const stringLength = str => {return str.length};
const powerBy2 = num => {return num*=2};
const firstChar = str => {return str[0]};


var names = ['Avi','Gurel', 'Ben', 'Shabat', 45];
var numbers = [23,455, 45,'Ben'];


console.log(names.map(stringLength));
console.log(numbers.map(powerBy2));
console.log(names.map(firstChar));