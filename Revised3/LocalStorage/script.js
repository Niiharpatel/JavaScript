const nameElement = document.querySelector('.name_value');
const nameInput = document.querySelector('.name');
const ageElement = document.querySelector('.age_value');
const ageInput = document.querySelector('.age');

// nameElement.innerText = localStorage.myName;
// nameElement.innerText = localStorage.getItem('myName');

// input.addEventListener('input', (e) => {
//   //   localStorage.myName = e.target.value;
//   localStorage.setItem('myName', e.target.value);
//   nameElement.innerText = localStorage.getItem('myName');
// });

// ageElement.innerText = localStorage.getItem('myAge');

// age.addEventListener('input', (e) => {
//   //   localStorage.myage = e.target.value;
//   localStorage.setItem('myAge', e.target.value);
//   ageElement.innerText = localStorage.getItem('myAge');
// });

// ===============================================

const user = JSON.parse(localStorage.getItem('user')) || {};

if (user.name) {
  nameElement.innerText = user.name;
}
if (user.age) {
  ageElement.innerText = user.age;
}

nameInput.addEventListener('input', (e) => {
  user.name = e.target.value;
  localStorage.setItem('user', JSON.stringify(user));
  nameElement.innerText = e.target.value;
});

ageInput.addEventListener('input', (e) => {
  user.age = e.target.value;
  localStorage.setItem('user', JSON.stringify(user));
  ageElement.innerText = e.target.value;
});
