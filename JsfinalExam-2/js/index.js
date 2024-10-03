import getValue, { createTag } from "../components/helper.js";
import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar();

let products = JSON.parse(localStorage.getItem("products")) || [];

const mapper = (data) => {
    document.getElementById("productList").innerHTML = "";
    data.map((ele) => {
        let img = createTag("img", ele.img);
        let price = createTag("p", ele.price);
        let title = createTag("h3", ele.title);
        let category = createTag("p", ele.category);
        let div = document.createElement("div");
        div.append(img, title, price, category);
        document.getElementById("productList").append(div);
    });
};

mapper(products);

// sorting and filtering

const handleSort = (orderBy) => {
    if (orderBy == "lth") {
        let temp = products.sort((a, b) => a.price - b.price);

        mapper(temp);
    } else {
        let temp = products.sort((a, b) => b.price - a.price);

        mapper(temp);
    }
};

const handleCategory = (category) => {
    let temp = products.filter((ele) => ele.category == category);
    mapper(temp);
};
document
    .getElementById("lth")
    .addEventListener("click", () => handleSort("lth"));
document
    .getElementById("htl")
    .addEventListener("click", () => handleSort("htl"));

document
    .getElementById("Man")
    .addEventListener("click", () => handleCategory("Man"));
document
    .getElementById("Woman")
    .addEventListener("click", () => handleCategory("Woman"));

document
    .getElementById("Electronic")
    .addEventListener("click", () => handleCategory("Electronic"));

// Searching

const search = (e) => {
    e.preventDefault();

    let searchValue = getValue("#search");
    let temp = products.filter((ele) => ele.title.toLowerCase().includes(searchValue.toLowerCase()));
    mapper(temp);

};

document.getElementById("searching").addEventListener("submit", search);
document.getElementById("search").addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
    }
});