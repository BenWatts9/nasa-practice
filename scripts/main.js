import { loadPhotos } from "./dataManager.js";



const makePhoto = () => {
    loadPhotos().then((thePhotoFromAPI) => {
        
        const htmlElement = document.querySelector("#app")
        htmlElement.innerHTML = `<img id="space__img" src="${thePhotoFromAPI.url}"> <p id="img__date">${thePhotoFromAPI.date}</p><div id="img__desc">${thePhotoFromAPI.explanation}</div>` 
    })
}


makePhoto()