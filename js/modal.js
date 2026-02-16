// Эта строчка заставляет JS ждать полной загрузки HTML
document.addEventListener('DOMContentLoaded', () => {
    
    // Теперь скрипт ищет элементы только когда они ТОЧНО есть на странице
    const modal = document.querySelector('.backdrop');
    const modalBtnOpen = document.querySelector('.modal-btn-open');
    const modalBtnClose = document.querySelector('.modal-btn-close');

    const toggleModal = () => modal.classList.toggle('is-hidden');

    // Вешаем клики
    modalBtnOpen.addEventListener('click', toggleModal);
    modalBtnClose.addEventListener('click', toggleModal);
    
});