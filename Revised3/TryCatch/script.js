// try {
//   console.log(a);
// } catch (error) {
//   console.dir(error);
// }

// console.log(2 + 1);

// ============================================

async function makeRequest() {
  try {
    const url = 'https://dummyjson.com/products/1';
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  } catch (err) {
    console.log(err.message);
  }

  console.log('hiii');
}

makeRequest();
