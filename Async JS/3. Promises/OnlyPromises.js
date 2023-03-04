let promise = new Promise((resolve, reject) => {
    alert('Hello promise')
    resolve('hello resolve')
})

console.log('hello console');

console.log(promise);

console.log(promise.then((result) => { console.log(result); }));

/*
output
The alert function is executed before the console.log('hello console')
 statement because the Promise constructor function is synchronous,
 
  and it is executed immediately when the Promise is created.
   On the other hand, console.log('hello console') 
   is a statement that executes after the Promise is created and assigned to the promise variable.

*/