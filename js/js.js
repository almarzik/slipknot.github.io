document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('contacts-modal');
  const openButtons = document.querySelectorAll('.modal__btn');
  const closeBtn = modal.querySelector('.modal__close');
  const overlay = modal.querySelector('.modal__overlay');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('modal--active');
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal--active');
  });

  overlay.addEventListener('click', () => {
    modal.classList.remove('modal--active');
  });
});

const burger = document.getElementById('burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

  document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.toggle');

    toggles.forEach(toggle => {
      const header = toggle.querySelector('.toggle__header');
      const icon = toggle.querySelector('.toggle__icon');

      header.addEventListener('click', () => {
        
        toggles.forEach(otherToggle => {
          if (otherToggle !== toggle) {
            otherToggle.classList.remove('toggle--active');
            otherToggle.querySelector('.toggle__icon').textContent = '+';
          }
        });

        
        toggle.classList.toggle('toggle--active');

       
        const isOpen = toggle.classList.contains('toggle--active');
        icon.textContent = isOpen ? '×' : '+';
      });
    });
  });

