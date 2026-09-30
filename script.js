
const heroType = document.getElementById('heroType');
const searchTyped = document.getElementById('searchTyped');
const fromField = document.getElementById('fromField');
const toField = document.getElementById('toField');
const dateField = document.getElementById('dateField');
const travField = document.getElementById('travField');

function typeWrite(el, text, speed = 55) {
  if (!el) return;
  el.textContent = '';
  let i = 0;
  const interval = setInterval(() => {
    el.textContent = text.slice(0, i + 1);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

function bootTypingLoops(){
  typeWrite(heroType, 'Chercher un hôtel à Hammamet pour 2 adultes', 42);
  setTimeout(() => typeWrite(searchTyped, 'Hôtel à Hammamet • 2 adultes • 2 nuits', 44), 500);
  setTimeout(() => typeWrite(fromField, 'TUN – Tunis, Tunisie', 52), 1200);
  setTimeout(() => typeWrite(toField, 'PAR – Paris, France', 52), 1750);
  setTimeout(() => typeWrite(dateField, '12 Octobre 2026', 52), 2300);
  setTimeout(() => typeWrite(travField, '2 Voyageurs', 52), 2850);
}

bootTypingLoops();
setInterval(bootTypingLoops, 12000);

const slides = [...document.querySelectorAll('.show-slide')];
let current = 0;
function rotateSlides(){
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === current);
  });
  current = (current + 1) % slides.length;
}
setInterval(rotateSlides, 2400);

window.addEventListener('load', () => {
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 200);
});
