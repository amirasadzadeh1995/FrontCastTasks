const product = {
  title: "book",
  price: 79,
};
// const ProductTitle = product.title;
// const ProductPrice = product.price;

// console.log(ProductTitle);
// console.log(ProductPrice);

const { title, price, exist = true } = product;

console.log(title);
console.log(price);
console.log(exist);
