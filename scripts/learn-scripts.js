//  There is true hope, true love, and true peace in Jesus alone. Copyright (C) RVA Robotics Team | Innovation Department & Iames Web Development 2023-2024. All rights reserved.
// Auxillary JS styling for app.html:
let pixelHeight = screen.availHeight;
let pixelWidth = screen.availWidth;
let changeFactorH = 0.2;
let boxHeight = (pixelHeight * changeFactorH);
var units = document.getElementsByClassName("unit");
for (let classIndex = 0; classIndex < units.length; classIndex++) {
units[classIndex].style.height = boxHeight.toString() + "px";
}

// Module JS for learn-lessons.html:
// Content insertion by unit:
var iconClasses = [[" fa-arrows-up-down-left-right"," fa-music"," fa-music"," fa-music"]];
var titles = [["&nbsp;&nbsp;Positioning 1","&nbsp;&nbsp;Learn C","&nbsp;&nbsp;Learn D","&nbsp;&nbsp;Learn E"]]
var boxes = document.getElementsByClassName("lesson-box");

function insertUnitContent(unitSelect2) {
    for (let boxIndex = 0; boxIndex < boxes.length; boxIndex++) {
        boxes[boxIndex].innerHTML = '<i class="fa-solid' + iconClasses[unitSelect2][boxIndex] + ' fa-3x"></i><br><br>' + titles[unitSelect2][boxIndex];
    }
    return;
}

insertUnitContent(0);