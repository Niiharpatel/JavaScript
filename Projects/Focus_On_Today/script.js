const checkBox = document.querySelectorAll('.check_box');
const input = document.querySelectorAll('.input_goal');
const error = document.querySelector('.error_text');
const progress_label = document.querySelector('.bar');
const progress_bar = document.querySelector('.progress_bar');
const progress_value = document.querySelector('.progress_value');

const allQuotes = [
  'Raise the bar by completing your goals!',
  'Well begun is half done!',
  'Just a step away, keep going!',
  'Whoa! you just completed all the goals, time for chill :D',
];

const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {
  first: { name: '', completed: false },
  second: { name: '', completed: false },
  third: { name: '', completed: false },
};
let completeGoalCount = Object.values(allGoals).filter(
  (goal) => goal.completed
).length;

progress_value.style.width = `${(completeGoalCount / 3) * 100}%`;
progress_value.firstElementChild.innerText = `${completeGoalCount}/3 Completed`;
progress_label.innerText = allQuotes[completeGoalCount];

checkBox.forEach((box) => {
  box.addEventListener('click', (e) => {
    const allInput = [...input].every((inp) => {
      return inp.value;
    });

    if (allInput) {
      box.parentElement.classList.toggle('completed');

      const input_id = box.nextElementSibling.id;
      allGoals[input_id].completed = !allGoals[input_id].completed;
      completeGoalCount = Object.values(allGoals).filter(
        (goal) => goal.completed
      ).length;
      progress_value.style.width = `${(completeGoalCount / 3) * 100}%`;
      progress_value.firstElementChild.innerText = `${completeGoalCount}/3 Completed`;
      progress_label.innerText = allQuotes[completeGoalCount];

      localStorage.setItem('allGoals', JSON.stringify(allGoals));
    } else {
      progress_bar.classList.add('show_error');
    }
  });
});

input.forEach((inp) => {
  inp.value = allGoals[inp.id].name;

  if (allGoals[inp.id].completed) {
    inp.parentElement.classList.add('completed');
  }

  inp.addEventListener('focus', () => {
    progress_bar.classList.remove('show_error');
  });

  inp.addEventListener('input', (e) => {
    if (allGoals[inp.id].completed) {
      inp.value = allGoals[inp.id].name;
      return;
    }
    allGoals[inp.id].name = inp.value;

    localStorage.setItem('allGoals', JSON.stringify(allGoals));
  });
});
