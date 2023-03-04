const arr = [1, 2, 3, 4, 5]
const [x, y] = arr; // destructuring using []
console.log(x, y);

const [first, , third] = arr

console.log(first, third);
const nested = [2, 4, [5, 6]]

const [firstt, , [third_first, third_second]] = nested
console.log(firstt, third_first, third_second);