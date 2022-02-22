function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "flex";
    
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

const headerModal = document.querySelector('.modal > header>h2');
const form = document.querySelector('form > div');
console.log(headerModal)

const domModal = (data) =>{
    //const nameHeader = document.createElement('h2');
    const restForm = document.createElement('label');
    

    //headerModal.appendChild(nameHeader);
    headerModal.innerHTML += `  ${data}`;

    form.appendChild(restForm);
    restForm.innerHTML = `Nom 
    <input type="text" >
    <label for="email">Email</label>
    <input name="email" type="email" >
    <label for="message">Votre message</label>
    <textarea name="message" id="message" type="textarea"></textarea>
    `

}