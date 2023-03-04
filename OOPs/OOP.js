//Object Example
const user = {

        name: 'Alex',
        password: 'admin',

        login: function(user) {
            //login logic
        },

        createPost: function(postData) {
            //create logic
        }

    }
    //Abstraction Example

const savingsAccount = {
        accountName: 'savingsAccount',
        accountBranch: 'ICICI',
        accountLocation: 'New Jersey',
        amount: '10000',
        minAmount: '500',
        atmPin: '1234',

        withdraw() {
            //...get details
            verifyAtmPin()
            verifyAvlblAmtBeforeWithdraw()

            //withdraw/ not-withdraw
        },

        deposit() {
            //...get details
            verifyAtmPin()
                //deposit
        },

        checkAvlblAmnt() {
            //...get details
            verifyAtmPin()
                //show avlbl amt
        },
        //below are methods need to be abstracted not needed to show to users
        verifyAvlblAmtBeforeWithdraw() {

        },
        verifyAtmPin() {

        },

    }
    // Inheritance

const customer = {
    userName: 'Michael',
    password: 'admin123',
    email: 'a@b.com',

    login(user) {
        //customer login logic
    },

    createPost(postData) {
        //create logic
    }
}

const Admin = {
    userName: 'Michael',
    password: 'admin123',
    email: 'a@b.com',
    secretkey: '111',

    login(user, password, secretkey) { // polymorphism
        // admin login logic
    },

    createPost(postData) {
        //create logic
    },
    deletePost(postData) {
        //delete logic
    },
    deleteUser(username) {
        //delete user logic
    }

}