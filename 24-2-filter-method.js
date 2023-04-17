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

const productNotExist = function (products) {
  return products.filter(function (item) {
    return !item.exist;
  });
};

let Resault = productNotExist(productItems);
console.log(Resault);
