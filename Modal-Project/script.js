'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let closemodal = document.querySelector('.close-modal');
let showmodals = document.querySelectorAll('.show-modal');

function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < showmodals.length; i++) {
  showmodals[i].addEventListener('click', showModal);
}
closemodal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
