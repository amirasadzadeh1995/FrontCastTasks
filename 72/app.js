// const fullName = `Amir Asd`;
// const parts = fullName.split(` `);
// console.log(parts);

const product = {
  title: `book`,
  price: 69,
  get productInfo() {
    return `title: ${this.title} - price ${this.price}`;
  },
  set productInfo(value) {
    const parts = value.split(` `);
    this.title = parts[0];
    this.price = parts[1];
  },
};

product.productInfo = `book2 59`;
console.log(product.productInfo);
