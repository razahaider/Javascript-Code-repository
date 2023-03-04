const createImage = function(imgPath) {
    return new Promise((resolve, reject) => {
        const imgEle = document.createElement('img')
        imgEle.src = imgPath
            ////////////
        console.log(imgEle.src)
        imgEle.addEventListener('load', () => {
            document.querySelector('.images').append(imgEle)

            resolve(imgEle) //callback if success
        })
        imgEle.addEventListener('error', () => {


                reject('error occured invalid image path') //callback if success
            })
            ////////////
    })

}
createImage('233307.jpg').then((resp) => {
    console.log('success', resp);

}).catch(error => console.log(error))