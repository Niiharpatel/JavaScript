const button = document.querySelector('button');
const popup = document.querySelector('.popup');
const close_icon = document.querySelector('.close_icon');
const body = document.querySelector('body>div');

button.addEventListener('click', (e) => {
  e.stopPropagation();
  popup.classList.add('open');
  body.classList.add('bg');
});

close_icon.addEventListener('click', (e) => {
  e.stopPropagation();
  popup.classList.remove('open');
  body.classList.remove('bg');
});
