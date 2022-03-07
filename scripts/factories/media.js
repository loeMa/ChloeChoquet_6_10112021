const main = document.getElementById("main");
const photographersHeader = document.querySelector(".photograph-header");
const sectionPortfolio = document.createElement("section");
sectionPortfolio.setAttribute('class', 'portfolio')

const infoDiv = document.createElement('div');
infoDiv.classList.add('sticky')
const spanLikePrice = document.createElement("span");
spanLikePrice.classList.add('sticky__info');
infoDiv.appendChild(spanLikePrice);
const selectImg = document.createElement('div');
selectImg.setAttribute('class', 'dropdown')
main.appendChild(selectImg);

selectImg.innerHTML = `
<label for="photo-select">Trier par</label>
<div class="dropdown__ul">
    <select class="dropdown__choice" name ="photo-select" id="photo-select">
        <option style="display: none">-- Choisir --</option>
        <option value="popularité">Popularité</option>
        <option value="date">Date</option>
        <option value="titre">Titre</option>
    </select>
    <span class="custom__arrow"></span>
</div>
`;

main.appendChild(sectionPortfolio);
main.appendChild(infoDiv);


function userFactory(data, arr, index) {

    const portfolioImg = `assets/images/${firstName}/${data.image}`;
    const portfolioVideo = `assets/images/${firstName}/${data.video}`;
    

    function getPhotographersHeader(){
        
        const picture = `assets/photographers/PhotographersID/${data.portrait}`;
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.alt = data.name;
        img.setAttribute("src", picture);
        const name = document.createElement( 'h1' );
        name.textContent = data.name;
        const city = document.createElement( 'h2');
        city.textContent = data.city + ", " + data.country ;
        const tagline = document.createElement( 'h3');
        tagline.textContent = data.tagline;
        photographersHeader.appendChild(article);
        photographersHeader.appendChild(img);  
        article.appendChild(name);
        article.appendChild(city);
        article.appendChild(tagline);
        
        return article;
    } 
    
    
    function getPorfolio(){

        const articlePortfolio = document.createElement('article');
        articlePortfolio.setAttribute('class', 'portfolio__article');
        sectionPortfolio.appendChild(articlePortfolio);
        const linkImg = document.createElement('button');
        linkImg.setAttribute('class', 'portfolio__btn__img');
        articlePortfolio.appendChild(linkImg);

        if(portfolioImg.match("jpg")){
            const imgGallery = document.createElement( 'img' );
            imgGallery.src = portfolioImg; 
            imgGallery.classList.add('portfolio__article__img');
            imgGallery.alt = data.title;
            linkImg.onclick= () =>{
                lightbox(arr, index);
            }
            linkImg.appendChild(imgGallery);
            
        }else {
            const video = document.createElement( 'video' );
            const sourceVid = document.createElement('source');
            sourceVid.src = portfolioVideo; 
            video.setAttribute('type', 'video/mp4');
            video.classList.add('portfolio__article__img');
            video.alt = data.title;
            linkImg.onclick= () =>{
                lightbox(arr, index);
            }
            linkImg.appendChild(video);
            video.appendChild(sourceVid);
        };
        
        
        let totalLikes = data.likes;
        

        const divTitle = document.createElement('div');
        divTitle.classList.add('portfolio__article__title');
        const pTitle = document.createElement('p');
        pTitle.textContent = data.title;
        const boxLikes = document.createElement('span');
        const countLikes = document.createElement('p');
        countLikes.setAttribute('class', 'countLike');
        countLikes.textContent = totalLikes;
        const heart = document.createElement('div');
        heart.setAttribute('class', 'like like-no');
        heart.setAttribute('aria-label', 'Likes');
        heart.onclick= (event) =>{
            buttonLike(event)
            stickyCard();
        };


        articlePortfolio.appendChild(divTitle);
        divTitle.appendChild(pTitle);
        divTitle.appendChild(boxLikes);
        boxLikes.appendChild(countLikes);
        boxLikes.appendChild(heart);
        
        
        const buttonLike = (e) =>{
            if(e.target.classList.contains('like-yes')){
                totalLikes--;
                countLikes.textContent = totalLikes;
                
                getLikes--
                e.target.classList.add('like-no');
                e.target.classList.remove('like-yes');
                console.log("no")
                
            }else{
                totalLikes++;
                countLikes.textContent = totalLikes;
                
                getLikes++
                e.target.classList.add('like-yes');
                e.target.classList.remove('like-no');
                console.log("yes")
                
        } 
        }
        
        return articlePortfolio;
}
    const stickyCard = () =>{
        infoDiv.innerHTML = `
        <span class="sticky__info">
        <p>${getLikes} <img src="assets/icons/likeBlack.svg" class="like" alt="likes"></p>
        <p>${identity.price}€ / jour </p>
        </span>` 
        
        return infoDiv;
    }
    
    const sortPhoto = () => {
        const photoSelect = document.querySelector('#photo-select');
        photoSelect.addEventListener('change', ()=>{
            
            let result = [];
            sectionPortfolio.innerHTML='';
            if(photoSelect.value === 'popularité'){
                
                    data.sort(function (a, b){
                        result = b.likes - a.likes;
                        return result;
                });  
            } 
            else if(photoSelect.value === 'titre'){
                
                    data.sort(function (a, b){
                        if(a.title > b.title){
                            return 1;
                        }else if(a.title < b.title){
                            return -1;
                        }else{
                            return 0;
                        }
                });
            }
            else if(photoSelect.value === 'date'){
                
                    data.sort(function (a, b){
                        result = new Date(b.date) - new Date(a.date);
                        return result;
                    
                });  
            };  
            data.forEach((media, index, arr)=>{
                userFactory(media,arr, index).getPorfolio();
                
            })
        })
        }
        

        const lightbox = (arr, i)=>{

            //DOM Element
            const lightboxContainer = document.createElement('div');
            lightboxContainer.id = "lightboxContainer";
            lightboxContainer.classList.add('lightbox__container');
            document.body.appendChild(lightboxContainer);


            const slidesBox = document.createElement("div");
            slidesBox.classList.add('slides__box');
            lightboxContainer.appendChild(slidesBox);
            const previousBtn = document.createElement('button');
            const slides = document.createElement('div');
            
            const slidesPhoto = document.createElement('img');
            const slidesVideo = document.createElement('video');
            const sourceVid = document.createElement('source');
            const divTitle = document.createElement('div');
            const slideTitle = document.createElement('p');
            const nextDiv = document.createElement('div');
            const closeSlides = document.createElement('button');
            const nextBtn = document.createElement('button'); 
            
            slidesBox.appendChild(previousBtn);
            slidesBox.appendChild(slides);  
            
            // Pour mettre soit <img> soit <video>
            const whichMedia = () =>{ 
            if(data.image ){
                slidesVideo.remove();
                slidesPhoto.setAttribute('src', `assets/images/${firstName}/${data.image}`);
                slidesPhoto.alt = data.title;
                slideTitle.innerHTML = data.title;
                slides.appendChild(slidesPhoto);
                slides.appendChild(divTitle);
                
            }else {
                slidesPhoto.remove();
                sourceVid.src = `assets/images/${firstName}/${data.video}`;
                sourceVid.type = "video/mp4";
                slidesVideo.setAttribute("controls", "controls");
                slideTitle.innerHTML = data.title;
                slides.appendChild(slidesVideo);
                slidesVideo.appendChild(sourceVid);
                slides.appendChild(divTitle);
            }  
        }   
            //mise en place des el DOM
            whichMedia();
            
            divTitle.appendChild(slideTitle);
            slidesBox.appendChild(nextDiv);
            nextDiv.appendChild(closeSlides);
            nextDiv.appendChild(nextBtn);

            //Ajouts des attributs et class
            previousBtn.classList.add('previous');
            previousBtn.role = 'button';
            previousBtn.innerHTML = "&#10094";
            slides.classList.add('slides');
            slidesPhoto.classList.add('slides__media');
            slidesVideo.classList.add('slides__media');
            divTitle.classList.add('slides__title');
            slideTitle.id = 'title';
            closeSlides.classList.add('close');
            closeSlides.alt = 'close dialog';
            closeSlides.setAttribute('aria-label',"Fermer") ;
            closeSlides.src = './../assets/icons/closeColor.svg';
            nextBtn.classList.add('next');
            nextBtn.role = "button";
            nextBtn.innerHTML = "&#10095";

            main.setAttribute('aria-hidden', 'true');
            main.style.display = 'none';
            body.classList.add('no-scroll');
            

            //Evenement au clavier Next
            document.body.addEventListener('keydown', (e)=>{
                if (e.code === 'ArrowRight') {
                    nextSlide();
                } else if (e.code === 'ArrowLeft') {
                    previousSlide();
                } else if(e.code === 'Escape'){
                    closeLightbox();
                }
            })

            //Evement sur le click de Next
            nextBtn.onclick = (e) =>{  
                nextSlide();
            };
            //Evement sur le click de Previous
            previousBtn.onclick = () =>{ 
                previousSlide()
            };


            //fonction pour passer d'une slide à l'autre
            const nextSlide = ()=>{
                i++;
                if(i >= arr.length){
                    i = 0;
                }
                data = arr[i];
                return  whichMedia(arr, i);
            }

            const previousSlide = () =>{
                i--;
                console.log(arr[i]);
                if(i < 0){
                    i = arr.length-1
                }
                data = arr[i];
                return whichMedia(arr, i);
            }
            
            //fermeture du modal Lightbox
            closeSlides.onclick = () =>{
                closeLightbox();
            }
            const closeLightbox = ()=>{
                main.setAttribute('aria-hidden', 'false');
                main.style.display = 'block';
                body.classList.remove('no-scroll');
                lightboxContainer.remove();
            }
        };

    return {  getPhotographersHeader, getPorfolio, stickyCard, sortPhoto}
}





