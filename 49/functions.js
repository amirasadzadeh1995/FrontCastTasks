const getSaveProducts = function () {
  const productsJSON = localStorage.getItem("products");
  if (productsJSON !== null) {
    return JSON.parse(productsJSON);
  } else {
    return [];
  }
};

const saveProducts = function (products) {
  localStorage.setItem("products", JSON.stringify(products));
};

const removeProduct = function (id) {
  const productIndex = products.findIndex(function (item) {
    return item.id === id;
  });
  if (productIndex > -1) {
    products.splice(productIndex, 1);
  }
};

const renderProducts = function (products, filters) {
  let filteredProducts = products.filter(function (item) {
    return item.title.toLowerCase().includes(filters.searchItem.toLowerCase());
  });
  filteredProducts = filteredProducts.filter(function (item) {
    if (filters.availableProducts) {
      return item.exist;
    } else {
      return true;
    }
  });
  document.querySelector("#products").innerHTML = "";
  filteredProducts.forEach(function (item) {
    document.querySelector("#products").appendChild(createProductDOM(item));
  });
};

const createProductDOM = function (product) {
  const productEl = document.createElement("div");
  const checkBox = document.createElement("input");
  const productItem = document.createElement("span");
  const removeButton = document.createElement("button");

  checkBox.setAttribute("type", "checkbox");
  productEl.appendChild(checkBox);

  productItem.textContent = product.title;
  productEl.appendChild(productItem);

  removeButton.textContent = "Remove";
  productEl.appendChild(removeButton);
  removeButton.addEventListener("click", function () {
    removeProduct(product.id);
    saveProducts(products);
    renderProducts(products, filters);
  });

  return productEl;
};
