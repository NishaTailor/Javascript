// let str = "javascript"
// let n = str.length
// console.log(n);

// let str = "javascript"
// let n = str.length
// console.log(str);

// let str = "javascript"
// let n=str.length
// for(let i=0;i<str.length;i++)
// console.log(str[i]);

// let str="javascript"
// console.log(str.toUpperCase());

// let str="javascript"
// console.log(str.split("c"));

// let str="javascript"
// console.log(str.replace("a","n"));

// let str="javascript"
// console.log(str.replaceAll("a","c"));

// let str="javascript"
// console.log(str.includes("va"));

// let str="JAVASCRIPT"
// console.log(str.toLowerCase());

// let str="javascript"
// console.log(str.startsWith("j"));

let str = "javascript"
let n = str.length
for (let i = 0; i < str.length; i++) {
    if (i % 2 == 0) {
        console.log(str[i].toUpperCase());
    }
    else {
        console.log(str[i].toLowerCase());
    }
}

