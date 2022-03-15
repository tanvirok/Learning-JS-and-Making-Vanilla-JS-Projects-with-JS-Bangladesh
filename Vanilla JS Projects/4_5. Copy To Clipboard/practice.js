const btn = document.querySelector('.btn');
const input = document.querySelector('#input');

btn.onclick = function () {

    input.select();
    document.execCommand('copy');
    
    alert('It has been copied already !');
}


