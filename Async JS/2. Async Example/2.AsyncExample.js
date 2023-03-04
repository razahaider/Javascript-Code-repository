'use strict'

const getCountryData = function(country) {

    const btn = document.querySelector('.btn-country')
    const countriesContainer = document.querySelector('.countries')
    console.log(countriesContainer);
    ////////////
    const request = new XMLHttpRequest();

    request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
    request.send()



    /* console.log(`request object content ${request.response}`); 
        - won't work since request.send() is asynchronous and needs time to execute
        - if put inside setTimeout() will work
    */
    request.addEventListener('load', function() {
        /* console.log(`this pointing to ${request.responseText}`); 
         console.log(`this pointing to ${request.response}`); OR we can use 'this' pointer as well



          access the first key's value of an object: 

         const languages = {'eng': 'English'};
        const firstKey = Object.keys(languages)[0];
        const firstValue = language[firstKey];
        */
        const [jsonData] = JSON.parse(this.responseText);
        console.log(jsonData);

        //creating an html element to be inserted within html DOM with all dynamic data populated from JSON format data
        const html = `
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
                </div>
                </article>
`;
        countriesContainer.insertAdjacentHTML('beforeend', html)

    });
}

getCountryData('usa')
getCountryData('Portugal')
getCountryData('Germany')
getCountryData('Iraq')