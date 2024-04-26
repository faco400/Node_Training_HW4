const bankAccount = {
  _balance: 1000,

  get formattedBalance() {return `$${this._balance}`},

  set balance(newBalance) {
    if (typeof(newBalance) === 'number' && newBalance >= 0) {
        this._balance = newBalance;
    } else {
        console.log("Invalid balance value.");
    }
  }
}

const targetBankAccount = {
  _balance: 1000,

  get formattedBalance () {return `$${this._balance}`},

  set balance(newBalance) {
    if (typeof(newBalance) === 'number' && newBalance >= 0) {
        this._balance = newBalance;
    } else {
        console.log("Invalid balance value.");
    }
  }
}

// defining setter and getter after object declaration
// //getter formattedBalance
// Object.defineProperty(bankAccount, 'formattedBalance', {
//   get: function() {return `$${this._balance}`}
// });

// //setter
// Object.defineProperty(bankAccount, 'balance', {
//   set: function(newBalance) {
//       if (typeof(newBalance) === 'number' && newBalance >= 0) {
//           this._balance = newBalance;
//       } else {
//           console.log("Invalid balance value.");
//       }
//   }
// });

bankAccount.transfer = function (currAcount, targetAccount, amount){
  try {
    if(currAcount._balance < amount) {
      throw new Error ('Account 1 has unsuficient balance for transfer');
    }else {
      currAcount.balance = currAcount._balance - amount;
      targetAccount.balance = targetAccount._balance + amount;
    }
  } catch (error) {
    console.error(error);
  }
}

// console.log(Object.getOwnPropertyDescriptors(bankAccount));

// console.log(bankAccount);
// console.log(targetBankAccount);

console.log(bankAccount.formattedBalance);
console.log(targetBankAccount.formattedBalance);
bankAccount.transfer(bankAccount, targetBankAccount, 400);
console.log(bankAccount.formattedBalance);
console.log(targetBankAccount.formattedBalance);

// console.log(bankAccount);
// console.log(targetBankAccount);