function setScrollVar() {
    const htmlElement = document.documentElement;
    const PercentScreenHeightScroll = htmlElement.scrollTop / htmlElement.clientHeight;
    const HeroTitle = document.getElementById('hero-title');
    const Hero = document.getElementById('hero');
    let startH1 = window.innerWidth < 768 ? 5.4 : 15.5;
    let factor = window.innerWidth < 768 ? 50.5 : 100.5;

    document.documentElement.style.setProperty('--scroll', Math.min(PercentScreenHeightScroll * 100, 100) + '%');

    if (PercentScreenHeightScroll < 1) {
        let colorValue = Math.round(255 - PercentScreenHeightScroll * 255);
        HeroTitle.style.fontSize = (PercentScreenHeightScroll * factor + startH1) + 'rem';
        Hero.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
        Hero.style.position = 'fixed';
        Hero.style.zIndex = '99';
        Hero.style.opacity = '1';
    } else {
        Hero.style.position = 'relative';
        Hero.style.transition = 'opacity 0.5s ease-in-out';
        Hero.style.zIndex = '-1';
        HeroTitle.style.fontSize = startH1 + 'rem';
    }
}

window.addEventListener('scroll', setScrollVar);
window.addEventListener('resize', setScrollVar);

setScrollVar();
