// const user = {
//   id: 2,
//   email: `amirasadzadeh1995@gmail.com`,
//   userInfo: function () {
//     return `ID:${this.id} - Email: ${this.email}`;
//   },
// };

const User = function (email) {
  this.email = email;
};
const userName = new User(`test@gmail.com`);
console.log(userName);

const userName2 = new User(`test2@gmail.com`);
console.log(userName2);
