/*
DUE Monday Halloween

- Error handling for withdrawals 
Optional:
- Receipt 

HAVE FUN
*/

class ATMmachineVisit {
  constructor(fname, lname, balance) {
    this.fname = fname
    this.lname = lname
    this.balance = balance
  }

  checkBalance() {
    alert(`Your balance is ${this.balance}`)
    this.greeting()
  }

  makeQuickWithdrawl() {
    if (this.balance >= 20) {
      const newBalance = this.balance - 20
      this.balance = newBalance
      alert(`Your new balance is ${this.balance}`)
      this.greeting()
    } else {
      alert(`Insufficient Funds`)
      this.greeting()
    }
  }

  makeAmountWithdrawl() {
    const withdrawlAmt = parseInt(
      prompt(`How much would you like to withdraw?`)
    )
    if (this.balance >= withdrawlAmt) {
      const newBalance = this.balance - withdrawlAmt
      this.balance = newBalance
      alert(`Your new balance is ${this.balance}`)
      this.greeting()
    } else {
      alert(`Insufficient Funds`)
      this.greeting()
    }
  }

  makeWithdrawl() {
    const withdrawlType = prompt(
      `1) Quick Withdrawl ($20)\n2) Choose Withdrawl Amount`
    )
    if (withdrawlType === '1') {
      this.makeQuickWithdrawl()
    } else if (withdrawlType === '2') {
      this.makeAmountWithdrawl()
    } else {
      alert(`Please make a valid choice.`)
      this.greeting()
    }
  }

  makeQuickDeposit() {
    const newBalance = this.balance + 20
    this.balance = newBalance
    alert(`Your new balance is ${this.balance}`)
    this.greeting()
  }

  makeAmountDeposit() {
    const depositAmt = parseInt(prompt(`How much would you like to deposit?`))
    const newBalance = this.balance + depositAmt
    this.balance = newBalance
    alert(`Your new balance is ${this.balance}`)
    this.greeting()
  }

  makeDeposit() {
    const depositType = prompt(
      `1) Quick Deposit ($20)\n2) Choose Deposit Amount`
    )
    if (depositType === '1') {
      this.makeQuickDeposit()
    } else if (depositType === '2') {
      this.makeAmountDeposit()
    } else {
      alert(`Please make a valid choice.`)
      this.greeting()
    }
  }

  greeting() {
    const choice = prompt(
      `Welcome ${this.fname} ${this.lname} \nHow can I help you? \n1) view balance\n2) withdrawal\n3) deposit\n4) exit`
    )
    if (choice === '1') {
      this.checkBalance()
    } else if (choice === '2') {
      this.makeWithdrawl()
    } else if (choice === '3') {
      this.makeDeposit()
    } else if (choice === '4') {
      alert(`Thank you! Have a nice day ${this.fname}`)
    } else {
      alert(`Please make a valid choice.`)
      this.greeting()
    }
  }
}

const Kassidy = new ATMmachineVisit('Kassidy', 'Price', 100)

console.log(Kassidy.greeting())
