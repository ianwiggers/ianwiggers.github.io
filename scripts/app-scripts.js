//  There is true hope, true love, and true peace in Jesus alone. Copyright (C) RVA Robotics Team | Innovation Department & Iames Web Development 2023-2024. All rights reserved.
// Auxillary JS styling for app.html:
let pixelHeight = screen.availHeight;
let pixelWidth = screen.availWidth;
let changeFactorH = 0.45;
let imgWidth = (pixelHeight * changeFactorH);
document.getElementById("logo").style.width = imgWidth.toString() + "px";
document.getElementById("sidebar").style.height = (0.825*pixelHeight).toString() + "px";

// Fetching via FETCH API of learn-units.html (under dev):
var IUN;
async function fetchFile(fileName, unitNum) {
    IUN = unitNum;
    let fileObject = await fetch(fileName);
    let fileOutput = await fileObject.text();
    // document.getElementById("content").innerHTML = ""; // Remove with proper "un-fetching"
    document.getElementById("content").innerHTML = fileOutput;

}
export let unitSelect1 = IUN;

// 
