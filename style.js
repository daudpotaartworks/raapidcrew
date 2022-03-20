
{
    const list = document.querySelectorAll('.list');
    function activeLink(){
        list.forEach((item) => 
        item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item) => 
    item.addEventListener('click', activeLink));
}



// %%%%%%%%%%%% SCROLL TO TOP BUTTON %%%%%%%%%%%%%%%%

{
    var mybutton = document.getElementById("myBtn");
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav-container");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}