/**
 * @author Alexander Schmitt
 */
function handleScroll() {
    const scrollY = window.scrollY;
    const navbar = document.getElementById('navbar');
    const aboutY = document.getElementById('about').offsetTop;
    const pos = scrollY - aboutY;

    navbar.style.opacity = scrollY > 10 ? '0.80' : '1';
    navbar.style.height = scrollY > 10 ? '50px' : '60px';
    navbar.style.background = !document.querySelector('.checkbox').checked && pos > 0 ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0)';
}

function handleCheckboxChange() {
    const checkbox = document.querySelector('.checkbox');
    const root = document.documentElement;
    const colorMode = checkbox.checked ? '#f1f1f1' : '#000000';

    root.style.setProperty('--colorMode', colorMode);
    root.style.setProperty('--inverseColorMode', checkbox.checked ? '#000000' : '#ffffdf');
    root.style.setProperty('--colorCardsOuter', checkbox.checked ? '26262659' : 'f1f1f1');
    root.style.setProperty('--colorCardsInner', checkbox.checked ? '000000' : 'ffffff');
    console.log(checkbox.state);
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', () => {
    // Add change event listener to checkbox
    document.querySelector('.checkbox').addEventListener('change', handleCheckboxChange);
});