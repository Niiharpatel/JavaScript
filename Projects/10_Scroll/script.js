const header = document.querySelector('header');
const scrollToTop = document.querySelector('.top_scroll_btn');
const toggle_btn = document.querySelector('.toggle_menu');
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const navHeight = header.getBoundingClientRect().height;

  const scrollHeight = window.pageYOffset;

  if (scrollHeight > navHeight) {
    header.classList.add('header_bg');
  } else {
    header.classList.remove('header_bg');
  }
});

scrollToTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

toggle_btn.addEventListener('click', () => {
  nav.classList.toggle('show');
});
