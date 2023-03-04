/* slice()
+ -startindex-inclusive, lastindex-exclusive
- negative index to access from reverse direction
*/
let tree = ["apple-4", "branch", "greenleaves", "wood", "roots", "apple-1", "apple-2", "apple-3"]

console.log(`==========SLICE START================`);

console.log(tree.slice(7));
console.log(tree.slice(0, 1)); //startIndex[INC], lastIndx[EXC]
console.log(tree.slice((tree.length / 2), 2)); //startIndex[INC], lastIndx[EXC] here 2<startindex given
console.log(tree.slice((tree.length / 2), Math.floor((tree.length + 3) / 2)));
console.log(tree.slice((tree.length / 2), Math.ceil((tree.length + 1) / 2)));
console.log(tree.slice((tree.length / 2), 6));

console.log(tree.slice(-1));
console.log(tree.slice(2, -3));

console.log(`==========SLICE END================`);

/*
  splice returns + modifies original array
 
 */
console.log(`==========SPLICE START================`);

console.log(tree.splice(7));
tree = ["apple-4", "branch", "greenleaves", "wood", "roots", "apple-1", "apple-2", "apple-3"]

console.log(tree.splice(0, 1)); //startIndex[INC], elements count
tree = ["apple-4", "branch", "greenleaves", "wood", "roots", "apple-1", "apple-2", "apple-3"]

console.log(tree.splice((tree.length / 2), 2));
tree = ["apple-4", "branch", "greenleaves", "wood", "roots", "apple-1", "apple-2", "apple-3"]

console.log(tree.splice((tree.length / 2), Math.floor((tree.length + 3) / 2)));
tree = ["apple-4", "branch", "greenleaves", "wood", "roots", "apple-1", "apple-2", "apple-3"]

console.log(tree.splice((tree.length / 2), Math.ceil((tree.length + 1) / 2)));
tree = ["apple-4", "branch", "greenleaves", "wood", "roots", "apple-1", "apple-2", "apple-3"]

console.log(tree.splice((tree.length / 2), 6));

tree = ["apple-4", "branch", "greenleaves", "wood", "roots", "apple-1", "apple-2", "apple-3"]
console.log(tree.splice(-2));

tree = ["apple-4", "branch", "greenleaves", "wood", "roots", "apple-1", "apple-2", "apple-3"]

console.log(tree.splice(-3, 3));

console.log(`==========SPLICE END================`);