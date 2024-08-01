class employee{
    constructor(name,number,job,salary){
        this.name=name
        this.number=number
        this.job=job
        this.salary=salary
    }
    leave(name){
        console.log("you can take leave");
    }
    resign(){
        console.log("hello");
    }
}
let emp=new employee("Nisha",9687590929,"BackEnd developer",15000)
console.log(emp);
emp.leave()
emp.resign()