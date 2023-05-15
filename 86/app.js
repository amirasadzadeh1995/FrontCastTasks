// username
// total price
// products: book1, book2, book3

const cartDetails = (username, totalPrice, ...products) => {
  console.log(`Username: ${username}`);
  console.log(`Total Price: ${totalPrice}`);
  console.log(`Products: ${products.join(`, `)}`);
};
cartDetails(`amirasd`, 12, `book1`, `book2`, `book3`);
