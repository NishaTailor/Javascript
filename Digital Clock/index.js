const date = new Date()
setInterval(() => {
    const date = new Date()
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    document.getElementById("hrs").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
}, 1000); 

let Day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

setTimeout(() => {
    const date = new Date()
    document.getElementById("day").innerHTML =Day[5] + ", " + date.getDate() + "  " + months[7]
}, 86,400);




