const main = document.getElementById("main");
const photographersHeader = document.querySelector(".photograph-header");
const sectionPortfolio = document.createElement("section");
sectionPortfolio.setAttribute('class', 'portfolio')
const selectImg = document.createElement('div');
selectImg.setAttribute('class', 'select')
main.appendChild(selectImg);
selectImg.innerHTML = `
<p>Trier par</p>
<select class="select__choice" name ="typePhoto" id="photo-select">
    <option value="popularité">Popularité</option>
    <option value="date">date</option>
    <option value="titre">titre</option>
</select>
`;
main.appendChild(sectionPortfolio);

function userFactory(data) {

    function getPhotographersHeader(){
        
        const picture = `assets/photographers/PhotographersID/${data.portrait}`;
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
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

        const portfolioImg = `assets/images/${firstName}/${data.image}`;
        const portfolioVideo = `assets/images/${firstName}/${data.video}`;
        
        const articlePortfolio = document.createElement('article');
        articlePortfolio.setAttribute('class', 'portfolio__article')
        sectionPortfolio.appendChild(articlePortfolio);
        
        if(portfolioImg.match("jpg")){
            const imgGallery = document.createElement( 'img' );
            imgGallery.src = portfolioImg; 
            imgGallery.classList.add('portfolio__article__img');
            articlePortfolio.appendChild(imgGallery);
            
        }else {
            const video = document.createElement( 'video' );
            video.src = portfolioVideo; 
            video.setAttribute('type', 'video/mp4');
            video.classList.add('portfolio__article__img');
            articlePortfolio.appendChild(video);
        };
        
        
        let totalLikes = data.likes;
        

        const divTitle = document.createElement('div');
        divTitle.classList.add('portfolio__article__title');
        const pTitle = document.createElement('p');
        pTitle.textContent = data.title;
        const boxLikes = document.createElement('span');
        const countLikes = document.createElement('p');
        countLikes.textContent = totalLikes;
        const heart = document.createElement('div');
        heart.setAttribute('class', 'like like-no');
        heart.onclick= (event) =>{
            buttonLike(event)
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
                e.target.classList.add('like-no');
                e.target.classList.remove('like-yes');
                console.log("yes")
                
            }else{
                totalLikes++;
                countLikes.textContent = totalLikes;
                e.target.classList.add('like-yes');
                e.target.classList.remove('like-no');
                console.log("no")
                
        } 
        }
            

        return articlePortfolio;
}
const stickyCard = () =>{
    const infoDiv = document.createElement('div');
    
    infoDiv.innerHTML = `
    <span class="sticky__info">
    ${data} <img src="assets/icons/like.svg" class="like">
    ${identity.price}€ / jour 
    </span>`
    main.appendChild(infoDiv);
    return infoDiv;
}

    return {  getPhotographersHeader, getPorfolio, stickyCard  }
}



