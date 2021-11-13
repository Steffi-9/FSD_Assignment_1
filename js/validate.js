


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
        label_2.innerHTML="Minimum length 8 must contain an uppercase,lowercase & no:";
        label_2.style.color = "red";
        password.style.border="2px solid red";
     }

} 

     function validate_passwordstrength(){

        var password = document.getElementById("pwd_strenght");
        var label_2 = document.getElementById("label_2");
        var label_3= document.getElementById("label_3");
// console.log(password.value);
        //when password length is 0 donot show any msg.
        if(password.length === 0){
            label_2.innerHTML="";
            label_3.innerHTML="";
        }

        // Create an array and push all the conditions you want for password validation

        var passwordArray = new Array();
        passwordArray.push("(?=.*[a-z])"); //atleast one lowercase char
        passwordArray.push("(?=.*[0-9])"); //atleast one number
        passwordArray.push("(?=.*[A-Z])"); //atleast one uppercase char
        passwordArray.push(".{8,}");

        //check progress
        var progress=0;
        for(var i=0;i < passwordArray.length; i++){
            if( new RegExp(passwordArray[i]).test(password.value)){
                progress++;

            }
            

        }

       

        var color="";
        var strenght="";
        var text="";
        switch(progress){
            case 0:
            case 1:
            case 2:
                strenght = "weak";
                color = "red";
                text = "Minimum length 8 must contain an uppercase,lowercase & no:";
                break;
            case 3:
                strenght = "medium";
                color = "orange";
                text = "Minimum length 8 must contain an uppercase,lowercase & no:";
                break;
            case 4:
                strenght = "strong";
                color = "green"; 
                text = "";
                break;           
        }

       label_2.innerHTML = strenght;
       label_2.style.color = color;
       label_3.innerHTML = text;
        
       
}

function reenter_password(){
    // console.log("hi");
    var label_4 = document.getElementById("label_4");
    var password = document.getElementById("pwd_strenght");
    var retypepwd = document.getElementById("retypepwd");
    if( password.value != retypepwd.value){
        label_4.innerHTML="Password doesn't match";

    }else{label_4.innerHTML="";}
}

function validate_phonenumber(){
console.log("hi");
    var label_5 = document.getElementById("label_5");
    var phnumber = document.getElementById("phnumber");
   
    //Clear label when input format is true
    label_5.innerHTML=" ";
    phnumber.style.border ="";

   var regExp3=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(!regExp3.test(phnumber.value)){
        label_5.innerHTML="please enter a valid phone no:";
        phnumber.style.border ="2px solid red";
        label_5.style.color = "red";

    }

    // if(phnumber.value.match(regExp3)){
       
    //     label_5.innerHTML="";
    //     phnumber.style.border ="";
    // }else{
    //     phnumber.style.border ="2px solid red";
    //     label_5.innerHTML = "Please enter valid phone number";
    //     label_5.style.color = "red";
    // }

}

