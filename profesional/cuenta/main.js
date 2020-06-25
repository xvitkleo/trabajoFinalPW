guardar_btn = document.querySelector('.guardar_btn');
document.querySelector('#inputnombre').addEventListener('change', (e) => isEmpty(e));
document.querySelector('#inputapellido').addEventListener('change', (e) => isEmpty(e));
document.querySelector('#inputtelefono').addEventListener('change', (e) => exceedMax(e));
document.querySelector('#inputurl').addEventListener('change', (e) => checkValidityForm());

function checkValidityForm() {    
    if(document.querySelector('.contactos_form').checkValidity()) guardar_btn.style.backgroundColor = 'black';
    else guardar_btn.style.backgroundColor = 'gray';
}

checkValidityForm();


function isEmpty(e) {
    if(e.target.value == '' || e.target.value.lenght == 100) {
        guardar_btn.style.backgroundColor = 'gray';
    }
    else {
        guardar_btn.style.backgroundColor = 'black';
    }
    checkValidityForm()
}

function exceedMax(e) {
    if(e.target.value.lenght =! 9) {
        guardar_btn.style.backgroundColor = 'gray';
    }
    else {
        guardar_btn.style.backgroundColor = 'black';
    }
    checkValidityForm()
}