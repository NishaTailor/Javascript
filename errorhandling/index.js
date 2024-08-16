const divide=(a,b)=>{
    if (a==0) {
        throw new Error("a Invalid")
    }
    if (b==0) {
        throw new Error("b Invalid")  
    }
    return a/b
}
console.log("before divide");
try {
    console.log(divide(10,0));
    
} 
catch (error) {
    console.log("error",error.message)
    
}

finally{
    console.log("final");
    
}
// console.log(divide(100,0));

console.log("after divide");
