const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color_name');
const simple_color = document.querySelector('.simple');
const hex_color = document.querySelector('.hex');

btn.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[randomNumber];

  color.textContent = colors[randomNumber];
});
