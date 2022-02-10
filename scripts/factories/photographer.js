function photographerFactory(data) {
    const { name, portrait , city, country, tagline, price, id } = data;

    const picture = `assets/photographers/PhotographersID/${portrait}`;
    const pagePhotographers =   `photographer.html?id=${id} ` ;

    

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h4 = document.createElement( 'h4');
        h4.textContent = city + ", " + country ;
        const h6 = document.createElement( 'h6');
        h6.textContent = tagline;
        const p = document.createElement( 'p');
        p.textContent = price + "€/jour"; 
        const link = document.createElement('a');
        link.setAttribute("href", pagePhotographers); 

        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(h4);
        article.appendChild(h6);
        article.appendChild(p); 
        return (article);
    }
    

    return { name, picture, getUserCardDOM  }
}

/* function headerPhotographers(data){
    const{ name, portrait, city, country, tagline} = data;


} */