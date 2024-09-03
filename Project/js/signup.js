import getValue from "../components/helper.js";
import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar()
let users = JSON.parse(localStorage.getItem("users")) || []
const handleData = (e) => {
    e.preventDefault();

    let user = {
        // username:document.getElementById("username").value,
        username: getValue(".username"),
        // email:document.getElementById("email").value,
        email: getValue(".email"),
        // password:document.getElementById("password").value
        password: getValue(".password"),
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users))

    window.location.href = "/index.html"

};
document.querySelector("#userData").addEventListener("submit", handleData);

