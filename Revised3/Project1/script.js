const checkBox = document.querySelectorAll('.check_box');
const input = document.querySelectorAll('.input_goal');
const error = document.querySelector('.error_text');
const progress_bar = document.querySelector('.progress_bar');
const progress_value = document.querySelector('.progress_value');

checkBox.forEach((box) => {
  box.addEventListener('click', (e) => {
    const allInput = [...input].every((inp) => {
      //   console.log(inp.value);
      return inp.value;
    });

    if (allInput) {
      box.parentElement.classList.toggle('completed');
      progress_value.style.width = '33.33%';
    } else {
      progress_bar.classList.add('show_error');
    }
  });
});

input.forEach((inp) => {
  inp.addEventListener('focus', () => {
    progress_bar.classList.remove('show_error');
  });
});
