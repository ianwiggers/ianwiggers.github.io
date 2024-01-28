//  There is true hope, true love, and true peace in Jesus alone. Copyright (C) RVA Robotics Team | Innovation Department & Iames Web Development 2023-2024. All rights reserved.
// BORROWED from C+J LAWN CARE > account.html. JS for sign-up.html: 

if (document.getElementById("next1") != null ||  document.getElementById("return-or-prev1") != null) {
function show(id, id2) {
    document.getElementById(id).style.display ="inline-block";
    document.getElementById(id2).style.display ="inline-block";
}
function hide(id, id2) {
    document.getElementById(id).style.display ="none";
    document.getElementById(id2).style.display ="none";
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
if ((npClickedTimes == 1) && ((firstNameOrUsernameSignIn.value != "") && (emailOrNumber.value != "") && (password.value != "") && (instrumentType.value != "Choose an instrument:") && (accountType.value != "Choose an account type:"))) {
    document.getElementById("next1").innerHTML = "<i class='fa-solid fa-circle-plus fa-large'></i>&nbsp;Create";
} else {
    document.getElementById("next1").innerHTML = "Next&nbsp;<i class='fa-solid fa-chevron-right fa-large'></i>";
}
} 
function prev() {
// npClickedTimes -= 1;
if (npClickedTimes > -1) {
npClickedTimes -= 1;
document.getElementById(formID.concat("", ((npClickedTimes + 2).toString()))).style.display = "none";
document.getElementById(formID.concat("", (npClickedTimes + 1).toString())).style.display = "block";
} else if (npClickedTimes == -1) {
document.getElementById("return-or-prev1").innerHTML = '<i class="fa-solid fa-chevron-left fa-large"></i>&nbsp;Return';
document.getElementById("return-or-prev1").title = "Return";
} else {
    return;
}
if (document.getElementById("return-or-prev1").innerHTML == '<i class="fa-solid fa-chevron-left fa-large"></i>&nbsp;Return') {
    window.location.href = "C:\\Users\\iwiggers25\\OneDrive - RVA\\Desktop\\RVA Robotics\\MASTERPIECE Project\\index.html";
} else {
    return;
}
if ((npClickedTimes == 1) && ((firstNameOrUsernameSignIn.value != "") && (emailOrNumber.value != "") && (password.value != "") && (instrumentType.value != "Choose an instrument:") && (accountType.value != "Choose an account type:"))) {
    document.getElementById("next1").innerHTML = "<i class='fa-solid fa-circle-plus fa-large'></i>&nbsp;Create";
} else {
    document.getElementById("next1").innerHTML = "Next&nbsp;<i class='fa-solid fa-chevron-right fa-large'></i>";
}
}


document.getElementById("next1").addEventListener("click", next);
document.getElementById("return-or-prev1").addEventListener("click", prev);

if ((npClickedTimes == 1) && ((firstNameOrUsernameSignIn.value != "") && (emailOrNumber.value != "") && (password.value != "") && (instrumentType.value != "Choose an instrument:") && (accountType.value != "Choose an account type:"))) {
    document.getElementById("next1").innerHTML = "<i class='fa-solid fa-circle-plus fa-large'></i>&nbsp;Create";
    document.getElementById("next1").title = "Create Account";
} else {
    document.getElementById("next1").innerHTML = "Next&nbsp;<i class='fa-solid fa-chevron-right fa-large'></i>";
    document.getElementById("next1").title = "Next";
}
}

var firstNameOrUsernameSignIn = document.getElementById("first-name-or-username-sign-in");
var lastName = document.getElementById("last-name-sign-in");
var emailOrNumber = document.getElementById("email-or-number");
var password = document.getElementById("password");
var instrumentType = document.getElementById("instrument-type");
var accountType = document.getElementById("account-type");

var validCV = undefined;
var validCM = undefined;
var IVUNI = 0;

