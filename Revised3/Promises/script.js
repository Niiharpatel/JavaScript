const btn = document.querySelector('button');

const promise = new Promise((resolve, reject) => {
  //   resolve({ name: 'Nihar' });
  //   reject('Promise Rejected');
  //   ============
  //   setTimeout(() => {
  //     resolve('Promise Resolve');
  //   }, 4000);
  // ===============
  //   btn.addEventListener('click', () => {
  //     resolve('Promise Resolve');
  //   });
  // =========
  let age = 18;
  if (age >= 18) {
    resolve('you are eligible');
  } else {
    reject('Not eligible');
  }
});

setTimeout(() => {
  console.log('Hii');
});

promise
  .then((response) => {
    console.log(response);
    return 100;
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('Finally');
  });
