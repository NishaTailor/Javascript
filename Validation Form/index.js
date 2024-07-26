const handleData = (e) => {
    e.preventDefault();

    let Name = document.getElementById("Name").value;
    let Email = document.getElementById("Email").value;
    let password = document.getElementById("password").value;
    let number = document.getElementById("number").value;

        let user = {
            Name:Name,
            Email:Email,
            password:password,
            number:number 
        }
        
        let regexnumber=/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
        if(!(regexnumber.test(user.number))){
            document.getElementById('number').style.border="1px solid red"
        }
        else{
            document.getElementById('number').style.border="1px solid green"
        }
        
        document.getElementById('password').addEventListener("input",()=>{
            let password = document.getElementById("password").value;
        })
        
        let regexpassword=/"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"/
        if(!regexpassword.test(password)){
            if(!(regexnumber.test(user.number))){
                document.getElementById('password').style.border="1px solid red"
            }
            else{
                document.getElementById('password').style.border="1px solid green"
            }
        }
        document.getElementById("password").classList.add('error')
        document.getElementById("password").classList.remove('error')
 



    // if (Name.length < 3) {
    //     alert("Username must be at least 3 characters long.");
    //     return;

    // let regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!regexemail.test(Email)) {
    //     alert("Please enter a valid email address.");
    //     return;
    // }

    // if (password.length < 6) {
    //     alert("Password must be at least 6 characters long.");
    //     return;
    // }

    // console.log(users);
}

document.getElementById('userdata').addEventListener('submit',handleData);

