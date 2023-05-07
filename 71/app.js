class User {
  constructor(id, email) {
    this.id = id;
    this.email = email;
  }
}
class Job extends User {
  constructor(id, email, jobTitle) {
    super(id, email);
    this.jobTitle = jobTitle;
  }
}
const userName = new Job(`test@gmail.com`, 2, `Developer`);
console.log(userName);
