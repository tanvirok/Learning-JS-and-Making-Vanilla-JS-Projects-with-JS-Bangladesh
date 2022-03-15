// Dom Selection
const username = document.querySelector('#username');
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');


// show error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// show success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
    
}
// for email validation
function isValidEmail (email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// even listener
form.addEventListener('submit', function(e) {
    e.preventDefault();

// username
if(username.value === '') {
    showError(username, 'Username is required');
} else{
    showSuccess(username);
}
// email validation
if(email.value === '') {
    showError(email, 'Email is required');
} else if(!isValidEmail(email.value)) {
    showError(email, 'Email is not valid');
} else{
    showSuccess(email);
}
// password 
if(password.value === '') {
    showError(password, 'Password is required');
} else{
    showSuccess(password);
}
// password2
if(password2.value === '') {
    showError(password2, 'Confrim password is required');
} else{
    showSuccess(password2);
}


});

// Project's cradit (https://www.youtube.com/watch?v=-McX3pJWhl0&list=PL6f7IPPkpDKn95cjancd6ySSJaa7W39ZK&index=2)
