//const product = {
//  title: `book`,
//  price: 79,
//};

//const productJson = JSON.stringify(product);
//console.log(productJson);

//localStorage.setItem(`product`, productJson);

const productJson = localStorage.getItem(`product`);
const product = JSON.parse(productJson);
console.log(`title: ${product.title} - price: ${title.price}`);
