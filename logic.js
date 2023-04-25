const scalesCheckbox = document.getElementById('scales');
scalesCheckbox.addEventListener('click', clickCheckbox1);

const hornsCheckbox = document.getElementById('horns');
hornsCheckbox.addEventListener('click', clickCheckbox2);

const myBody = document.getElementById('my-background');


function clickCheckbox1() {
    myBody.style.backgroundColor = 'red'
}

function clickCheckbox2() {
    myBody.style.backgroundColor = 'blue'

}




