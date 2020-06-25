document.querySelector('.boton.crear-usuario_btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.modal-crear').style.display = 'flex';
})

document.querySelector('.close-modal').addEventListener('click', () => closeModal());
document.querySelector('.registrar-usuario').addEventListener('click', () => closeModal());

function closeModal() {
    document.querySelector('.modal-crear').style.display = 'none';
}