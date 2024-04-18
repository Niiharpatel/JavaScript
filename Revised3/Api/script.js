const img = document.querySelector('img');
const btn = document.querySelector('button');

// let data = fetch('https://dog.ceo/api/breeds/image/random')
//   .then((response) => response.json())
//   .then((data) => {
//     img.src = data.message;
//   });

btn.addEventListener('click', () => {
  //   fetch('https://dog.ceo/api/breeds/image/random')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       img.src = data.message;
  //     });

  const xhr = new XMLHttpRequest();

  xhr.responseType = 'json';
  console.log('  xhr:', xhr);

  //   xhr.addEventListener('load', () => {
  //     img.src = xhr.response.message;
  //   });

  xhr.onload = () => {
    img.src = xhr.response.message;
  };

  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
  xhr.send();
});
