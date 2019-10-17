window.addEventListener("DOMContentLoaded", init);

function init() {
    document.getElementById("log").addEventListener("click", admin);
}

function admin() {
    var username = document.getElementById("lusername").value;
    var password = document.getElementById("lpassword").value;
    if (username == "") {
        document.getElementById("lreq2").className = "show1 red";
    }
    if (password == "") {
        document.getElementById("lreq3").className = "show1 red";
    }
    else{
        document.getElementById("lreq2").className = "hide red";
        document.getElementById("lreq3").className = "hide red";
        if(username=="admin" && password == "admin"){
            location.href = "https://console.firebase.google.com/u/1/project/cargo-management-system-3f35c/database/cargo-management-system-3f35c/data";
        }
        else{
            document.getElementById("lreq4").className = "show1 red";
        }
    }
}