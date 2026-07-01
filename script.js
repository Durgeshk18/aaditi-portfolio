// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Header scroll state + progress bar
const header = document.getElementById('header');
const progressBar = document.getElementById('progress-bar');

function onScroll() {
  header.classList.toggle('scrolled', window.scrollY > 8);
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
  progressBar.style.width = progress + '%';
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Resume dropdown
const resumeBtn = document.getElementById('resumeBtn');
const resumeMenu = document.getElementById('resumeMenu');
resumeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  resumeMenu.classList.toggle('open');
});
document.addEventListener('click', () => resumeMenu.classList.remove('open'));

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('mobile-open');
});
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('mobile-open'));
});

// Scroll reveal animation
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));
