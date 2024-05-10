
const form = document.getElementById('customer-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const locality = document.getElementById('locality').value;
  const state = document.getElementById('state').value;
  const postcode = document.getElementById('postcode').value;
  const country = document.getElementById('country').value;
  const productName = document.getElementById('product-name').value;
  const productQuantity = document.getElementById('product-quantity').value;

  console.log(`Name: ${name}`);
  console.log(`Address: ${address}`);
  console.log(`Locality: ${locality}`);
  console.log(`State: ${state}`);
  console.log(`Postcode: ${postcode}`);
  console.log(`Country: ${country}`);
  console.log(`Product Name: ${productName}`);
  console.log(`Product Quantity: ${productQuantity}`);
});
