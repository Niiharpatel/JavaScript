const container = document.querySelector('#container');
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

container.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Container event');
});

parent.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Parent event');
});

child.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Child event');
});

// ==================

const div = document.querySelector('#btn');

div.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    console.log(event.target);
  }
});
