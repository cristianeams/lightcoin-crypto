
class Account {
  constructor(username) {
    this.username = username;
    // starts the balance at $0
    this.balance = 0;
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }
}

class Deposit extends Transaction {
  // updates balance
  get value() {
    return this.amount;
  }
}

class Withdrawal extends Transaction{
  // updates the balance in the account
  get value() {
    return - this.amount;
  }
}

// DRIVER CODE BELOW
const myAccount = new Account('snow-patrol');

console.log('Starting Balance:', myAccount.balance);
t1 = new Deposit(120.00, myAccount);
t1.commit();

t2 = new Withdrawal(9.99, myAccount);
t2.commit();

console.log('Ending balance:', myAccount.balance);

