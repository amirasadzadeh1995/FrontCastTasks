// const User = function (email, id) {
//   this.email = email;
//   this.id = id;
// };

// User.prototype.userInfo = function () {
//   return `ID: ${this.id} - Email: ${this.email}`;
// };
// const userName = new User(`test@gmail.com`, 2);
// console.log(userName.userInfo());

class User {
  constructor(id, email) {
    this.id = id;
    this.email = email;
  }
  userInfo() {
    return `ID: ${this.id} - Email: ${this.email}`;
  }
}
const userName = new User(`test@gmail.com`, 2);
console.log(userName.userInfo());
