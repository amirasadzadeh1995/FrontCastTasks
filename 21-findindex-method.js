const cardItems = [
  {
    title: `book1`,
    price: 80,
  },
  {
    title: `book2`,
    price: 73,
  },
  {
    title: `book3`,
    price: 68,
  },
];
const findProducts = function (cart, productTitle) {
  const indexValue = cart.findIndex(function (item, index) {
    return item.title.toLowerCase() === productTitle.toLowerCase();
  });
  return cart[indexValue];
};

const resault = findProducts(cardItems, `Book3`);

console.log(resault);
