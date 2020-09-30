const maxFont = 100;
const minFont = 6;
const factor = 5;

const cssFontSizePropName = "font-size";
const myHeader = document.getElementById("my-header");
const headerElement = window.getComputedStyle(myHeader, null);

function increase() {
    // console.debug("============> increase <===============")
    let fontSize = getCurrentFontSize();
    if (fontSize < maxFont) {
        fontSize = Math.min(maxFont, (fontSize + factor));
        console.debug("Increase font size = " + fontSize);
        myHeader.style.fontSize = fontSize + 'px';
    }
}

function decrease() {
    // console.debug("============> decrease <===============")
    let fontSize = getCurrentFontSize();
    if (fontSize > minFont) {
        fontSize = Math.max(minFont, (fontSize - factor));
        console.debug("decrease font size = " + fontSize);
        myHeader.style.fontSize = fontSize + 'px';
    }
}

function getCurrentFontSize() {
    return parseInt(headerElement.getPropertyValue(cssFontSizePropName));
}
