const modal = document.getElementById("contact_modal");
const body = document.getElementById("body");
const modalCloseBtn = document.querySelector('.modal-close-btn');
const modalOpenBtn = document.querySelector('.modal-open-btn');

function displayModal() {
    main.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-hidden', 'false');
    body.classList.add('no-scroll');
	modal.style.display = "flex";
    modalCloseBtn.focus();
}

function closeModal() {
    main.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-hidden', 'true');
    body.classList.remove('no-scroll');
    modal.style.display = "none";
    modalOpenBtn.focus();
    console.log('fermer')
}

modal.addEventListener("keydown", (e)=>{
    console.log(e)
    
    if( e.code === 'Escape'){
        closeModal();
    }
    
})

const headerModal = document.querySelector('.modal > header>h2');
const form = document.querySelector('form');
const sendBtn = document.querySelector('#contact_button');
const inputs = document.querySelectorAll("input[type = 'text'], input[type = 'email'], textarea")
let firstData, lastData, mailData, msgData;

const domModal = (data) =>{
headerModal.innerHTML += ` ${data}`
    console.log(data)
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(firstData, lastData, mailData, msgData){

        let data = {
            firstData,
            lastData,
            mailData,
            msgData,
        }
        console.log(data)
        form.reset();
        firstData = null;
        lastData = null;
        mailData = null;
        msgData = null;
        closeModal();
    }else{
        console.log('nop')
        firstCheck();
        lastCheck();
        emailCheck();
        msgCheck();
    }
    
})

inputs.forEach((input) => input.addEventListener("input", (e) =>{
    switch(e.target.id){
        case "firstName":
            firstCheck(e.target.value);
            break;
        case "lastName":
            lastCheck(e.target.value);
            break;
        case "email":
            emailCheck(e.target.value);
            break;
        case "message":
            msgCheck(e.target.value);
            break;
        default:
        null;
    }
}))

const errorFirst = document.getElementById('errorFirst');
const errorLast = document.getElementById('errorLast');
const errorMail = document.getElementById('errorMail');
const errorMsg = document.getElementById('errorMsg');
const nameRegex = /^[a-zA-Z\-]+$/

const firstCheck = (value) =>{
    console.log(value)
    if(value.length < 3){
        errorFirst.parentNode.setAttribute('aria-invalid', "true")
        errorFirst.innerHTML = "Vous devez entrez un prenom de minimun 3 lettres";
        firstData = null;
    }else if(!value.match(nameRegex)){
        errorFirst.innerHTML = "Vous devez entrez un prenom avec des lettres";
        firstData = null;
    } else{
        errorFirst.innerHTML = " ";
        firstData = value
    }
}

const lastCheck = (value) =>{
    if(value.length < 3){
        errorLast.innerHTML = "Vous devez entrez un prenom de minimun 3 lettres";
        lastData = null;
    }else if(!value.match(nameRegex)){
        errorLast.innerHTML = "Vous devez entrez un prenom avec des lettres";
        lastData = null;
    }else{
        errorLast.innerHTML = " ";
        lastData = value
}
}

const emailCheck = (value) =>{
    mailData = value
}

const msgCheck = (value) =>{
    if(value.length < 2){
        errorMsg.innerHTML = "Merci d'écrire un message";
        msgData = null;
    }else{
        errorMsg.innerHTML = " ";
        msgData = value
    }
    
}