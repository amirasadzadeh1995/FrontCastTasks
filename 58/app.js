let products = getSaveProducts();

const filters = {
  searchItem: "",
  availableProducts: false,
};

renderProducts(products, filters);

document
  .querySelector("#search-products")
  .addEventListener("input", function (e) {
    filters.searchItem = e.target.value;
    renderProducts(products, filters);
  });

document
  .querySelector("#add-product-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const id = uuidv4();
    const timestamp = moment().valueOf();
    products.push({
      id: id,
      title: e.target.elements.productTitle.value,
      price: "",
      exist: true,
      created: timestamp,
      updated: timestamp,
    });
    saveProducts(products);
    renderProducts(products, filters);
    e.target.elements.productTitle.value = "";
  });

document
  .querySelector("#available-products")
  .addEventListener("change", function (e) {
    filters.availableProducts = e.target.checked;
    renderProducts(products, filters);
  });
window.addEventListener(`storage`, function (e) {
  if (e.key === `products`) {
    products = JSON.parse(e.newValue);
    renderProducts(products, filters);
  }
});
const now1 = moment();

now1.locale("fa");
console.log(now1.format("MMMM Do YYYY, h:mm:ss a"));
