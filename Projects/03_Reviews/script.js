const left_btn = document.querySelector('.less');
const right_btn = document.querySelector('.greater');
const randomButton = document.querySelector('#btn');
const image = document.querySelector('#person_img');
const name = document.querySelector('#person_name');
const job = document.querySelector('#person_job');
const text = document.querySelector('#text');

const reviews = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Susan Smith',
    job: 'WEB DEVELOPER',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing , Nemo, corporis ipsa, laborum veniam dolorem soluta totam perferendis voluptates accusantium sunt atque quae dolores corrupti inventore quod cum sequi repudiandae',
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'John Doe',
    job: 'GRAPHIC DESIGNER',
    text: 'Dolor sit amet consectetur adipisicing elit. Nemo, corporis ipsa, laborum veniam dolorem soluta totam perferendis voluptates accusantium sunt atque quae dolores corrupti inventore quod cum sequi repudiandae.',
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/8864285/pexels-photo-8864285.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Emily Johnson',
    job: 'MARKETING MANAGER',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, corporis ipsa, laborum veniam dolorem soluta totam perferendis voluptates accusantium sunt atque quae dolores corrupti inventore quod cum sequi repudiandae.',
  },
  {
    id: 4,
    img: 'https://images.pexels.com/photos/3758102/pexels-photo-3758102.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Michael Brown',
    job: 'SOFTWARE ENGINEER',
    text: 'Dolor sit amet consectetur adipisicing elit. Nemo, corporis ipsa, laborum veniam dolorem soluta totam perferendis voluptates accusantium sunt atque quae dolores corrupti inventore quod cum sequi repudiandae.',
  },
  {
    id: 5,
    img: 'https://images.pexels.com/photos/4319701/pexels-photo-4319701.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Sophia Anderson',
    job: 'CONTENT WRITER',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, corporis ipsa, laborum veniam dolorem soluta totam perferendis voluptates accusantium sunt atque quae dolores corrupti inventore quod cum sequi repudiandae.',
  },
];

let currentItem = 0;

function showPerson() {
  const item = reviews[currentItem];
  image.src = item.img;
  name.textContent = item.name;
  job.textContent = item.job;
  text.textContent = item.text;
}

window.addEventListener('DOMContentLoaded', () => {
  showPerson();
});

right_btn.addEventListener('click', () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

left_btn.addEventListener('click', () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

randomButton.addEventListener('click', () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
