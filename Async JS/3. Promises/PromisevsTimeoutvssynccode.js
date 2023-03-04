/*
Async code -- Promises and setTimeout, and any APIs with callbacks-->goes through CallbackQueue/MicroTaskQueue---> pushed for Exeuction in CallStack by EventLoop
Sync code --> console.log() etc directly pushed to CS for execution
*/

//What is the output
console.log('Sync code line 1 executed')
setTimeout(() => {
    console.log('setTimeout Callback executed');
})
Promise.resolve('Resolved').then((res) => {
    console.log('Promise callback executed');
})
console.log('Sync code line 2 executed')


/*
Answer:
Sync code line 1 executed <---1. directly pushed to CS
Sync code line 2 executed <--- 2. pushed to CBQ
Promise callback executed <---3. pushed to MTQ
setTimeout Callback executed<--<---4. directly pushed to CS

order of execution:
1. => 4. => 3. => 2.

*/