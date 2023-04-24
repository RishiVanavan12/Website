 menu= document.querySelector('menu-icon');
 navlist= document.querySelector('.navlist');

menu.onclick = () => {
    menu.claaList.toggle('bx-x');
    navlist.claaList.toggle('open');
};
const sr= ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});
sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:200, origin:'right'});