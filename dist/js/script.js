//humburger
const toggle1 = document.querySelector('#toggle1');
const navMenu = document.querySelector('#nav-menu');

toggle1.addEventListener('click', function(){
  toggle1.classList.toggle('toggle1-active');
  navMenu.classList.toggle('hidden');

});

//navbar


//darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }

});

//togglemove
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

