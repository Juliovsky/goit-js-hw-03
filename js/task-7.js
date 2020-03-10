"use strict";

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};


const account = {
    balance: 0,

    transactions: [],

    createTransaction(amount, type) {
        return {
            amount: amount,
            type: type,
            id: this.transactions.length + 1,
        }
    },

    deposit(amount) {
        let CurrentBalance = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(CurrentBalance);
        this.balance += amount;

    },

    withdraw(amount) {
        let afterBalance = this.createTransaction(amount, Transaction.WITHDRAW);
        if (amount <= this.balance) {
            this.balance -= amount;
            this.transactions.push(afterBalance);
        } else {
            alert('wrong');
        }

    },

    getBalance() {
        return this.balance;
    },


    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (transaction['id'] === (id)) {
                return transaction;

            }
                  
        }

    },

    getTransactionTotal(type) {

    },

};
account.deposit(300);
account.withdraw(250);
console.log(account.getTransactionDetails(2));


