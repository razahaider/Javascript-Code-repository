//falsy  values : 0, '', undefined, null
//-------Short circuit-----------------
console.log(undefined || 0 || '' || 'Hey There' || 23 || null);

/*-------AND---------------------------
works like an if
(if condition) && (result)
(if condition/falsyresult) && (if conditionfalsyresult) && (if conditionfalsyresult) && (result)




*/
console.log('Hello' && 23) //true

console.log((24 > 23) && (40 > 25) && 'result') //true


console.log((20 > 20) && (40 > 25) && 'result2') //false