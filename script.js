
const nav = document.querySelector('nav');
const expanded = document.querySelector('.expanded');
const minified = document.querySelector('.minified');
const main = document.querySelector('main');
const feed = document.querySelector('.feed');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  expanded.classList.toggle('active');
  minified.classList.toggle('active');
  main.classList.toggle('active');
  feed.classList.toggle('active');
})