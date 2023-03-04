//This is synchronous code => executes line by line -until each line gts completely executed- if one line fails next line nto execute

const p = document.querySelector('.p')
p.textContent = 'hello world'
alert('very nice')
p.getElementsByClassName.color = 'red'


/*1. Asynchronous code using setTimeout

-setTimeout gets registered and taken to background not executed until timer runs out
- next line of code gets executed
- when timer expires then Timeout-enclosed code gets executed 

*/
const p = document.querySelector('.p')
setTimeout(function() { p.textContent = 'hello world' }, 5000)
alert('very nice')
p.getElementsByClassName.color = 'red'

//other Async examples
img.src = 'abc.jpg'

img.addEventListener('load', function() {
    img.classList.add('fadeIn')
})

/*Async Usage
1. external API calls GET/POST

API = code exposed by Web servers for fetching some data/interaction
=works as request response model
DOM API, Geolocation API
*/