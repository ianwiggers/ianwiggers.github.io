//  There is true hope, true love, and true peace in Jesus alone. Copyright (C) RVA Robotics Team | Innovation Department & Iames Web Development 2023-2024. All rights reserved.
// Auxillary JS styling for index.html:
let pixelHeight = screen.availHeight;
let pixelWidth = screen.availWidth;
let changeFactorH = 0.1;
let navHeight = (pixelHeight * changeFactorH);
document.getElementById("main-nav").style.height = navHeight.toString() + "px";

let changeFactorL = 0.1;
let imgHeight = (pixelHeight * changeFactorL);
document.getElementById("logo").style.height = imgHeight.toString() + "px";

let changeFactorL2 = 0.075;
let imgHeight2 = (pixelHeight * changeFactorL2);
document.getElementById("logo2").style.height = imgHeight.toString() + "px";

let changeFactorL3 = 0.35;
let imgWidth3 = (pixelWidth * changeFactorL3);
document.getElementById("logo3").style.width = imgWidth3.toString() + "px";

let changeFactorL4 = 0.20;
let imgWidth4 = (pixelWidth * changeFactorL4);
document.getElementById("logo4").style.width = imgWidth4.toString() + "px";

// JS dynamic functionality for index.html
var alpha = 1.00;
var words = ["trumpet","saxophone","percussion"," trombone","French horn"," clarinet","flute","piano", "tuba"];
var clarifyFunctionCallings = 0;
var fadeFunctionCallings = 0;
var currentWordIndex = 0;
var fadeInterval, clarifyInterval;
var instrumentOutput = document.getElementById("changing-instruments");

function fadeWord() {
    alpha -= 0.01;
    instrumentOutput.style.color = "rgba(0,0,255," + alpha.toString() + ")";
    fadeFunctionCallings += 1;
    console.log("i");
}

function changeWord(wordNow) {
    instrumentOutput.innerHTML = words[wordNow];
}

function clarifyWord() {
    alpha += 0.01;
    instrumentOutput.style.color = "rgba(0,0,255," + alpha.toString() + ")";
    clarifyFunctionCallings += 1;
}

function changeInstrument() {
    if (currentWordIndex < words.length) {
        if (clarifyFunctionCallings >= 100) {
            clearInterval(clarifyInterval);
            currentWordIndex += 1;
            clarifyFunctionCallings = 0;
            fadeFunctionCallings = 0;
            changeInstrument();
        } else if (fadeFunctionCallings >= 100) {
            clearInterval(fadeInterval);
            changeWord(currentWordIndex);
            clarifyInterval = setInterval(clarifyWord, 10);
        } else {
            fadeInterval = setInterval(fadeWord, 10);
        }
    } else {
        console.log("TEST-SUCCESS");
        clearInterval(fadeInterval); // Clear any remaining intervals after the last word
        currentWordIndex = 0;
    }
    console.log(fadeFunctionCallings);
}

// Initial setup
changeWord(currentWordIndex);
currentWordIndex += 1;

// Set interval for continuous word changing
setInterval(changeInstrument, 1200);

