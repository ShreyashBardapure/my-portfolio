// Hamburger toggle
const hamburger = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
