/**
 * @author Alexander Schmitt
 */

window.onscroll = function() {
    let scrollY = window.scrollY;
    let navbar = document.getElementById('navbar');
    let aboutY = document.getElementById('about').offsetTop;
    if (aboutY < scrollY) {
        navbar.style.opacity = '0.80';
        navbar.style.height = '50px';
    } else {
        navbar.style.opacity = '1';
        navbar.style.height = '60px';
    }
    if (aboutY > 0){
        navbar.style.background = 'rgba(255,255,255,0.15)';
    } else {
        navbar.style.background = 'rgba(0,0,0)';
    }
    window.console.log(scrollY, aboutY)
}
