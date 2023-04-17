const getSaveProducts = function () {
  const productsJSON = localStorage.getItem("products");
  if (productsJSON !== null) {
    products = JSON.parse(productsJSON);
  }
};
