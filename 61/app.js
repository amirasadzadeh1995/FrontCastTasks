// const productName = (title) => title;
// console.log(productName(`Book`));

const products = [
  {
    title: `Book1`,
    exist: true,
  },
  {
    title: `Book2`,
    exist: false,
  },
  {
    title: `Book3`,
    exist: true,
  },
];
const filteredProducts = products.filter((item) => item.exist == true);
console.log(filteredProducts);
