var hamburger_icon = document.getElementById("hamburger_icon");
var menu = document.getElementById("mobile_menu");

// Toggle classes when hamburger icon is clicked
hamburger_icon.onclick = function() {
    myFunction();
};

// Function to toggle classes
function myFunction() {
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