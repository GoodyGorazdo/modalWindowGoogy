
document.addEventListener('DOMContentLoaded', () => {
  const modal = new ModalWindow({
    isOpen: (modal) => {
      console.log('opened');
    },
    isClose: (modal) => {
      console.log('closed');
    },
  });

  const modalEl = document.getElementById('modal-window');

  modalEl.addEventListener('first:open', () => console.log('first:open'));
  modalEl.addEventListener('first:close', () => console.log('first:close'));

  modalEl.addEventListener('second:open', () => console.log('second:open'));
  modalEl.addEventListener('second:close', () => console.log('second:close'));

  modalEl.addEventListener('third:open', () => console.log('third:open'));
  modalEl.addEventListener('third:close', () => console.log('third:close'));

  modalEl.addEventListener('fourth:open', () => console.log('fourth:open'));
  modalEl.addEventListener('fourth:close', () => console.log('fourth:close'));
});
