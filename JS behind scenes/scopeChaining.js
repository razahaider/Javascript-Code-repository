'use strict'
const last = 'Layfield'



/*
below code prints : Mr. BradshawLayfield
last--->accessible globally to all
middle---> accessible to fullName, prefixName, firstName
pre---> axble to prefixName
first---> axble to firstName
*/
function fullName() {
    const middle = 'Bradshaw'

    function prefixName() {
        const pre = 'Mr. '
        console.log(pre + middle + last);
    }


    function firstName() {
        const first = 'John'
        prefixName()
    }
    firstName()
}

fullName()
    /////////////////////////////////////////////
    //error first is not defined becos
first-- - > accessible to firstName only

function fullName() {
    const middle = 'Bradshaw'

    function prefixName() {
        const pre = 'Mr. '
        console.log(pre + first + middle + last);
    }


    function firstName() {
        const first = 'John'
        prefixName()
    }
    firstName()
}

fullName()