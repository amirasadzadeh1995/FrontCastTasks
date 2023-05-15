const checkOut = (...price) => {
  let sum = 0;
  price.forEach((item) => (sum += item));
  return sum;
};
console.log(checkOut(30, 50, 70, 80, 1));
