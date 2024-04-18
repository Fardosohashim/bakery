/*=============== SHOW MENU ===============*/
const navMenu =document.getElementById('nav-menu'),
       navToggle = document.getElementById('nav-toggle'),
       navClose = document.getElementById('nav-close')

    //    Menu show
    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }
// nav hidden
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink =document.querySelectorAll('.nav_link')
 const linkAction = () =>{

   const navMenu = document.getElementById('nav-menu')
   // when we click on each nav--link, we remove the show-menu click
   navMenu.classList.remove('show-menu')
 }
 navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== ADD BLUR HEADER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
