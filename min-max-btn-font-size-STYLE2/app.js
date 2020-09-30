let header = document.querySelector('.changeSize');
let fSize = window.getComputedStyle(header, null).getPropertyValue('font-size');
someNum = 5;
console.log(fSize);
document.querySelector('.plusBtn').addEventListener('click', (e) => {
    header.style.fontSize =  `${parseFloat(fSize) + someNum}px`;
    someNum
})
