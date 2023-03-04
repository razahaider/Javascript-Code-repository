/* fetch returns promise --> .then --> returns a promise

in below example after rendering countryCard in 
then()-->returns another fetch promise(neighour country)
-->response 
.then--> response.json()
.then--> neighbourdata[0]=> renderCountry()
so a Promise with multiple thens with a then having return fetch()--> handled through then is promise chain

Below is not a promise chaining but callbackhell
 fetch()
 ->then()
 ->then(
    ()=>{
        fetch()->then()->then()
    })
*/
const getCountryData = function(country) {

    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((response) => {

            return response.json()
        })
        .then((data) => {


            displayCountryCard(data[0], document.querySelector('.countries'), '')

            return fetch(`https://restcountries.com/v3.1/alpha/${data[0].borders[0]}`)
        })
        .then((resp) => {

            return resp.json()

        })
        .then((neighbourData) => {

            displayCountryCard(neighbourData[0], document.querySelector('.countries'), 'neighbour-country')

        }).catch((err) => { // to catch any error from anywhere of promise chain
            console.log(`${err}`);
            renderError(`Something went wrong with Error ${err}`)
        }).finally(() => { //always  called even when catch error occurs
            console.log(`Finally called`);
        })


}
const renderError = (errHtml) => {
    document.querySelector('.countries').insertAdjacentHTML('beforebegin', errHtml)
}

const displayCountryCard = function(jsonData, countriesContainer, className = '') {
    console.log(jsonData);
    const html = `
    
        <div class="countries-container ${className}">
                <article class="country">
                <img class="country_img" src="${jsonData.flags.png}"/>
                <div class="country_data">
                <h3 class="country_name">${jsonData.name.official}</h3>
                <h4 class="country_region">${jsonData.region}</h4>
                <p class="country_row"><span>&#x1F465</span>${(jsonData.population/1000000).toFixed(1)}M people
                </p>
                <p class="country_row"><span>🎤</span>${jsonData.languages[Object.keys(jsonData.languages)[0]]}

                </p>
                <p class="country_row"><span>&#x1F4B0</span>${Object.keys(jsonData.currencies)[0]}
                </p>
                
                </article>
        </div>
`;
    countriesContainer.insertAdjacentHTML('beforeend', html)



}
getCountryData('Portugal')
getCountryData('aasdasda') // catch block called and renderError called