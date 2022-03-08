/* eslint-disable no-unused-vars */
//Mettre le code JavaScript lié à la page photographer.html
/*global userFactory, domModal, photographersHeader, sectionPortfolio*/


let firstName;
let findMedia;
let identity;
let getLikes = [];
let index = [];
let sortTitle={};
let namePhotographer;

const getPhoto = async() =>{
    
    await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((value) =>  {

        //recupérer id de l'URL
        let params = new URLSearchParams(document.location.search);
        let idParam = parseInt(params.get('id'));

        //faire correspondre l'URL avec le photographe
        identity = value.photographers.find(({id}) => id === idParam);
        namePhotographer = identity.name;
        //récupérerle prénom
        let nameSplit = identity.name.split(' ');
        firstName = nameSplit[0];
    
        if(firstName.includes('-')){
            let regex = /-/
            let nameArray = firstName.split(regex);
            firstName = nameArray.join(' ');
        }
        

        //recupérer les img du photographe en fonction de l'URL
        findMedia = value.media.filter(id => id.photographerId === idParam);

        index = findMedia.findIndex(obj => obj);

        //recupérer les likes
        findMedia.forEach((media) =>{
            getLikes.push(media.likes);
        });
        getLikes = getLikes.reduce((a, b) => a + b);
    })
    .catch((err) => console.log(err))
    
    
}

const photoDisplay = async ()=>{
        await getPhoto();

        //afficher stickyCard
        const getAllLikes = userFactory(getLikes).stickyCard();
        
        //afficher la card du photographe
        const userCard = userFactory(identity).getPhotographersHeader();
        photographersHeader.appendChild(userCard);
        
        //tri des medias
        const sortGallery = userFactory(findMedia).sortPhoto();

        const modal = domModal(namePhotographer);
        
        
        //afficher card des photos
        findMedia.forEach((media, index) =>{
            const photoCard = userFactory(media, findMedia, index).getPorfolio();
            sectionPortfolio.appendChild(photoCard);
            
        });
        
        
};

photoDisplay();

