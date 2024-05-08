// const btns = document.querySelectorAll('.question_btn');
// const question_text = document.querySelector('.question_text');

// btns.forEach((ele) => {
//   ele.addEventListener('click', (e) => {
//     const question =
//       e.currentTarget.parentElement.parentElement.classList.toggle('show_text');

//     question.classList.toggle('show_text');
//   });
// });

// ======================== Options - 2 ==========================

const questions = document.querySelectorAll('.question');

questions.forEach((item) => {
  const btn = item.querySelector('.question_btn');

  btn.addEventListener('click', () => {
    questions.forEach((que) => {
      if (que !== item) {
        que.classList.remove('show_text');
      }
    });

    item.classList.toggle('show_text');
  });
});
