class Student{
    constructor(name,number,age,grid,course,fees){
        this.name=name
        this.number=number
        this.age=age
        this.grid=grid
        this.course=course
        this.fees=fees
    }
    leave(){
        console.log("you can take leave");
    }
    exam(){
        console.log("Exam");
    }
}
let stu=new Student("Nisha", "9687590929", "18","5844" ,"backend", "1,25,000")
let stu2=new Student("Mita", "9687590929", "19","5888" ,"backend", "1,25,000")

// stu.leave()
// stu2.exam()
// console.log(stu,stu2);
console.log(stu.age);