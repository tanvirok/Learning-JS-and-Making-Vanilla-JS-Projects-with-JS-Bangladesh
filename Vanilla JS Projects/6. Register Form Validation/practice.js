// Dom selection
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const pasword = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const btn = document.querySelector('#btn');

// showError function
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// showSuccess function
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// checkRequried function
function checkRequried(inputArr) {
    inputArr.forEach(function (input) {
        if(input.value.trim() === '') {
            showError(input, `${input.id} is requried`);
        } else{
            showSuccess(input);
        }
    })
}
// forSubmit function
function forSubmit(input) {
    const justBtn = document.getElementById('btn');
    justBtn.className = 'form-control like';
}


// event listener
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequried([username,email,password,password2]);
    forSubmit(btn);
})