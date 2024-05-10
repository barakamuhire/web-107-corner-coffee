

  const inventory = {
    product1: 10,
    product2: 5,
    product3: 20
  };

  const product = productInput.value;
  const quantity = parseInt(quantityInput.value, 10);

  if (!inventory[product] || quantity <= 0) {
    // if the product doesn't exist or the quantity is not positive, show an error message and return
    alert("Invalid product or quantity.");
    return;
  }

  // if we get here, the product and quantity are valid
  // you can submit the form data here or show a success message
  alert("Your product can be confirmed to buy.");
});