const fetchCurrentLocation = function() {
    let country;
    let city;
    const fetchCurrentCoordinates = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve(position)
            }, (err) => {

                console.log(`geolocation api =======reject ${err}`);
                reject(err)
            })
    })

    fetchCurrentCoordinates
        .then((result) => {

            console.log(result.coords.latitude, result.coords.longitude) //position  resolved on returning to then() so prints an JSON
            return fetch(`http://www.mapquestapi.com/geocoding/v1/reverse?key=GLVza5bpks32CGV2obVDGf9940OhMJdU&location=${result.coords.latitude},${result.coords.longitude}`)

        }).then((res) => {

            return res.json()

        }).then(jsonData => {

            city = jsonData.results[0].locations[0].adminArea5
            console.log(jsonData.results[0].locations[0].adminArea1); //country code

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

fetchCurrentLocation()