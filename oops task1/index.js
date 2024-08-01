class employee {
    constructor(name, number, job, salary) {
        this.name = name
        this.number = number
        this.job = job
        this.salary = 0
    }
    leave() {
        if (employee)
            console.log("you can take leave");
    }
    resign() {
        console.log("Goodbye!!!");
    }
}
let emp = new employee("Nisha", 9687590929, "BackEnd developer", 15000)
console.log(emp);
emp.leave(10000)
emp.resign()