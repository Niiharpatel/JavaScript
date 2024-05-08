const toggle_btn = document.querySelector('.toggle_btn');
const side_bar = document.querySelector('#bar_main');
const close_btn = document.querySelector('#close_btn');

toggle_btn.addEventListener('click', () => {
  side_bar.classList.toggle('show_sidebar');
});

close_btn.addEventListener('click', () => {
  side_bar.classList.remove('show_sidebar');
});
