//import data from '../../assets/pets.js';
//---------- MENU BURGER----------------------------------//

const iconMenu = document.querySelector('.menu__icon');
const menuLogo = document.querySelector('.menu__logo');
if (iconMenu) {
   const menuBody = document.querySelector('.menu__body');
   iconMenu.addEventListener("click", function(e) {
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
      menuLogo.classList.toggle('_active');
   });
}

//------------------------------ Слайдер-----------------------------------------------------//
const data = [
   {
     "name": "Jennifer",
     "img": "../../assets/images/pets-jennifer.png",
     "type": "Dog",
     "breed": "Labrador",
     "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
     "age": "2 months",
     "inoculations": ["none"],
     "diseases": ["none"],
     "parasites": ["none"]
   },
   {
     "name": "Sophia",
     "img": "../../assets/images/pets-sophia.png",
     "type": "Dog",
     "breed": "Shih tzu",
     "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
     "age": "1 month",
     "inoculations": ["parvovirus"],
     "diseases": ["none"],
     "parasites": ["none"]
   },
   {
     "name": "Woody",
     "img": "../../assets/images/pets-woody.png",
     "type": "Dog",
     "breed": "Golden Retriever",
     "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
     "age": "3 years 6 months",
     "inoculations": ["adenovirus", "distemper"],
     "diseases": ["right back leg mobility reduced"],
     "parasites": ["none"]
   },
   {
     "name": "Scarlett",
     "img": "../../assets/images/pets-scarlett.png",
     "type": "Dog",
     "breed": "Jack Russell Terrier",
     "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
     "age": "3 months",
     "inoculations": ["parainfluenza"],
     "diseases": ["none"],
     "parasites": ["none"]
   },
   {
     "name": "Katrine",
     "img": "../../assets/images/pets-katrine.png",
     "type": "Cat",
     "breed": "British Shorthair",
     "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
     "age": "6 months",
     "inoculations": ["panleukopenia"],
     "diseases": ["none"],
     "parasites": ["none"]
   },
   {
     "name": "Timmy",
     "img": "../../assets/images/pets-timmy.png",
     "type": "Cat",
     "breed": "British Shorthair",
     "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
     "age": "2 years 3 months",
     "inoculations": ["calicivirus", "viral rhinotracheitis"],
     "diseases": ["kidney stones"],
     "parasites": ["none"]
   },
   {
     "name": "Freddie",
     "img": "../../assets/images/pets-freddie.png",
     "type": "Cat",
     "breed": "British Shorthair",
     "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
     "age": "2 months",
     "inoculations": ["rabies"],
     "diseases": ["none"],
     "parasites": ["none"]
   },
   {
     "name": "Charly",
     "img": "../../assets/images/pets-charly.png",
     "type": "Dog",
     "breed": "Jack Russell Terrier",
     "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
     "age": "8 years",
     "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
     "diseases": ["deafness", "blindness"],
     "parasites": ["lice", "fleas"]
   }
 ];

//------------------------------ ПОПАП-----------------------------------------------------//
const logo = document.querySelector('.header__logo');
const gamLink = document.querySelectorAll('.menu-gam__link');
const menuBtn = document.querySelector('.menu-gam');
const activeGamLink = document.querySelector('.active-gam');
const menuBtnActive = document.querySelector('.menu-gam__menu');
const petsList = document.querySelector('.pets__list');
const pets = document.querySelector('.pets');
const bg = document.querySelector('.menu-bg');
const arrowPrev = document.querySelector('.pets__arrow--prev');
const arrowNext = document.querySelector('.pets__arrow--next');
const navLink = document.querySelectorAll('.nav__link');

const body = document.querySelector('body');
let cardArrSlider = [];
let countCard = 3;
let marginCard = 90;


