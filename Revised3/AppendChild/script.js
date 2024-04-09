const h1 = document.querySelector('h1');
const container = document.querySelector('.container');
const card = document.querySelector('.card');

// for (let i = 2; i <= 100; i++) {
//   const newCard = card.cloneNode();
//   newCard.innerText = i;
//   container.appendChild(newCard);
// }

// =============================================

// h1.onclick = function () {
//   console.log('hell');
// };

// =============================================

// h1.addEventListener('click', () => {
//   console.log('helloo');
// });

// =================================================

let count = 1;
card.addEventListener('click', () => {
  const newCard = document.createElement('div');
  newCard.classList.add('card');
  newCard.innerText = count++;
  container.append(newCard);
});
