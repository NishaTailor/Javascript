import Navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = Navbar()

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const mapper = (data) => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let img = document.createElement("img");
        img.src = data[i].img;
        td1.append(img);
        let td2 = document.createElement("td");
        td2.innerHTML = data[i].title;
        let td3 = document.createElement("td");
        td3.innerHTML = ${data[i].price};
        let td4 = document.createElement("td");
        let qty = document.createElement("div");
        let btn1 = document.createElement("button");
        btn1.innerHTML = "-";
        btn1.addEventListener("click", () => update(i, -1));
        let btn2 = document.createElement("button");
        btn2.innerHTML = "+";
        btn2.addEventListener("click", () => update(i, 1));
        let qtyDisplay = document.createElement("span");
        qtyDisplay.innerHTML = data[i].qty;
        qty.append(btn1, qtyDisplay, btn2);
        td4.append(qty);
        let td5 = document.createElement("td");
        let total = data[i].price * data[i].qty;
        td5.innerHTML = ${total};
        let td6 = document.createElement("td");
        let remove = document.createElement("button");
        remove.className = "btn btn-warning btn-white";
        remove.innerHTML = "Remove";
        remove.addEventListener("click", () => removecart(i));
        td6.append(remove);
        tr.append(td1, td2, td3, td4, td5, td6);
        tbody.append(tr);
    }
    let totalPrice = data.reduce((acc, list) => acc + list.price * list.qty, 0);
};

const update = (index, change) => {
    if (cart[index].qty + change > 0) {
        cart[index].qty += change;
    }
    localStorage.setItem("cart",JSON.stringify(cart));
    mapper(cart);
};

const removecart = (index) => {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    mapper(cart);
};

mapper(cart);
