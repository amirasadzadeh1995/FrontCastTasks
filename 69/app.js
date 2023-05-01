// const user = {
//   id: 2,
//   email: `amirasadzadeh1995@gmail.com`,
//   userInfo: function () {
//     return `ID:${this.id} - Email: ${this.email}`;
//   },
// };

const User = function (email, id) {
  this.email = email;
  this.id = id;
};

User.prototype.userInfo = function () {
  return `ID: ${this.id} - Email: ${this.email}`;
};
const userName = new User(`test@gmail.com`, 2);
console.log(userName.userInfo());

const userName2 = new User(`test2@gmail.com`, 6);
console.log(userName2.userInfo());
