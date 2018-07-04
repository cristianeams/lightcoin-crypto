
class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    // calculates balance using transaction objects
    let balance = 0;
    for (let trans of this.transactions) {
      balance += trans.value;
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    // keeps track of the time of the transaction
    if (!this.isAllowed()) {
      return false;
    }
    this.time = new Date();
    // adds transaction to account
    this.account.addTransaction(this);
    return true;
  }
}

class Deposit extends Transaction {
  // updates balance
  get value() {
    return this.amount;
  }

  isAllowed() {
    return true;
  }
}

class Withdrawal extends Transaction{
  // updates the balance in the account
  get value() {
    return - this.amount;
  }

  isAllowed() {
    return (this.account.balance - this.amount >= 0);
  }
}

// DRIVER CODE BELOW
const myAccount = new Account('bob the builder');
console.log('Starting Balance:', myAccount.balance);
t1 = new Withdrawal(1.00, myAccount);
console.log('1st transaction: ', t1.commit());
console.log('Balance: ', myAccount.balance);

t2 = new Deposit(9.99, myAccount);
console.log('2nd transaction: ', t2.commit());
console.log('Balance: ', myAccount.balance);
console.log('Ending balance:', myAccount.balance);
console.log('Log of transactions: ', myAccount.transactions);

