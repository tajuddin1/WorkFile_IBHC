var hamburger_icon = document.getElementById("hamburger_icon");
var menu = document.getElementById("mobile_menu");

// Toggle classes when hamburger icon is clicked
hamburger_icon.onclick = function() {
    
    hamburger_icon.classList.toggle("change");
    menu.classList.toggle("extend");
}

// Remove classes when clicking outside the menu and hamburger icon
document.addEventListener("click", function(event) {
    if (!menu.contains(event.target) && event.target !== hamburger_icon) {
        menu.classList.remove("extend");
        hamburger_icon.classList.remove("change");
    }
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   mainNav = document.querySelector(".mainNav");
  if (document.body.scrollTop > 52 || document.documentElement.scrollTop > 52) {
    mainNav.classList.add('top');
  } else {
    mainNav.classList.remove('top');
  }
}