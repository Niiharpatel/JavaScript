const dec_btn = document.querySelector('.dec');
const res_btn = document.querySelector('.res');
const inc_btn = document.querySelector('.inc');
const ans = document.querySelector('.ans');

let count = 0;

dec_btn.addEventListener('click', () => {
  --count;
  ans.textContent = count;
  if (count < 0) {
    ans.style.color = 'red';
  }
});

res_btn.addEventListener('click', () => {
  count = 0;
  ans.textContent = count;
  if (count === 0) {
    ans.style.color = '';
  }
});

inc_btn.addEventListener('click', () => {
  ++count;
  ans.textContent = count;
  if (count > 0) {
    ans.style.color = 'green';
  }
});
