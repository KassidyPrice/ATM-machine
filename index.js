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

  greeting() {
    const choice = prompt(
      `Welcome ${this.fname} ${this.lname} \nHow can I help you? \n1) view balance\n2) withdrawal\n3) deposit\n4) exit`
    )

    if (choice === '1') {
      alert(`Your balance is ${this.balance}`)
      this.greeting()
    } else if (choice === '2') {
      const withdrawlType = prompt(
        `1) Quick Withdrawl ($20)\n2) Choose Withdrawl Amount`
      )
      if (withdrawlType === '1') {
        if (this.balance >= 20) {
          const newBalance = this.balance - 20
          this.balance = newBalance
          alert(`Your new balance is ${this.balance}`)
          this.greeting()
        } else {
          alert(`Insufficient Funds`)
          this.greeting()
        }
      } else if (withdrawlType === '2') {
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
      } else {
        alert(`Please make a valid choice.`)
        this.greeting()
      }
    } else if (choice === '3') {
      const depositType = prompt(
        `1) Quick Deposit ($20)\n2) Choose Deposit Amount`
      )
      if (depositType === '1') {
        const newBalance = this.balance + 20
        this.balance = newBalance
        alert(`Your new balance is ${this.balance}`)
        this.greeting()
      } else if (depositType === '2') {
        const depositAmt = parseInt(
          prompt(`How much would you like to deposit?`)
        )
        const newBalance = this.balance + depositAmt
        this.balance = newBalance
        alert(`Your new balance is ${this.balance}`)
        this.greeting()
      } else {
        alert(`Please make a valid choice.`)
        this.greeting()
      }
    } else if (choice === '4') {
      alert(`Thank you! Have a nice day ${this.fname}`)
    } else {
      alert(`Please make a valid choice.`)
      this.greeting()
    }
  }
}

const Kassidy = new ATMmachineVisit('Kassidy', 'Price', 0)

console.log(Kassidy.greeting())
