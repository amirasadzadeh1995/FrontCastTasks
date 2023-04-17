document.querySelector("#add-product").addEventListener("click", function (e) {
  console.log("product created");
});

document
  .querySelector("#remove-all-products")
  .addEventListener("click", function (e) {
    document.querySelectorAll(".product").forEach(function (item) {
      item.remove();
    });
  });
