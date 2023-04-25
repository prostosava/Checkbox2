const scalesCheckbox = document.getElementById('scales');
scalesCheckbox.addEventListener('click', clickCheckbox1);

const hornsCheckbox = document.getElementById('horns');
hornsCheckbox.addEventListener('click', clickCheckbox1);

const myBody = document.getElementById('my-background');


function clickCheckbox1() {
    if(scalesCheckbox.checked){
         myBody.style.backgroundColor = 'red'
    } 
    
    
    if(hornsCheckbox.checked){
         myBody.style.backgroundColor = 'blue'
    } 
    
    if (!scalesCheckbox.checked && !hornsCheckbox.checked){
         myBody.style.backgroundColor = 'green'  
    }
}





