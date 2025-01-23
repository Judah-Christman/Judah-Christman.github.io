const nav = document.querySelector('nav');
const ul = document.querySelector('ul');

nav.style.backgroundColor = '#333333';
ul.style.backgroundColor = '#333333';

nav.addEventListener('mouseover', function() {
  nav.style.backgroundColor = '#161616';
  ul.style.backgroundColor = '#161616';
});

nav.addEventListener('mouseout', function() {
  nav.style.backgroundColor = '#333333';
  ul.style.backgroundColor = '#333333';
});

const toggle = document.getElementById('switch');
const view = document.getElementById('viewport');

toggle.addEventListener('click', function() {
    view.classList.toggle('view-windows');
    view.classList.toggle('view-mac');
});