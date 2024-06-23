var email = document.forms['form']['email'];
var password = document.forms['form']
['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){
    if(email.value.length < 9) {
        email.style.border = "1px solid red";
        email.error.style.dsiplay = "block";
        email.focus();
        return false;
    }
    if(password.value.length < 6 ) {
        password.style.border = "1px solid red";
        pass_error.style.dsiplay = "block";
        password.focus();
        return false;
    }
}

function email_Verify(){
    if (email.value.length >= 8) {
        email.style.border = "1px solid silver";
        email.error.style.dsiplay = "none";
        email.focus();
        return true;
    }
    
}

function pass_Verify(){
    if (password.value.length >= 5) {
        password.style.border = "1px solid silver";
        pass.error.style.dsiplay = "none";
        password.focus();
        return true;

        var name = prompt('Enter your name');
        alert('You are now login' );
    }
}