/**
 * @author Alexander Schmitt
 */
function handleScroll() {
    const scrollY = window.scrollY;
    const navbar = document.getElementById('navbar');
    const aboutY = document.getElementById('about').offsetTop;
    const pos = scrollY - aboutY;
    navbar.style.background = pos > 0 ? 'var(--navDark)' : 'var(--navLight)';
    navbar.classList.toggle('nav-dark', pos > 0);
}

window.addEventListener('scroll', handleScroll);