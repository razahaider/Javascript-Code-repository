function depositMoney(amountToDeposit,
    currentBalance = 0,
    accountType = 'Current',
    transactionType = 'Bank') {
    if (amountToDeposit <= 0) {
        console.log("Please enter a valid amount to deposit.");
        return;
    }
    const TransactionList = [];
    const transaction = {
        transactionType,
        amountToDeposit,
        accountType
    }
    console.log(transaction);
    TransactionList.push(transaction)
}

depositMoney(1000, 5000, 'Savings', 'ATM ')
depositMoney(300)