const bankAccount = {
  _balance: 1000,
}

//getter formattedBalance
Object.defineProperty(bankAccount, 'formattedBalance', {
  get: function() {return `$${this._balance}`}
});

//setter
Object.defineProperty(bankAccount, 'balance', {
  set: function(newBalance) {
      if (typeof(newBalance) === 'number' && newBalance >= 0) {
          this._balance = newBalance;
      } else {
          console.log("Invalid balance value.");
      }
  }
});

// console.log(Object.getOwnPropertyDescriptors(bankAccount));

// console.log(bankAccount.formattedBalance);
// bankAccount.balance = 300;
// console.log(bankAccount.formattedBalance);