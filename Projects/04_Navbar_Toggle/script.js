const bar = document.querySelector('.bar');
const list = document.querySelector('.list');
const nav = document.querySelector('nav');

bar.addEventListener('click', () => {
  nav.classList.toggle('none');
});
