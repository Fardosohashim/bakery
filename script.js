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
window.addEventListener('scroll', scrollup)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
     const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')


    if (scrollDown > sectionTop && scrollDown <= sectionTop +sectionHeight){
        sectionsClass.classList.add('active-link')
     }else{
        sectionsClass.classList.remove('active-link')
     }
    })

 }
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = Scrolleveal({
    origin: 'top',
    distance: '40px',
    opacity: 1,
    scale: 1.1,
    duration: 2500,
    delay: 300,
    //reset: true, //Animations repeat
})
sr.reveal(`.home_data, .about_img, .about_data, .visit_data`)

sr.reveal(`.home_img, .footer_img1, .footer_img2`,{rotate: {z: -15} })
sr.reveal(`.home_bread, .about_bread` ,{rotate: {z: 15} })
sr.reveal(`.home_footer`,{scale: 1, origin: 'bottom'})


sr.reveal(`.new_card:nth-child(1) img`,{rotate: {z: -30}, distance: 0 })
sr.reveal(`.new_card:nth-child(2) img`,{rotate: {z: 15}, distance: 0, delay: 600 })
sr.reveal(`.new_card:nth-child(3) img`,{rotate: {z: -30}, distance: 0, delay: 900 })

sr.reveal(`.favorite_card img`, {interval: 100, rotate: {z: 15}, distance:0})

sr.reveal(`.footer_container`, {scale: 1})