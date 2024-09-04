import { createTag } from "../components/helper.js";
import Navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let products = JSON.parse(localStorage.getItem("products")) || [];



const mapper = (data) => {

    data.map((ele) => {

        let img = createTag("img", ele.img)
        let price = createTag("h4", ele.price)
        let title = createTag("h2", ele.title)
        let category = createTag("p", ele.category)
        let div = document.createElement("div")
        div.append(img, title, price, category)
        document.getElementById("productList").append(div)
    })

}
mapper(products)