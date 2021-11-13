/* ==== Menu Show ====*/

const showMenu =(toggleID , navId) => {
    const toggle = document.getElementById(toggleID),
        nav = document.getElementById(navId);

        if(toggle && nav){
            toggle.addEventListener('click',()=>{
                nav.classList.toggle('show');
            });//End of Click Event
        }
}

showMenu('nav-toggle','nav-menu');

/* ==== Remove Menu Mobile  ===== */

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    //Active Link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    //Remove Menu Mobile
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach( n=> n.addEventListener('click' , linkAction))