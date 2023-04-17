const cardItems = [`book1`, `book2`, `book3`, `book4`];

for (let count = 0; count < cardItems.length; count++) {
  const num = count + 1;
  const productName = cardItems[count];
  console.log(`${num} product Name : ${productName} `);
}
