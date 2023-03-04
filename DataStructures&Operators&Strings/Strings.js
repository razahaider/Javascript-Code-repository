/*
length, indexOf, lastIndexOf, slice 
typeOf 'string' vs typeOf new String('string')
*/
/*
toLowerCase(), toUpperCase()
.replace()
.includes()
startsWith()
endsWith()
*/


/*

.split(arg)
[1,2,3].join(arg)
 
 */

/*
Masking credit Card
  
*/

const maskCreditCard = function(creditCardNo) {
    strCCNo = creditCardNo + ''
    console.log(strCCNo);
    return strCCNo.slice(-4).padStart(strCCNo.length, '*'));
//const maskedCCNo = strCCNo.padStart(12, '*') //+ strCCNo.slice(-4)
//  return maskedCCNo
}
maskCreditCard(1234567891234567)