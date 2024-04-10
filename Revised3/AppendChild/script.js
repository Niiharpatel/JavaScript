const h1 = document.querySelector('h1');
const container = document.querySelector('.container');
const card = document.querySelector('.card');
const input = document.querySelector('input');
const form = document.querySelector('form');

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

// ==================== CLICK SIMULATE ============================

// const intervalId = setInterval(() => {
//   if (count === 50) {
//     clearInterval(intervalId);
//   }
//   card.click();
// }, 100);

// ==================== FOCUS SIMULATE ============================

// setTimeout(() => {
//   input.focus();
// }, 1000);

// setTimeout(() => {
//   input.blur();
// }, 3000);

// ==================== SUBMIT SIMULATE ============================

// setTimeout(() => {
//   form.submit();
// }, 2000);

// setTimeout(() => {
//   form.reset();
// }, 4000);

// =================================================================

// card.addEventListener('mousedown', (e) => {
//   console.log(e);
//   const newCard = document.createElement('div');
//   newCard.classList.add('card');
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// card.addEventListener('mouseup', (e) => {
//   console.log(e);
//   const newCard = document.createElement('div');
//   newCard.classList.add('card');
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// card.addEventListener('mouseenter', (e) => {
//   console.log(e);
//   const newCard = document.createElement('div');
//   newCard.classList.add('card');
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// card.addEventListener('mouseleave', (e) => {
//   console.log(e);
//   const newCard = document.createElement('div');
//   newCard.classList.add('card');
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// card.addEventListener('mousemove', (e) => {
//   console.log(e);
//   const newCard = document.createElement('div');
//   newCard.classList.add('card');
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// card.addEventListener('mouseout', (e) => {
//   console.log(e);
//   const newCard = document.createElement('div');
//   newCard.classList.add('card');
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// card.addEventListener('mouseover', (e) => {
//   console.log(e);
//   const newCard = document.createElement('div');
//   newCard.classList.add('card');
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// card.addEventListener('wheel', (e) => {
//   console.log(e);
//   const newCard = document.createElement('div');
//   newCard.classList.add('card');
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// card.addEventListener('touchstart', (e) => {
//   console.log(e);
//   const newCard = document.createElement('div');
//   newCard.classList.add('card');
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// card.addEventListener('touchend', (e) => {
//   console.log(e);
//   const newCard = document.createElement('div');
//   newCard.classList.add('card');
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// card.addEventListener('scroll', (e) => {
//   console.log(e);
//   const newCard = document.createElement('div');
//   newCard.classList.add('card');
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// card.addEventListener('touchmove', (e) => {
//   console.log(e);
//   const newCard = document.createElement('div');
//   newCard.classList.add('card');
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// h1.addEventListener('drag', (e) => {
//   console.log(e.type);
//   const newCard = document.createElement('div');
//   newCard.classList.add('card');
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// card.addEventListener('pointerenter', (e) => {
//   console.log(e);
//   const newCard = document.createElement('div');
//   newCard.classList.add('card');
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// card.addEventListener('pointerleave', (e) => {
//   console.log(e);
//   const newCard = document.createElement('div');
//   newCard.classList.add('card');
//   newCard.innerText = count++;
//   container.append(newCard);
// });
