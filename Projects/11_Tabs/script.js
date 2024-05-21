const btns = document.querySelectorAll('.btn');

const content = document.querySelector('.content');

const sections = document.querySelectorAll('.sec');

content.addEventListener('click', (e) => {
  const id = e.target.dataset.id;

  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });

    sections.forEach((article) => {
      article.classList.remove('active');
    });

    const element = document.getElementById(id);

    element.classList.add('active');
  }
});
