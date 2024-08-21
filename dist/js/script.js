//humburger
const toggle1 = document.querySelector('#toggle1');
const navMenu = document.querySelector('#nav-menu');

toggle1.addEventListener('click', function(){
  toggle1.classList.toggle('toggle1-active');
  navMenu.classList.toggle('hidden');

});

//navbar
window.onscroll = function() {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed')
    }
}
