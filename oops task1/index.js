class employee {
    constructor(name, number, job) {
        this.name = name
        this.number = number
        this.job = job
        this.salary = 0
        this.totalLeaveDays = 0;
    }
    leave(days) {
        this.totalLeaveDays += days;
        if (this.totalLeaveDays > 2) {
            console.log('Monthly leave day limit is 2. So Please take leaves for only emergency');
        } else {
            console.log(`be present next time`);
        }
    }
    resign() {
        console.log("Goodbye!!!");
    }
}
let emp = new employee("Nisha", 9687590929, "BackEnd developer", 15000)
console.log(emp);
emp.leave()
emp.resign()

