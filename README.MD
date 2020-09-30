# simple js function:

## 1) calc-sum-of-input-X;
```
const calcEachX = (x) => {
    let calc = Array.from(String(x), Number).reduce((final, item) => {
        return item + final;
    },0)
    return calc.toString().length >= 2 ? calcEachX(calc) : calc;
}
```
```
console.log(calcEachX(1117199912));
```
