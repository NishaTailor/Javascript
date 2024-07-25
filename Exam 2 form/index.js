let employees = [];
let TotalSalary = 0;

const uimaker = () => {
    document.getElementById("tbody").innerHTML = "";
    for (let i = 0; i < employees.length; i++) {

        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerHTML = i + 1;

        let td2 = document.createElement("td");
        td2.innerHTML = employees[i].name;

        let td3 = document.createElement("td");
        td3.innerHTML = employees[i].email;

        let td4 = document.createElement("td");
        td4.innerHTML = employees[i].job;

        let td5 = document.createElement("td");
        td5.innerHTML = employees[i].experience;

        let td6=document.createElement("td")
        if(employees[i].experience>5){
            td6.innerHTML="senior"
        }
        else{
            td6.innerHTML="junior"
        }
        let td7 = document.createElement("td");
        td7.innerHTML = employees[i].salary;

        tr.append(td1, td2, td3, td4, td5, td6, td7);
        document.getElementById("tbody").append(tr);
    }

    document.getElementById('TotalSalary').innerHTML = `Total salary: ${TotalSalary}`;
    document.getElementById('Totalemployees').innerHTML = `Total employees: ${employees.length}`;
}

const handleData = (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let job = document.getElementById('job').value;
    let experience = Number(document.getElementById('experience').value);
    let salary = Number(document.getElementById('salary').value);

    let employee = {
        name: name,
        email: email,
        job: job,
        experience: experience,
        salary: salary
    }

    employees.push(employee);
    TotalSalary += salary;
    uimaker();
}

document.getElementById("employeeData").addEventListener("submit", handleData);
