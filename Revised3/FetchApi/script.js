// fetch('https://dummyjson.com/products')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// ======================= POST ===========================

fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'BMW Pencil',
    city: 'Valsad',
    /* other product data */
  }),
})
  .then((res) => res.json())
  .then(console.log)
  .catch((err) => console.log(err));
