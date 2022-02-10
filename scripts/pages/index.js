    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        const photographers = [
        await fetch("./data/photographers.json")
        .then(function(res){
            if(res.ok){
                return res.json();
            }
        })
        .then(function(value){
            let result = value.photographers;
            return  result;
            
        })
        .catch(function(err){
            console.log(err)
        })]  
        
        // et bien retourner le tableau photographers seulement une fois
        return ({
            photographers: [photographers[0][0],photographers[0][1],photographers[0][2],photographers[0][3],photographers[0][4],photographers[0][5]]})
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    
