let apiPhotos =[]

export const loadPhotos = () => {
    return fetch("https://api.nasa.gov/planetary/apod?api_key=LMSnJvQdm1rBLEM9HFxdvLAd10AxXmQKhshJeff0&")
        .then((response) => response.json())
        .then((photoArray) => {
            apiPhotos = photoArray
            return photoArray
        })
}

export const findBirthday = (arr) => {
    for(let i of arr){
        if (i.date === '2021-04-09')
        return i
    }
} 

