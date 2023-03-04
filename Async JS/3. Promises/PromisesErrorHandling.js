/*
Flow:
getAndRenderDOMCountryData - 
    1.-calls  getCountryJSONData(country) 
           1.a --  return fetch call
                                                        1.a.1->then checks response ok/not ok --> throws Error (catch() outside getCountryJSONData)
                                                        1.a.2-> (else) returns jsonData
           1.b --.then() 
                    1.b.1---calls renderCountryHTML(jsonData[0]) -> renders html with data 
                    1.b.2---calls  getCountryJSONData(country) 
                                     b.2.1----  return fetch call
                                                        b.2.1.1->then checks response ok/not ok --> throws Error (catch() outside getCountryJSONData)
                                                        b.2.1.2-> (else) returns jsonData
                                    b.2.2---calls .then()
                                                 b.2.1 calls renderCountryHTML(jsonData[0], className='countryName') -> renders html with data 
            1.c catch()
                -- rendersHTML for error

    -
                                                


*/

const getCountryJSONData = function(country, errorMsg = 'Country not found') {
    //fetch api call for country data
    return fetch(`https://restcountries.com/v3.1/name/${country}`) // need to put return here before fetch so it returns promise(repsonse.json() ) where 
        //getcountryJSONData is called
        //handling returned promise using then
        .then((response) => {
            //logging response
            console.log(response)
                //checking response status -> throw error if required
            if (!response.ok) {

                console.log(`error response==========`, response)
                throw new Error(`Something went wrong Error: ${errorMsg} with response code :${response.status}`)
            }
            //else return countryData from promise

            return response.json()
        })
}

const getAndRenderDOMCountryData = function(country) {
    //promise returned -->handled in then()
    getCountryJSONData(country)
        .then((jsonData) => {

            console.log(`inside getAndRenderDOMCountryData=======`, jsonData[0]);
            //renderCountry on HTML
            renderCountryHTML(jsonData[0])
            const countryNeighbour = jsonData[0].borders[0]

            //call promise to fetch(error handled in it) for neighbour country
            return getCountryJSONData(countryNeighbour) //if we don't return this promise handler then error won't be catch 
                //remember last promise we return should be returned to execute next then() or catch() block
                .then((jsonData) => {
                    console.log(`inside getAndRenderDOMCountryData=======`, jsonData[0]);
                    //render neighbour country
                    renderCountryHTML(jsonData[0], 'neighbour-country')


                })


        }).catch((err) => {
            console.log(`inside catch =============`, err)
            renderError(err)
        })
}
const renderCountryHTML = (jsonData, className = '') => {


    console.log(`inside renderCountryHTML=========== `, jsonData);
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
    document.querySelector('.countries').insertAdjacentHTML('beforeend', html)

}
const renderError = (errHtml) => {
    document.querySelector('.error-display').insertAdjacentHTML('beforeend', errHtml)
}
getAndRenderDOMCountryData('Portugal')