const container = document.querySelector('.container');

// const img = document.querySelector('img');

// for (let i = 1; i <= 100; i++) {
//   const newimg = img.cloneNode();
//   newimg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
//   container.append(newimg);
// }

// ============================== 2nd way ==========================================

// for (let i = 1; i <= 100; i++) {
//   const img = document.createElement('img');
//   img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
//   container.append(img);
// }

// ===================================================================

for (let i = 1; i < 100; i++) {
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img_div');

  const newImg = document.createElement('img');
  newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

  const para = document.createElement('p');
  para.innerText = i;

  imgContainer.append(newImg, para);

  container.append(imgContainer);

  //   ======================================= OR =======================

  //     const myHtml = `
  //     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="">
  //     <p>${i}</p>
  //    `;

  //    imgContainer.innerHTML = myHtml;
}

document.querySelector('body > div.container > div:nth-child(3)').remove();
