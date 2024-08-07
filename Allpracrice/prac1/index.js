let users = [];
const uiMaker = () => {
    document.getElementById("tbody").innerHTML = " ";
    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = i + 1;
        let td1 = document.createElement("td")
        td1.innerHTML = users[i].name;
        let td2 = document.createElement("td")
        td1.innerHTML = users[i].age;
        tr.append(td, td1);
        document.getElementById("tbody").append(tr);
    }
}
const handleData = (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let age = document.getElementById('age').value;

    let user = {
        name: name,
        age: age
    }
}
users.push(user)
uiMaker();
document.getElementById('userForm').addEventListener('submit', handleData)