/* global $ */
/* global alert */

$(document).ready(function () {
  console.log('ready for transactions')
  // Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...

  // make background red as a test
  // $('html').css('background', 'red')

  // create a class = atm
  class Atm {
    // constructor includes (name, starting balance = 0,
    // backupAccount = null)
    constructor (name, begBal = 0, backupAcc = null) { // name
      this.name = name // starting balance
      this.bal = begBal // backup
      this.backupAcc = backupAcc
    } // methods: deposit, withdraw (calls verBal [integrated in withdraw])
    deposit (amt) {
      console.log(`Depositing money to current ${this.bal}`)
      this.bal += amt
      return this.bal
    }
    withdraw (amt) {
      console.log(`Verifying amount in account...`) // ternary
      this.bal >= amt ? this.bal -= amt : alert('Insufficient funds, transaction cancelled')
      return this.bal
    }
  }

  var checkings = new Atm('checking', 0)
  var savings = new Atm('saving', 0)

  // checking related variables
  var checkAccDep = $('#checking .deposit')
  var checkInput = $('#checking .input')
  var checkWithdraw = $('#checking .withdraw')
  var checkingBal = $('#checking .balance')

  var eventDep = function () {
    var actInput = parseInt(checkInput.val())
    checkings.bal = checkings.deposit(actInput)
    checkingBal.text(checkings.bal)
  }

  var eventWith = function () {
    var actInput = parseInt(checkInput.val())
    checkings.bal = checkings.withdraw(actInput)
    checkingBal.text(checkings.bal)
  }

  checkAccDep.on('click', eventDep)
  checkWithdraw.on('click', eventWith)

  // savings functions
  // checking related variables
  var savAccDep = $('#savings .deposit')
  var savInput = $('#savings .input')
  var savWithdraw = $('#savings .withdraw')
  var savBal = $('#savings .balance')

  var eventDep = function () {
    var actInput = parseInt(savInput.val())
    savings.bal = savings.deposit(actInput)
    savBal.text(savings.bal)
  }

  var eventWith = function () {
    var actInput = parseInt(savInput.val())
    savings.bal = savings.withdraw(actInput)
    savBal.text(savings.bal)
  }

  savAccDep.on('click', eventDep)
  savWithdraw.on('click', eventWith)
})
