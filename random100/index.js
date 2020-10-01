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
    