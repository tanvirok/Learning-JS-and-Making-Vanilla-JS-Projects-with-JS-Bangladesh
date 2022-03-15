//Dom Selection
const result = document.getElementById('result');
const submit = document.getElementById('submit');

//Create Function
function binary(e) {
    e.preventDefault();

    const num = document.getElementById('number').value;

    if(num === '') {
        alert("Please enter a number");
    } else if (num < 0) {
        alert("Please enter a positive number");
    } else {
        result.style.visibility = 'visible';
    }
}

//Add event listener
submit.addEventListener('click', binary);