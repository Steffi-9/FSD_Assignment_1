


function validate_email(){

    var email = document.getElementById("email");
    var label_1 = document.getElementById("label_1");
    label_1.innerHTML="";
    email.style.border="";
    //Expression to validate email
    let regexExp1=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    if(!regexExp1.test(email.value)){
        label_1.innerHTML="Please enter valid email address";
        label_1.style.color = "red";
        email.style.border="2px solid red";
       
    }   
   
}

function validate_password(){

    var password = document.getElementById("pwd");

    var label_2 = document.getElementById("label_2");

    label_2.innerHTML="";
    password.style.border="";

     //Expression to validate password
     let regexExp2=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
     if(!regexExp2.test(password.value)){
        label_2.innerHTML="Minimum 8 characters,at least one uppercase,lowercase,must contain at least one number";
        label_2.style.color = "red";
        password.style.border="2px solid red";
     }

}