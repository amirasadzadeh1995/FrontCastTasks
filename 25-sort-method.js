const productItems = [
  {
    title: `book1`,
    exist: true,
  },
  {
    title: `book2`,
    exist: false,
  },
  {
    title: `book3`,
    exist: true,
  },
  {
    title: `book4`,
    exist: false,
  },
  {},
];

const sortProducts = function (products) {
  products.sort(function (a, b) {
    if (a.exist === true && b.exist === false) {
      return -1;
    } else if (b.exist === true && a.exist === false) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortProducts(productItems);
console.log(productItems);
