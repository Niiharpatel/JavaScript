const menu_bar = document.querySelector('.menu_bar');
const close_btn = document.querySelector('.close_icon');

menu_bar.addEventListener('click', () => {
  document.querySelector('nav').style.display = 'block';
  menu_bar.style.display = 'none';
});

close_btn.addEventListener('click', () => {
  document.querySelector('nav').style.display = 'none';
  menu_bar.style.display = 'block';
});
