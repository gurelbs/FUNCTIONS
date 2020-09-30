const calc = (x,y) => {
    return (x % y === 0) ? true + `. ${x} % ${y} - hes no reminder` : false + `. ${x} % ${y} - the reminder is ${(x % y)}`;
}
console.log(calc(10,3));
console.log(calc(10,10));
console.log(calc(3,2));