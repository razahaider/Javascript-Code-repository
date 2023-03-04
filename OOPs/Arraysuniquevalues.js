const arr = [1, 1, 2, 2, 333, 44, 5, 6, 7, ]
Array.prototype.unique = function(arr) {
    return [...new Set(arr)] //arr or `this` pointer as well
}

console.log(`unique values for array ${arr} 
using Array.prototype.unique are: ` + arr.unique(arr));