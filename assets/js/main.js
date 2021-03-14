let menuClick = document.getElementById('menu-click');
let enlaces = document.querySelector('.enlaces-header')

/* FORMAS DE DECLARAR 1
menuClick.addEventListener('click', function(){});
/* FORMAS DE DECLARAR 2
menuClick.addEventListener('click', () => {});
*/
menuClick.addEventListener('click', () => {
    enlaces.classList.toggle('click');
    enlaces.style.clipPath = 'circle(150% at 100% 0'
    enlaces.style.transition='clip-path 2s'
});

menuClick.addEventListener('clickreturn', () => {
    enlaces.classList.toggle('clickreturn');
    enlaces.style.clipPath = 'circle(100% at 0% 0'
    enlaces.style.transition='clip-path 2s'
});
console.log(menuClick)
console.log(enlaces)