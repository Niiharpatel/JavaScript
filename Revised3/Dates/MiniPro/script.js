const form = document.querySelector('form');
const input = document.querySelector('input');
const local = document.querySelector('.local span');
const utc = document.querySelector('.utc span');
const iso = document.querySelector('.iso span');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const timeStamp = Number(input.value);
  const date = new Date(timeStamp);

  local.innerText = date.toLocaleString('en-GB', {
    dateStyle: 'full',
    timeStyle: 'full',
  });
  utc.innerText = date.toUTCString();
  iso.innerText = date.toISOString();
});
