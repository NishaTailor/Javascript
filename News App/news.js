let news = JSON.parse(localStorage.getItem("news")) || []

const handleData = (e) => {
    e.preventDefault();

    let data = {
        title: document.getElementById("title").value,
        img: document.getElementById("img").value,
        typesofNews: document.getElementById("typesofNews").value,
    };
    news.push(data);
    localStorage.setItem("news", JSON.stringify(news));
};

document.getElementById("newsData").addEventListener("submit", handleData);