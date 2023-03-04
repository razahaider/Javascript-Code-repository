//Promises are containers for a future Value(success or failure) through asynchornous call


/* 
Promise using fetch

   <--- fetch(url)
        .then(function(response){            // callback function to recieve response object
            
            return response.json()
       
        })
        .then(function(jsonData){           // callback function to recieve response.json() object and return data
                                              
            return jsonData || jsonData[0] || jsonData[1]                // anything from Json
        })
*/
const getCountryData = function(country) {

    fetch(`https://restcountries.com/v3.1/name/${country}`)
                        .then((response)=>{

                          return response.json()
}
                        )
                        .then((data)=>{
                           
                            
                            displayCountryCard(data[0], document.querySelector('.countries'),'')
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
getCountryData('Portugal')
