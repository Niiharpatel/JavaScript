const btn = document.querySelector('#open_modal');
const modal = document.querySelector('.model_box');
const modal_content = document.querySelector('.modal_content');
const close_btn = document.querySelector('#close_btn');

btn.addEventListener('click', () => {
  modal.classList.add('show_modal');
});

close_btn.addEventListener('click', () => {
  modal.classList.remove('show_modal');
});
