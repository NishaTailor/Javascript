class Account {
    constructor(name, accNumber) {
        this.name = name
        this.accNumber = accNumber
        this.balance = 0
    }
    deposit(amount) {
        this.balance = +amount;
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount
            console.log("balance", this.balance);
        }
        else {
            console.log("please deposit money");
        }
    }
    cheackBalance() {
        return this.balance
    }
}

class salaryAccount extends Account {
    constructor(name, accNumber) {
        super(name, accNumber)
        this.creditCard = 50000
    }
    creditCardDeposit(amount) {
        let usedAmount = 50000 - this.creditCard
        if (usedAmount > 0 && usedAmount <= amount) {
            this.creditCard += amount
            console.log("current limit", this.creditCard);
        }
        else {
            console.log("error");
        }
    }
    creditCardWithdraw(amount) {
        if (this.creditCard >= amount) {
            this.creditCard -= amount
            return amount
        }
    }
    CheackCreditcardBalance() {
        return this.creditCard
    }
}

let salary = new salaryAccount("Nisha", 5778977)
console.log(salary);
salary.deposit(5000)
console.log(salary.cheackBalance());
salary.creditCardDeposit(10000)
// console.log(salary.CheackCreditcardBalance());



// let acc=new Account("nisha","123654789")
// acc.deposit(5000)
// acc.withdraw(2000)
// console.log(acc.cheackBalance());
