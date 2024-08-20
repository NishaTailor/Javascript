let count = 0
let count2 = 0
let count3 = 0
let count4 = 0
let count5 = 0

let maxCount = parseInt(document.getElementById('count').innerHTML)
let maxCount2 = parseInt(document.getElementById('count2').innerHTML)
let maxCount3 = parseInt(document.getElementById('count3').innerHTML)
let maxCount4 = parseInt(document.getElementById('count4').innerHTML)
let maxCount5 = parseInt(document.getElementById('count5').innerHTML)

setTimeout(() => {
    let id = setInterval(() => {
        count += 1;
        document.getElementById('count').innerHTML = count;
        if (count == maxCount) {
            clearInterval(id)
        }
    }, 10);
}, 1000);

setTimeout(() => {
    let id2 = setInterval(() => {
        count2 += 1;
        document.getElementById('count2').innerHTML = count2;
        if (count2 == maxCount2) {
            clearInterval(id2);
        }
    }, 10);
}, 2000);

setTimeout(() => {
    let id3 = setInterval(() => {
        count3 += 1;
        document.getElementById('count3').innerHTML = count3;
        if (count3 == maxCount3) {
            clearInterval(id3);
        }
    }, 10);
}, 3000);

setTimeout(() => {
    let id4 = setInterval(() => {
        count4 += 1;
        document.getElementById('count4').innerHTML = count4;
        if (count4 == maxCount4) {
            clearInterval(id4);
        }
    }, 10);
}, 4000);

setTimeout(() => {
    let id5 = setInterval(() => {
        count5 += 1;
        document.getElementById('count5').innerHTML = count5;
        if (count5 == maxCount5) {
            clearInterval(id5);
        }
    }, 10);
}, 5000); 
