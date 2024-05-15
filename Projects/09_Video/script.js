const btn = document.querySelector('.switch_btn');
const video = document.querySelector('.video_container');

btn.addEventListener('click', () => {
  btn.classList.toggle('slide');

  if (!btn.classList.contains('slide')) {
    video.play();
  } else {
    video.pause();
  }
});

// ============ PRELOADER =============

const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
  preloader.classList.add('hide_preloader');
});
