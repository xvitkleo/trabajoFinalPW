
document.querySelector('.close-modal').addEventListener('click', () => closeModal(true));
document.querySelector('.crear').addEventListener('click', () => closeModal(false));

function closeModal(closeModal) {
    if(closeModal) document.querySelector('.modal-crear').style.display = 'none';
    else if(document.querySelector('.modal_form').checkValidity()) document.querySelector('.modal-crear').style.display = 'none';
}