import Navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let isLogin = localStorage.getItem("isLogin") || false;


if (isLogin == false) {
    window.location.href = "/pages/login.html"
}