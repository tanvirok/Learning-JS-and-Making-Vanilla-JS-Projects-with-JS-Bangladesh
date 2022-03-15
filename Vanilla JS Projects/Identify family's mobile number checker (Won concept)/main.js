// Dom selection 
const form = document.querySelector('#form');
const number = document.querySelector('#number');
const result = document.querySelector('#result');

// Event Listener
form.addEventListener('submit', function(e) {
    e.preventDefault();

// if else statement
if(number.value == '01677765447') {
    result.innerHTML = `This is your Father's mobile number`;
} else if(number.value == '01776385180') {
    result.innerHTML = `This is Tonmoy's mobile number`;
} else if(number.value == '01772132732') {
    result.innerHTML = `This is Shanta Apu's mobile number`;
} else if(number.value == '01824252206') {
    result.innerHTML = `This is Hafsa Ammu's mobile number`;
} else if(number.value == '01783857113') {
    result.innerHTML = `This is Tasfiq Ammu's mobile number`;
} else if(number.value == '01771126656') {
    result.innerHTML = `This is Just Ammu's mobile number which means Tasfiq's boro Ammu`;
} else if(number.value == '01959858078') {
    result.innerHTML = `This is Mama's mobile number`;
} else{
    alert("Input your familly's number please !")
}



})