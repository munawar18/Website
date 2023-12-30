let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
}


var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
     document.querySelector("header").style.top = "-280px";
  }
  prevScrollpos = currentScrollPos;
}


$(document).on('click','.navbar-toggleable-xs.in',function(e) {
  if( $(e.target).is('a') ) {
    $(this).collapse('hide');
  }
});