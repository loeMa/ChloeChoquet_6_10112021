//Mettre le code JavaScript lié à la page photographer.html
let photo = [];
const main = document.getElementById("main");
const photographersHeader = document.querySelector(".photograph-header");
let array = [];
const sectionPortfolio = document.createElement("section");
sectionPortfolio.setAttribute('class', 'portfolio')
main.appendChild(sectionPortfolio);
let params = new URLSearchParams(document.location.search);
let idParam = parseInt(params.get("id"), 10);
photo.photographerId = idParam;
let id = photo.photographerId ;
//console.log(id);


const getPhoto = async() =>{
    
    await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((value) => photo = value)
    .catch((err) => console.log(err))
    
    console.log(photo)
}

let nameSplit;

const photoDisplay = async ()=>{
        await getPhoto();
        
        // pour trouver le photographe en fonction de son id
        const findId =  photo.photographers.find(({id}) => id === idParam );
        array.push(findId);
        console.log(findId)
        nameSplit = findId.name.split(" ");
        console.log(nameSplit);
        const findIdMedia =  photo.media.filter( id => id.photographerId === idParam );
        array.push(findIdMedia);
    

    
        array.forEach(( media) =>{
                
                const userCard = userFactory(media).getPhotographersHeader();
                photographersHeader.appendChild(userCard);
               
            }); 


        findIdMedia.forEach((media) =>{
        /* const PhotoCard = userFactory(media).getPorfolio();
                main.appendChild(PhotoCard); */
        const portfolioImg = `assets/images/${nameSplit[0]}/${media.image}`;
        const portfolioVideo = `assets/images/${nameSplit[0]}/${media.video}`;;
        console.log(portfolioVideo);

        const articlePortfolio = document.createElement('article');
        articlePortfolio.setAttribute('class', 'portfolio__article')
        sectionPortfolio.appendChild(articlePortfolio);
        
        if(portfolioImg.match("jpg")){
            const img = document.createElement( 'img' );
            img.setAttribute("src", portfolioImg); 
            img.setAttribute('class', 'gallery');
            articlePortfolio.appendChild(img);
            
        }else {
            const video = document.createElement( 'video' );
            video.setAttribute("src", portfolioVideo); 
            video.setAttribute('type', 'video/mp4');
            video.setAttribute('class', 'gallery');
            articlePortfolio.appendChild(video);
        }; 
        
        
        /* const PhotoCard = userFactory(media).getPhotographersHeader();
                main.appendChild(userCard); */

        

        
}) 
        
    

};

photoDisplay();