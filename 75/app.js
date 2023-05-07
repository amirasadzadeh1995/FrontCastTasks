const products = [
  {
    title: `book1`,
    price: 79,
  },
  {
    title: `book2`,
    price: 100,
  },
  {
    title: `book3`,
    price: 400,
  },
];
getProducts = () => {
  setTimeout(() => {
    const fetchProducts = products.map((item) => {
      return `Product: ${item.title} - Price: ${item.price}`;
    });
    console.log(fetchProducts);
  }, 2000);
};
createProduct = (callback) => {
  setTimeout(() => {
    products.push({
      title: `new book`,
      price: 8000,
    });
    callback();
  }, 3000);
};
createProduct(getProducts);
