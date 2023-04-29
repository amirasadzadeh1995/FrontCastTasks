const product = {
  title: `book`,
  productName() {
    return `Product Name: ${this.title}`;
  },
};
console.log(product.productName());
