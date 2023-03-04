 const fetchCountryJson = async function(country) {
     const resp = await fetch(`https://restcountries.com/v3.1/name/${country}`)
     const jsonData = await resp.json()
     return jsonData // this is not json response but another prmise(await resp.json())
 }

 //console.log(fetchCountryJson('Portugal')); // won't work as promise returned is still pending

 //fetchCountryJson('Portugal').then(resp => console.log(resp)); // correct



 //try-catch
 const fetchCountryJson2 = async function(country) {
     try {
         const resp = await fetch(`https://restcountries.com/v3.1/name/${country}`)
         if (!resp.ok) {
             throw new Error(`country not found`)
         }
         const jsonData = await resp.json()
         return jsonData

     } catch (err) {
         console.log(`error caught in catch ${err}`)
     }
 }

 //fetchCountryJson2('Portssssugal').then(resp => console.log(resp)); // correct

 Promise.all([fetchCountryJson('Portugal'), fetchCountryJson2('USA')]).then(resp => console.log(resp))

 //Promises.all takes array of promises calls(returning promises) and returns an array of response outputs resp = [[{country1 data json}],[{country2 data json}]]
 //promises execute parallelly

 Promise.race([fetchCountryJson('USA'), fetchCountryJson2('Portugal')]).then(resp => console.log(`promise race result=================`, resp))
     //will resolve Portugal first then USA

 //ES2020 Promise.allSettled when all promises are completed only then array of promises result is returned