/*
function checkMatch() {
    
    if ((firstNameOrUsernameSignIn.value != "" && lastName.value != "") && localStorage.getItem("usernames") != null) {
        for (var UNI = -1; UNI < (JSON.parse(localStorage.getItem("usernames"))).length; UNI++) {
            if (((firstNameOrUsernameSignIn.value.toString() + " " + lastName.value.toString()).toString()) == JSON.parse(localStorage.getItem("usernames"))[UNI]) {
                break;
            }
            UNI = IVUNI;
            document.getElementById("validation-alert").style.display = "inline-block";
            document.getElementById("validation-alert").innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>&nbsp;USERNAME/LAST NAME ALREADY TAKEN';

            if (((firstNameOrUsernameSignIn.value.toString() + " " + lastName.value.toString()).toString()) !== JSON.parse(localStorage.getItem("usernames"))[IVUNI]) {
                document.getElementById("validation-alert").style.display = "inline-block";
                validCM = true;
            }
        }
    } else {
        validCM = true;
    }
}
*/
function checkValid(element) {
    if ((element.id.toString() == "first-name-or-username-sign-in") && (element.value.toString().includes(" ") == true)) {
        document.getElementById("validation-alert").style.display = "inline-block";
        document.getElementById("validation-alert").innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>&nbsp;NO SPACES ALLOWED IN USERNAME';
        

    } else if ((element.id.toString() == "last-name-sign-in") && (element.value.toString().includes(" ") == true)) {
        document.getElementById("validation-alert").style.display = "inline-block";
        document.getElementById("validation-alert").innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>&nbsp;NO SPACES ALLOWED IN LAST NAME';
        checkMatch("")

    } else if ((element.id.toString() == "email-or-number") && ((element.value.toString().includes("@") != true) || (element.value.toString().includes(".") != true)) && (element.value != "")) {
        document.getElementById("validation-alert").style.display = "inline-block";
        document.getElementById("validation-alert").innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>&nbsp;NOT VALID EMAIL (@ and . needed)';    
      
    } else {
        document.getElementById("validation-alert").style.display = "none";
        validCV = true;
    }
    // checkMatch();
}
/*
var personName = document.getElementById("name").innerHTML;
var instrumentName = document.getElementById("instrument-name").innerHTML;
var streakDays = document.getElementById("streak-days").innerHTML;
var XP = document.getElementById("xp").innerHTML;
var currentLeague = document.getElementById("current-league").innerHTML;
var topFinishes = document.getElementById("top-finishes").innerHTML;
*/

function populateData(username) {
    document.getElementById("name").innerHTML = username;
    document.getElementById("instrument-name").innerHTML= JSON.parse(localStorage.getItem(username)).instrumentTypeData;
    document.getElementById("streak-days").innerHTML = JSON.parse(localStorage.getItem(username)).SDs;
    document.getElementById("xp").innerHTML =  JSON.parse(localStorage.getItem(username)).XPs;
    document.getElementById("current-league").innerHTML = JSON.parse(localStorage.getItem(username)).L;
    document.getElementById("top-finishes").innerHTML = JSON.parse(localStorage.getItem(username)).TFs;
}

function create() {
    
    if (validCV == true && document.getElementById("next1").innerHTML.toString().includes("Create") == true) {
        var identifier = firstNameOrUsernameSignIn.value.toString() + " " + lastName.value.toString();
        if (localStorage.getItem("nameNum") == null) {
            var interNum = -1;
            localStorage.setItem("nameNum", interNum.toString());
        }
    interNum = parseInt(localStorage.getItem("nameNum")) + 1;
    localStorage.setItem("nameNum", interNum.toString());
    localStorage.setItem("name" + (localStorage.getItem("nameNum")), identifier);
    localStorage.setItem((identifier), JSON.stringify({emailOrNumberData: emailOrNumber.value.toString(), passwordData: password.value.toString(), instrumentTypeData: instrumentType.value.toString(), accountTypeData: accountType.value.toString(), XPs: 0, SDs: 0, L: "Starter League", TFs: 0, SFs: 0, EMs: 0}));
    window.location.href = "C:\\Users\\iwiggers25\\OneDrive - RVA\\Desktop\\RVA Robotics\\MASTERPIECE Project\\profile.html";

}
}
if (window.location.href.toString().includes("profile")) {
    populateData(localStorage.getItem("name" + (localStorage.getItem("nameNum"))));
}
        /* if (localStorage.getItem("usernames") == null) {
            var UA = undefined;
            localStorage.setItem("usernames", "[]");
            UA = JSON.parse(localStorage.getItem("usernames"));
            UA.push((firstNameOrUsernameSignIn.value.toString() + " " + lastName.value.toString()).toString());
            localStorage.setItem("usernames", JSON.stringify(UA[UA.push((firstNameOrUsernameSignIn.value.toString() + " " + lastName.value.toString()).toString()) - 1]));
            UA = undefined;
        } else {
            var UA = undefined;
            UA = JSON.parse(localStorage.getItem("usernames"));
            UA.push((firstNameOrUsernameSignIn.value.toString() + " " + lastName.value.toString()).toString());
            localStorage.setItem("usernames", JSON.stringify(UA[UA.push((firstNameOrUsernameSignIn.value.toString() + " " + lastName.value.toString()).toString()) - 1]));
            UA = undefined;
        } */
// export let IT = JSON.parse(localStorage.getItem(firstNameOrUsernameSignIn.value.toString() + " " + lastName.value.toString())).instrumentTypeData;

