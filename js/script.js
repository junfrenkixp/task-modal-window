const buttonOpen = document.querySelector('.button');
const modal = document.querySelector('.modal');
const modalCard = modal.querySelector('.modal-card');

const openModal = () => {
  modal.classList.add('is-active');
  document.body.classList.add('no-scroll');
};

const closeModal = () => {
  modal.classList.remove('is-active');
  document.body.classList.remove('no-scroll');
};

buttonOpen.addEventListener('click', openModal);

modal.addEventListener('click', (e) => {
  if (e.target.closest('.button-close') || e.target.closest('.close')) {
    closeModal();
    return;
  }

  if (e.target === modal) {
    closeModal();
  }
});
