const handleData = (e) => {
    e.preventDefault();

    let users = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        num: document.getElementById('number').value,
        ps: document.getElementById('password').value
    };


    let regexps= ^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$;/
    if(!regexps.test(users.ps));{
        console.log("passed");
    }
   



    // if (users.email.length === 0) {
    //     alert('Please enter a valid email address.');
    //     return;
    // }

    // if (users.num.length !== 10) {
    //     alert('Phone number must be exactly 10 digits long.');
    //     return;
    // }

    // if (users.ps.length < 6 ) {
    //     alert('Your password must be between 6 and 8 characters long.');
    //     return;
    // }

    // console.log(users);
}


// Click event
document.getElementById('userdata').addEventListener('submit',handleData);
