const multiplyWithoutX = (someNum,timeToMultiply) =>{
    var num = someNum;
    for (i=1; i < timeToMultiply; i++){
        someNum += num;
    }
    return `${num} multiply by ${timeToMultiply} is ${someNum}`;
}
console.log(multiplyWithoutX(20,4));


