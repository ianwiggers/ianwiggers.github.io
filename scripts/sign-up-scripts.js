// There is true hope, true love, and true peace in Jesus alone. Copyright (C) RVA Robotics Team | Innovation Department & Iames Web Development 2023-2024. All rights reserved. -->
// BORROWED from C+J LAWN CARE > account.html:
function show(id, id2) {
    document.getElementById(id).style.display ="inline-block";
    document.getElementById(id2).style.display ="inline-block"
}
function hide(id, id2) {
    document.getElementById(id).style.display ="none";
    document.getElementById(id2).style.display ="none"
} 
// Need them to be GLOBAL, because not using closures yet.
var npClickedTimes = -1;
var formID = "form";

function next() {
// npClickedTimes += 1;
if (npClickedTimes < 1) {
npClickedTimes += 1;
document.getElementById(formID.concat("", (npClickedTimes.toString()))).style.display = "none";
document.getElementById(formID.concat("", ((npClickedTimes + 1).toString()))).style.display = "block";
document.getElementById("return-or-prev1").innerHTML = '<i class="fa-solid fa-chevron-left fa-large"></i>&nbsp;Prev';
document.getElementById("return-or-prev1").title = "Previous";
} else {
    return;
}

} 
function prev() {
// npClickedTimes -= 1;
if (npClickedTimes > -1) {
npClickedTimes -= 1;
document.getElementById(formID.concat("", ((npClickedTimes + 2).toString()))).style.display = "none";
document.getElementById(formID.concat("", (npClickedTimes + 1).toString())).style.display = "block";
} else if (npClickedTimes = -1) {
document.getElementById("return-or-prev1").innerHTML = '<i class="fa-solid fa-chevron-left fa-large"></i>&nbsp;Return';
document.getElementById("return-or-prev1").title = "Return";
} else {
    return;
}
if (document.getElementById("return-or-prev1").innerHTML == '<i class="fa-solid fa-chevron-left fa-large"></i>&nbsp;Return') {
    window.location.href = "index.html"
} else {
    return;
}

}

document.getElementById("next1").addEventListener("click", next);
document.getElementById("return-or-prev1").addEventListener("click", prev);


