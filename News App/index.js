let news = JSON.parse(localStorage.getItem("news")) || [];
const handleDelete = (index) => {
    console.log(index);

    news.splice(index, 1);
    mapper(news)
    localStorage.setItem("news", JSON.stringify(news))

}

const mapper = (news) => {
    document.getElementById("newsList").innerHTML = ""
    news.map((ele, index) => {
        let title = document.createElement("h3");
        title.innerHTML = ele.title;
        let img = document.createElement("img");
        img.src = ele.img;
        let typesofNews = document.createElement("p");
        typesofNews.innerHTML = ele.typesofNews;
        let btnDlt = document.createElement("button");
        btnDlt.innerHTML = "Delete"
        btnDlt.addEventListener("click", () => handleDelete(index))
        let div = document.createElement("div");
        div.append(img, title,typesofNews, btnDlt);
        document.getElementById("newsList").append(div);
    });
};

mapper(news);