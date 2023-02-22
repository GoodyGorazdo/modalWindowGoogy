
document.addEventListener('DOMContentLoaded', () => {
  const modal = new ModalWindow({
    isOpen: (modal) => {
      console.log('opened');
    },
    isClose: (modal) => {
      console.log('closed');
    },
  });
});
