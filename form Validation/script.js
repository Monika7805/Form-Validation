const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a - zA - Z\-0 - 9] +\.) + [a - zA - Z]{ 2,}))$/.test(email);
}
function checkInputs(){
    //trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const emailValue = username.value.trim();
    const passwordValue = username.value.trim();
    const password2Value = username.value.trim(); 

    if(usernameValue === ''){
        setErrorFor(username,'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email,'email cannot be blank');
    } else if(!isEmail(emailValue)){
        setSuccessFor(email,'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password,'password cannot be blank');
    } else {
        setSuccessFor(password);
    }

    if(password2Value === ''){
        setErrorFor(password2,'password2 cannot be blank');
    }else if(passwordValue !== password2Value) {
        setErrorFor(password2,'password does not match');
    } else {
        setSuccessFor(password2);
    }
}