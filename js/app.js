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
            menu.addClass('dropdown-show');
            menu.removeClass('dropdown-hide');
        } else {
            menu.removeClass('dropdown-show');
            menu.addClass('dropdown-hide');
        }
    };
});

/**
 * show/hide the security area
 * @param enable
 */
function enableSecurity(enable)
{
    var securityArea = document.getElementById('enable-security');
    if(enable) {
        securityArea.addClass('show');
        securityArea.removeClass('hide');
    } else {
        securityArea.addClass('hide');
        securityArea.removeClass('show');
    }
}

Element.prototype.addClass = function(className) {
    this.className = this.className + ' ' + className;
};
Element.prototype.removeClass = function(className) {
    this.className = this.className.replace(className, '').trim();
};

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};