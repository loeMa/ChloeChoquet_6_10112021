export function photographerFactory(data) {
    const { name, portrait , city, country, tagline, price, id } = data;

    const picture = `assets/photographers/PhotographersID/${portrait}`;
    const pagePhotographers =   `photographer.html?id=${id} ` ;

    

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.alt = `photo de profil de :${name}`;
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3');
        h3.textContent = city + ", " + country ;
        const h4 = document.createElement( 'h4');
        h4.textContent = tagline;
        const p = document.createElement( 'p');
        p.textContent = price + "€/jour"; 
        const link = document.createElement('a');
        link.setAttribute("href", pagePhotographers); 

        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(p); 
        return (article);
    }
    

    return { name, picture, getUserCardDOM  }
}

