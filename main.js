contrasena = 'psw';
let btn_ingresar = document.querySelector('.ingresar');
btn_ingresar.addEventListener("click", function(e) {    
    if (document.querySelector('#contrasena-group').firstElementChild.value == contrasena) {
        let posicion = document.querySelector('#user-group').firstElementChild.value;
        switch (posicion) {
            case 'admin':
                e.preventDefault();
                window.location.href = 'administrador/usuarios/usuarios.html';
                break;
            case 'prof':
                e.preventDefault();
                window.location.href = 'profesional/cuenta/cuenta.html';
                break;
            default:
                break;
        }
    }    
})