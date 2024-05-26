// async function makeRequest() {
//   console.log('hii');

//   //   throw 'Error in program';

//   throw new Error('Error in Program');
// }

// ===============================================

async function makeRequest() {
  const url = 'https://dummyjson.com/products/1';
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
}

makeRequest();

function addNumber() {
  return 1 + 2;
}

console.log(addNumber());
