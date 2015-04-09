/**
 * Created by tdmman on 4/9/2015.
 */

// Dropdown Menu
var allButton = document.querySelectorAll('a[data-toggle="dropdown"]');
var buttonArray = Array.prototype.slice.call(allButton,0);
buttonArray.forEach(function(button){
    var href = button.getAttribute('href');
    href = href.trim();
    href = href.substr(1);
    var menu = document.getElementById(href);
    button.onclick = function(event) {
        event.preventDefault();
        if(!menu.hasClass('dropdown-show')) {
            menu.classList.add('dropdown-show');
            menu.classList.remove('dropdown-hide');
        } else {
            menu.classList.remove('dropdown-show');
            menu.classList.add('dropdown-hide');
        }
    };
});

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};