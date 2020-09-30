const addXtoY = (x,y) => {
     return (typeof x === 'number' && typeof y === 'number') ? `${x} + ${y} = ${x + y}` : `${NaN} - provide valid x and y`;
}

console.log(addXtoY(2,'d'));
console.log(addXtoY('sha','lom'));
console.log(addXtoY('sha',4));
console.log(addXtoY('number',undefined));

console.log(addXtoY(10,20));
console.log(addXtoY(0,0));
console.log(addXtoY(-10,-20));
console.log(addXtoY(-2555,2*2));
console.log(addXtoY((3*3),(2*2)));