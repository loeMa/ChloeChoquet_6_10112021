//Mettre le code JavaScript lié à la page photographer.html

let firstName;
let findMedia;
let identity;
let getLikes = [];

const getPhoto = async() =>{
    
    await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((value) =>  {

        //recupérer id de l'URL
        let params = new URLSearchParams(document.location.search);
        let idParam = parseInt(params.get('id'));

        //faire correspondre l'URL avec le photographe
        identity = value.photographers.find(({id}) => id === idParam);

        //récupérerle prénom
        if(identity){
            let nameSplit = identity.name.split(' ');
            firstName = nameSplit[0];
    
        }else{
            console.log('not true')
        }

        //recupérer les img du photographe en fonction de l'URL
        findMedia = value.media.filter(id => id.photographerId === idParam);

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
        //aficher stickyCard
        const test = userFactory(getLikes).stickyCard();
        //main.appendChild(test)
        //afficher la card du photographe
        const userCard = userFactory(identity).getPhotographersHeader();
        photographersHeader.appendChild(userCard);

        //afficher card des photos
        findMedia.forEach((media) =>{
            const photoCard = userFactory(media).getPorfolio();
            sectionPortfolio.appendChild(photoCard);
                
        })
};

photoDisplay();

/* const totalLikes = ()=>{
    let getLikes = [];
    findMedia.forEach((media) =>{
        getLikes.push(media.likes);
    });
    let getTotal = getLikes.reduce((a, b) => a + b);
    
    return getTotal;
    
} */
