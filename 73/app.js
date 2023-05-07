class User {
  constructor(id, email) {
    this.id = id;
    this.email = email;
  }
  get userInfo() {
    return `ID: ${this.id} - Email: ${this.email}`;
  }
  set userInfo(value) {
    const parts = value.split(` `);
    this.id = parts[0];
    this.email = parts[1];
  }
}
const username = new User(2, `test@gmail.com`);
username.userInfo = `6 test2@gmail.com`;
console.log(username);
