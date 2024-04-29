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
const navLink = document.querySelectorAll('.nav_link')
 const linkAction = () =>{

   const navMenu = document.getElementById('nav-menu')
   // when we click on each nav--link, we remove the show-menu click
   navMenu.classList.remove('show-menu')
 }
 navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the header
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        :header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollup =() =>{
const scrollup =document.getElementById('scrollup')
this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                    : scrollup.classList.remove('show-scroll') 
}
window.addEventListener('scroll, scrollup')
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections =document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrolldown = window.scrollY

    sections.forEach(current => {
     const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')


    if (scrolldown > sectionTop && scrolldown <= sectionTop +sectionHeight){
        sectionsClass.classList.add('active-link')
     }else{
        sectionsClass.classList.remove('active-link')
     }
    })

 }
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
