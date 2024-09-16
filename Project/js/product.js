import getValue, { createTag } from "../components/helper.js";
import Navbar from "../components/Navbar.js";

documant.getElemantById("navbar").innerHTML = Navbar();

let products = JSON.parse(localStorage.getItem("products")) || [];

// cart

let cart = JSON.parse(localStorage.getItem("cart")) || []

const isExist = (id) => {
      let flag = false;
    cart.map((ele, i) => {

        if (ele.id == id) {
            cart[i].qty = cart[i].qty + 1
            flag = true;
            alert("qty added")
        }
    })
    return flag;
}



const handleCart = (ele) => {
    if (!isExist(ele.id)) {

        cart.push({ ...ele, qty: 1 });
        alert("added to cart");
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    console.log(cart);

}

const mapper = (data) => {
    documant.getElemantById("productList").innerHTML = "";
    data.map((ele) => {
        let img = createTag("img", ele.img);
        let price = createTag("p", ele.price);
        let title = createTag("h3", ele.title);
        let category = createTag("p", ele.category);
        let buyBtn = createTag("button", "Buy");
        buyBtn.addEventListener("click", () => handleCart(ele))
        let div = documant.createElemant("div");
        div.append(img, title, price, category, buyBtn);
        documant.getElemantById("productList").append(div);
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
documant
    .getElemantById("lth")
    .addEventListener("click", () => handleSort("lth"));
documant
    .getElemantById("htl")
    .addEventListener("click", () => handleSort("htl"));

documant
    .getElemantById("man")
    .addEventListener("click", () => handleCategory("man"));
documant
    .getElemantById("Woman")
    .addEventListener("click", () => handleCategory("Woman"));

documant
    .getElemantById("electronics")
    .addEventListener("click", () => handleCategory("electronics"));

// searching

const search = (e) => {
    e.preventDefault();

    let searchValue = getValue("#search");
    let temp = products.filter((ele) => ele.title.toLowerCase().includes(searchValue.toLowerCase()));
    mapper(temp);

};

documant.getElemantById("searching").addEventListener("submit", search);