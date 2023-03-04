  const bankBranchID = 'SBR123321'

  const customerBankAccount = {
      name: "John Doe",
      accountNumber: 1234567890,
      accountType: "savings",
      balance: 1000,
      email: "johndoe@example.com",
      address: {
          street: "123 Main St",
          city: "Anytown",
          state: "CA",
          zip: "12345"
      },
      phone: "555-555-1234",
      accountOpenDate: "2022-01-01",
      isPreferred: true
  };

  console.log('before passing to function args======bankBranchID, customerBankAccount======', bankBranchID, customerBankAccount)
  const accessAccount = (bankBranchID, customerBankAccount) => {
      bankBranchID = 'MGP98766789'
      customerBankAccount.name = 'Mr.' + customerBankAccount.name
      if (customerBankAccount.accountNumber === 1234567890) {
          console.log('Account Details access approved')
      } else {
          console.log('Account Details access denied')
      }
  }

  accessAccount(bankBranchID, customerBankAccount)

  console.log('after passing to function args======bankBranchID, customerBankAccount======', bankBranchID, customerBankAccount)

  //object type args reflect the change
  //primitive type do not reflect the change

  //in JS pass by reference is not there only pass by value
  // but in objects, arrays, the args pass is memory address reference which behaves like pass by reference