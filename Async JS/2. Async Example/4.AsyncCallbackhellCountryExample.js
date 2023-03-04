'use strict'

const getCountryData = function(country) {

    const btn = document.querySelector('.btn-country')
    const countriesContainer = document.querySelector('.countries')

    const request = new XMLHttpRequest();

    request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
    request.send()

    request.addEventListener('load', function() {

        const [jsonData] = JSON.parse(this.responseText);
        //   console.log(jsonData)
        displayCountryCard(jsonData, countriesContainer) //country displayed

        getNeighbourCountryData(jsonData.borders, countriesContainer) //callback to another ajx call for border country[0]



    })
}
const getNeighbourCountryData = function(neighbourCountry, countriesContainer) {
    console.log(neighbourCountry[0]);

    const request = new XMLHttpRequest();

    request.open('GET', `https://restcountries.com/v3.1/alpha/${neighbourCountry[0]}`)
    request.send()

    request.addEventListener('load', function() {

        const [jsonDataNeighbour] = JSON.parse(this.responseText);
        //console.log(jsonData)
        displayCountryCard(jsonDataNeighbour, countriesContainer, 'neighbour-country')


    })
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
getCountryData('usa')
getCountryData('Portugal')