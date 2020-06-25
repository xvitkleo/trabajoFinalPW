
document.querySelector('.close-modal').addEventListener('click', () => closeModal());
document.querySelector('.crear').addEventListener('click', () => closeModal());

function closeModal() {
    document.querySelector('.modal-crear').style.display = 'none';
}