const hamburger = document.querySelector('.hamburger'); 
const navMenu = document.getElementById('header-nav-menu');
const navLinks = document.querySelectorAll('.nav-link'); 

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); 
    navMenu.classList.toggle('active'); 
});

navLinks.forEach(link => link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
})); 