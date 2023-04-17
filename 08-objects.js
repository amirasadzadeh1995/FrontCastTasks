let userInfoOne = {
  userId: 28,
  userName: `amirasd1`,
  role: `admin`,
};

let userInfoOTwo = {
  userId: 30,
  userName: `test`,
  role: `test`,
};

let fetchUserData = function (user) {
  console.log(`user name is: ${user.userName}`);
};
fetchUserData(userInfoOne);
fetchUserData(userInfoOTwo);
