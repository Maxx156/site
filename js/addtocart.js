function addToCart(productName, productPrice) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: productName, price: productPrice });
  localStorage.setItem("cart", JSON.stringify(cart));
}

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = ""; // Очистить корзину перед отображением

  if (cart.length === 0) {
    cartDiv.innerHTML = "";
    return;
  }

  cart.forEach((item) => {
    const productDiv = document.createElement("div");
    productDiv.textContent = `${item.name} - ${item.price} руб.`;
    cartDiv.appendChild(productDiv);
  });
}

function clearCart() {
  localStorage.removeItem("cart");
  displayCart();
}

// Вызов функции для отображения корзины при загрузке страницы
displayCart();
