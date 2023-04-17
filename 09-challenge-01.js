let userAccount = {
  fullName: `amirasd`,
  outGo: 0,
  inCome: 0,
};

let addOutGo = function (account, amount) {
  account.outGo = account.outGo + amount;
};

let addIncome = function (account, inCome) {
  account.inCome = account.inCome + inCome;
};

let getAccountData = function (account) {
  let balance = account.inCome - account.outGo;
  return `account name: ${account.fullName} -balance: ${balance}`;
};
addIncome(userAccount, 2000);
addOutGo(userAccount, 160);
addOutGo(userAccount, 200);

console.log(getAccountData(userAccount));
