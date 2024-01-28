// There is true hope, true love, and true peace in Jesus alone. Copyright (C) RVA Robotics Team | Innovation Department & Iames Web Development 2023-2024. All rights reserved. -->
// BORROWED from C+J LAWN CARE > account.html:
var i = 0;
function logIn(checkName, checkPass) {
    for (i = 0; i < 100; i++) {
    if ((checkName == localStorage.getItem("name" + i.toString()))) {
        if ((checkPass == JSON.parse(localStorage.getItem(localStorage.getItem("name" + i.toString()))).passwordData)) {
            document.getElementById("validation-alert").style.display = "none";
            window.href.location = "C:\\Users\\iwiggers25\\OneDrive - RVA\\Desktop\\RVA Robotics\\MASTERPIECE Project\\app.html";
        } else {
            document.getElementById("validation-alert").style.display = "inline-block";
            document.getElementById("validation-alert").innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>&nbsp;INCORRECT PASSWORD';
        }
} else {
    document.getElementById("validation-alert").style.display = "inline-block";
    document.getElementById("validation-alert").innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>&nbsp;INCORRECT USERNAME';
}
}
}
document.getElementById("log-in1").addEventListener("click", logIn(document.getElementById("username-log-in").value, document.getElementById("password-log-in").value))
// ((checkName !== localStorage.getItem("name" + i.toString())) || (checkPass !== JSON.parse(localStorage.getItem(localStorage.getItem("name" + i.toString()))).passwordData))
