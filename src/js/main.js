let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let forest = document.getElementById('forest');
let fireflies = document.getElementById('fireflies');
let title = document.getElementById('title');
let btn = document.getElementById('btn');

window.addEventListener('scroll', function() {
    let scroll = window.scrollY;

    stars.style.transform = 'translateY(' + scroll / 10 + '%)';
    moon.style.transform = 'translateY(' + scroll / 12 + '%)';
    forest.style.transform = 'translateY(' + scroll / 15 + '%)';
    fireflies.style.transform = 'translateY(' + scroll / 20 + '%)';
    title.style.transform = 'translateY(' + scroll / 15 + 'rem)';
    btn.style.transform = 'translateY(' + scroll / 15 + 'rem)';
});