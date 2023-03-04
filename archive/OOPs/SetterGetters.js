//setters getters are functions of classes treated as properties

//set get for objects
const savingsAccount = {
    customerName: 'George',
    savingsAmount: [100, 50, 120, 300, 500],

    get latestAmountAdded() {
        return this.savingsAmount.slice(-1).pop()
            //slice return last amount as an array
            //pop will remove the element from returned array and return just the amount element in primitive type
            //fetch the last amount added
    },

    set AmountinSavings(amt) {
        this.savingsAmount.push(amt)
    }
}

console.log(savingsAccount.latestAmountAdded)
    // since get and set are just properties and not treated as functions we dont need to add () to call them

savingsAccount.AmountinSavings = 400
    //will call setter

console.log(savingsAccount.latestAmountAdded)