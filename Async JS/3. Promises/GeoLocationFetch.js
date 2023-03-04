const fetchLocation = function(lat, long) {
    let country = '';
    let city = '';
    // if (requests == 3) {

    //     throw new Error(`Maximum of 3 requests allowed please wait 5 seconds`)
    // }
    fetch(`http://www.mapquestapi.com/geocoding/v1/reverse?key=GLVza5bpks32CGV2obVDGf9940OhMJdU&location=${lat},${long}`)
        .then((res) => {
            return res.json()
        }).then(jsonData => {
            city = jsonData.results[0].locations[0].adminArea5
            console.log(jsonData.results[0].locations[0]); //country code

            return fetch(`https://restcountries.com/v2/alpha/${jsonData.results[0].locations[0].adminArea1}`)

        }).then((res) => {

            return res.json()
        }).then(jsonData => {
            country = jsonData.name
            console.log(`You are in ${city},${country}`)

        }).catch((err) => {
            console.log(err)
        })
}

fetchLocation(52.508, 13.381)