const cardView = (insert, itemPx) => {
   for (let i = 0; i < countCard; i++) {
     let count = Math.floor(Math.random() * data.length);
     do {
       count = Math.floor(Math.random() * data.length);
     } while (cardArrSlider.indexOf(count) != -1)
     cardArrSlider.push(count);
     let card_slider = `
       <article class="pets__item" data-index=${count} style="margin-left: ${itemPx}px;">
       <img src=${data[count].img} class="pets__img" alt=${data[count].name}>
       <span class="pets__name">${data[count].name}</span>
       <a href="#" class="btn-link btn-link--js">Learn more</a>
       </article>
     `;
     petsList.insertAdjacentHTML(insert, card_slider);
   }
 }
 
 cardView('afterbegin', 0);
 
 if (pets.offsetWidth > 1279) {
   countCard = 3;
   marginCard = 90;
 }
 else if (pets.offsetWidth > 768) {
   countCard = 2;
   marginCard = 40;
 }
 else {
   countCard = 1;
   marginCard = 40;
 }
 
 window.addEventListener('resize', () => { 
   if (pets.offsetWidth > 1279) {
     marginCard = 90;
     countCard = 3;
   } 
   else if (pets.offsetWidth > 768) {
     countCard = 2;
     marginCard = 40;
   }
   else {
     marginCard = 40;
     countCard = 1;
   } 
 });
 
 //--------------------------модальное окно для показа питомца
 petsList.addEventListener('click', popupView);
 
 function popupView(e) {
   if (e.target.parentElement.classList == 'pets__item' || e.target.classList == 'pets__item') {
     e.preventDefault();
     let card = '';
     if (e.target.parentElement.classList == 'pets__item') {
       card = e.target.parentElement;
     } else card = e.target;
     const index = card.dataset.index;
     const modal = `
       <div class="modal">
       <div class="modal__blog">
         <button class="modal__btn-close">X</button>
         <div class="modal__img"><img src=${data[index].img} alt=${data[index].name}></div>
         <div class="modal__info">
           <h2 class="modal__info-title">${data[index].name}</h2>
           <p class="modal__info-rase">${data[index].type} - ${data[index].breed}</p>
           <p class="modal__info-description">${data[index].description}</p>
           <ul class="modal__info-skill">
             <li><span class="modal__info-skill-dots">•</span><b>Age:</b> ${data[index].age}</li>
             <li><span class="modal__info-skill-dots">•</span><b>Inoculations:</b> ${data[index].inoculations.join(', ')}</li>
             <li><span class="modal__info-skill-dots">•</span><b>Diseases:</b> ${data[index].diseases.join(', ')}</li>
             <li><span class="modal__info-skill-dots">•</span><b>Parasites:</b> ${data[index].parasites.join(', ')}</li>
           </ul>
         </div>
       </div>
     </div>
     `;
     petsList.insertAdjacentHTML('afterbegin', modal);
     body.style.overflow = 'hidden';
     document.addEventListener('click', (e) => {
       if (e.target.classList == 'modal__btn-close' || e.target.classList == 'modal') {
         let modal = document.querySelector('.modal');
         modal.remove();
         body.style.overflow = 'auto';
       }
     });
   }
 }
 //--------------------------------------------------модальное окно для показа питомца
 
 /*-----------------------------------------------------------------------сдвиг слайдера влево */
 arrowPrev.addEventListener('click', () => {
   cardView('beforeend', 0);
   cardArrSlider = cardArrSlider.slice(countCard);
   const cardsv = document.querySelectorAll('.pets__item');
   setTimeout(() => {
     cardsv[0].style.marginLeft = -(270+marginCard) + 'px';
     closeCardPrev(cardsv);
   }, 0);
 });
 
 function closeCardPrev(cardsv) {
   let i = 1;
   let timerId = setInterval(() => {
     if (i <= countCard - 1) {
       cardsv[i].style.marginLeft = -(270+marginCard) + 'px';
       i++;
     }
     else {
       clearTimeout(timerId);
       for (let i = 0; i < countCard; i++) cardsv[i].remove();
     }
   }, 1800);
 }
 /*-------------------------------------------сдвиг слайдера влево */
 
 /*------------------------------------------------сдвиг слайдера вправо */
 arrowNext.addEventListener('click', () => {
   cardView('afterbegin', -(270 + marginCard));
   cardArrSlider = cardArrSlider.slice(countCard);
   const cardsv = document.querySelectorAll('.pets__item');
   setTimeout(() => {
     cardsv[countCard - 1].style.marginLeft = 0 + 'px';
     closeCardNext(cardsv);
   }, 0);
 });
 
 function closeCardNext(cardsv) {
   let i = countCard - 2;
   let timerId = setInterval(() => {
     if (i >= 0) {
       cardsv[i].style.marginLeft = 0 + 'px';
       i--;
     }
     else {
       clearTimeout(timerId);
       for (let i = 0; i < countCard; i++) cardsv[cardsv.length - (i + 1)].remove();
     }
   }, 1800);
 }
 /*------------------------------------------------------------сдвиг слайда вправо */
 

