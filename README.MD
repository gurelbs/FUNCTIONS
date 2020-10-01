# JS function:

## 1) calc sum of input X;

```
calcEachX(1234)); /// expect input: 10
calcEachX(12345)); /// expect input: 15
calcEachX(123456789)); /// expect input: 58

```
Full source code <a href="https://github.com/gurelbs/FUNCTIONS/blob/master/returnSumXValue/index.js">here</a>

## 2) calc sum of input X again and again;

```
calcEachX(1234)); /// expect input: 1
calcEachX(1233)); /// expect input: 9
calcEachX(12333)); /// expect input: 3
calcEachX(12)); /// expect input: 3
calcEachX(1)); /// expect input: 3

calcEachX(123456789)); /// expect input: 4

```
Full source code <a href="https://github.com/gurelbs/FUNCTIONS/blob/master/calc-sum-of-input-X-again/index.js">here</a>

## 3) create 100 numbers
    // randomRange() pick random number from 1 to 100, calcRandom() create paragraph and send it to the DOM -- 100 times --
```
    let randomRange = (myMin, myMax) => {
        return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
    }
    let calcRandom = () => {
        for (i=1;i<=100;i++){
            let p = document.createElement('p');
            p.innerHTML = `number #${i}:<br>${randomRange(1,100)}`;
            document.body.appendChild(p);
        }
    }
```
link <a href="https://gurelbs.github.io/FUNCTIONS/">here</a>
source file <a href="https://github.com/gurelbs/FUNCTIONS/tree/master/random100">here</a>
