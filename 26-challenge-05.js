const account = {
  name: "amir",
  outgo: [],
  income: [],
  addOutgo: function (description, amount) {
    this.outgo.push({
      description: description,
      amount: amount,
    });
  },
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount,
    });
  },
  getAccountSummary: function () {
    let totalOutgo = 0;
    let totalIncome = 0;
    let accountBalance = 0;
    this.outgo.forEach(function (item) {
      totalOutgo = totalOutgo + item.amount;
    });
    this.income.forEach(function (item) {
      totalIncome = totalIncome + item.amount;
    });
    accountBalance = totalIncome - totalOutgo;
    return `${this.name} - Balance: ${accountBalance}, Income: ${totalIncome}, Outgo: ${totalOutgo}`;
  },
};

account.addOutgo("cafe", 39);
account.addOutgo("book", 59);
account.addIncome("job", 1000);
console.log(account.getAccountSummary());
