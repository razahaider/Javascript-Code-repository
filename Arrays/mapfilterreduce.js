/* MAP, Filter, Reduce
1. convert from EURtoUSD
2. transform fullnames to usernames
3. make withdrawal and deposit two arrays using filter
4. using reduce calculated total balance
5. using reduce calculate highest amount deposited / highest amount withdrawn
6. filter and map to get deposits / withdraw array with eurtousd conversion from txns
    //display total withdrawl and deposit in summary
7. total interest - > loan - > txn - > loandeposits - > Sum of deposits * 0.012
*/
const transactions = [200, 300, 100, -50, -200, 800, -600, 300, -50, -80]

const fullNames = ['Alex Shaw Riley', 'Ronny Supreme Finley', 'Mark Caloway',
    'Bobby George Lashley', 'Brock Lesnar', 'Shawn Michaels', 'Hunter Hurst Hemsley Edward'
]
console.log(`=====convert from EURtoUSD==========`);
const EUtoUSD = 1.2

console.log(`EU currency Txns ${transactions}`);
const usdTxns = transactions.map((txn) => {
    return txn * EUtoUSD
})
console.log(`USD currency Txns ${usdTxns}`);

console.log(`=====transform fullnames to usernames==========`);

const userNames = fullNames.map((fName) => {
    const name = fName.toLowerCase().split(' ')

    const username = name.map((nm) => {
        return nm[0]
    }).join('')
    return username
})
console.log(`userNames are ${userNames}`);


console.log(`=====make withdrawal and deposit two arrays using filter==========`);

const deposits = transactions.filter(txn => txn > 0)
const withdrawals = transactions.filter(txn => txn < 0)

console.log(`========deposits=========: ${deposits}`);

console.log(`========withdrawal=======: ${withdrawals}`);


console.log(`=====using reduce calculated total balance==========`);

const totalBalance = transactions.reduce((acc, txn) => {
    return acc + txn
}, 0)

console.log(`totalBalance===========${totalBalance}`);
console.log(`====using reduce calculate highest amount deposited/ highest amount withdrawn======= `);

const highestAmountDeposited = transactions.reduce((acc, txn) => {
    if (txn > 0 && txn > acc) {
        return txn
    }
    return acc
}, transactions[0])
console.log(`highest amount deposited ${highestAmountDeposited}`);
const highestAmountWithdrawn = transactions.reduce((acc, txn) => {
    if (txn < 0 && txn < acc) {
        return txn
    }
    return acc
}, transactions[0])

console.log(`highest amount withdrawn ${highestAmountWithdrawn}`);
console.log(`=====filter and map to get deposits / withdraw array with eurtousd conversion from txns=====`);

const amtDepositedUSD = transactions.filter((txn) => {
    return txn > 0
}).map((depoTxn) => {
    return depoTxn * EUtoUSD
})
console.log(`deposit Txns in USD: ${amtDepositedUSD}`);
const amtWithdrawnUSD = transactions.filter((txn) => {
    return txn < 0
}).map((withdrawnTxn) => {
    return withdrawnTxn * EUtoUSD
})

console.log(`Withdrawn Txns in USD: ${amtWithdrawnUSD}`);

console.log(`====total interest - > loan - > txn - > loandeposits - > Sum of deposits * 0.012=====`);

const totalInterest = transactions.filter((txn) => {
        return txn > 0
    })
    .map((deposits) => {
        return deposits * 0.233 * EUtoUSD
    })
    .reduce((acc, depositIntst) => {
        return acc + depositIntst
    }, 0)


console.log(`total interest: ${totalInterest}`);