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
<label for="dropdown__label">Trier par</label>
<div class="dropdown__ul">
    <select class="dropdown__choice" name ="typePhoto" id="photo-select">
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
        const name = document.createElement( 'h2' );
        name.textContent = data.name;
        const city = document.createElement( 'h4');
        city.textContent = data.city + ", " + data.country ;
        const tagline = document.createElement( 'h6');
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

        if(portfolioImg.match("jpg")){
            const imgGallery = document.createElement( 'img' );
            imgGallery.src = portfolioImg; 
            imgGallery.classList.add('portfolio__article__img');
            imgGallery.alt = data.title;
            imgGallery.onclick= () =>{
                lightbox(arr, index);
            }
            articlePortfolio.appendChild(imgGallery);
            
        }else {
            const video = document.createElement( 'video' );
            video.src = portfolioVideo; 
            video.setAttribute('type', 'video/mp4');
            video.classList.add('portfolio__article__img');
            video.alt = data.title;
            video.onclick= () =>{
                lightbox(arr, index);
            }
            articlePortfolio.appendChild(video);
        };
        
        
        let totalLikes = data.likes;
        

        const divTitle = document.createElement('div');
        divTitle.classList.add('portfolio__article__title');
        const pTitle = document.createElement('p');
        pTitle.textContent = data.title;
        const boxLikes = document.createElement('span');
        const countLikes = document.createElement('p');
        countLikes.setAttribute('id', 'countLike');
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
        <p>${getLikes} <img src="assets/icons/likeBlack.svg" class="like"></p>
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
                data.forEach(()=> {
                    data.sort(function (a, b){
                        result = b.likes - a.likes;
                        return result
                    })
                });  
            } 
            else if(photoSelect.value === 'titre'){
                data.forEach(()=> {
                    data.sort(function (a, b){
                        result = a.title > b.title;
                        return result
                    })
                });  
            }
            else if(photoSelect.value === 'date'){
                data.forEach(()=> {
                    data.sort(function (a, b){
                        result = new Date(b.date) - new Date(a.date);
                        return result
                    })
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
            lightboxContainer.classList.add('lightbox__container');
            document.body.appendChild(lightboxContainer);


            const slidesBox = document.createElement("div");
            slidesBox.classList.add('slides__box');
            lightboxContainer.appendChild(slidesBox);
            const previousBtn = document.createElement('a');
            const slides = document.createElement('div');
            
            const slidesPhoto = document.createElement('img');
            const slidesVideo = document.createElement('video');
            const divTitle = document.createElement('div');
            const slideTitle = document.createElement('p');
            const nextDiv = document.createElement('div');
            const closeImg = document.createElement('img');
            const nextBtn = document.createElement('a'); 
            
            slidesBox.appendChild(previousBtn);
            slidesBox.appendChild(slides);  
            
            // Pour mettre soit <img> soit <video>
            const whichMedia = () =>{ 
            if(data.image ){
                console.log(data)
                slidesPhoto.setAttribute('src', `assets/images/${firstName}/${data.image}`);
                slidesPhoto.alt = data.title;
                slides.appendChild(slidesPhoto);
                
            }else {
                slidesVideo.src = `assets/images/${firstName}/${data.video}`;
                slidesVideo.setAttribute("controls", "controls")
                slides.appendChild(slidesVideo);
            }  
        }   
            //mise en place des el DOM
            whichMedia();
            slides.appendChild(divTitle);
            divTitle.appendChild(slideTitle);
            slidesBox.appendChild(nextDiv);
            nextDiv.appendChild(closeImg);
            nextDiv.appendChild(nextBtn);

            //Ajouts des attributs
            previousBtn.classList.add('previous');
            previousBtn.innerHTML = "&#10094";
            slides.classList.add('slides');
            slidesPhoto.classList.add('slides__media');
            slidesVideo.classList.add('slides__media');
            divTitle.classList.add('slides__title');
            slideTitle.id = 'title';
            closeImg.classList.add('close');
            closeImg.alt = 'close dialog';
            closeImg.src = './../assets/icons/close.svg';
            nextBtn.classList.add('next');
            nextBtn.innerHTML = "&#10095";
            slideTitle.innerHTML = data.title;

            

            //Evement sur le click de Next
            nextBtn.onclick = (e) =>{  
                lightboxContainer.remove();
                i++;
                if(i >= arr.length){
                    i = 0;
                }
                data = arr[i];
                return  lightbox(arr, i);
            };
            //Evement sur le click de Previous
            previousBtn.onclick = () =>{ 
                lightboxContainer.remove();
                i--;
                console.log(arr[i]);
                if(i < 0){
                    i = arr.length-1
                }
                data = arr[i];
                return lightbox(arr, i);
            };
            /* lightboxContainer.innerHTML = `
            <div class="slides__box">
                <a class="previous">&#10094;</a>
                <div class="slides" >
                    <img class="slides__media" data-video-src="${link}" >
                    <div class="slides__title">
                    <p id="title">${data.title}<p>
                </div>
                </div>
                <div>
                    <span class="close"><img src="./../assets/icons/close.svg" alt="close dialog"></span>
                    <a class="next">&#10095;</a>
                </div>
            </div>
            
            `;  */ 

            //fermeture du modal Lightbox
            closeImg.onclick = () =>{
                
                lightboxContainer.remove()
            }
            
        
        };
        

        
        function closeLightbox(){
            
            
            document.querySelector('.lightbox__container').classList.add('fadeOut');
            /* document.querySelector('.lightbox__container').style.display = "none"; */
            
        }

    return {  getPhotographersHeader, getPorfolio, stickyCard, sortPhoto}
}





