/**
 * @author Alexander Schmitt
 */
function handleScroll() {
    const scrollY = window.scrollY;
    const navbar = document.getElementById('navbar');
    navbar.style.opacity = scrollY > 10 ? '0.80' : '1';
    navbar.style.height = scrollY > 10 ? '50px' : '60px';
}



window.addEventListener('scroll', handleScroll);

function toggleMobileMenu(menu) {
    menu.classList.toggle('open')
}