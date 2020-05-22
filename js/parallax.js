var ypos = 0;
var positionScroll;
var vitesse = 0.8; //Changer la valeur par la vitesse de défilement souhaitée



window.onload = function() {
    document.onscroll = function display() {
        positionScroll = window.pageYOffset + -900;
        ypos = positionScroll *= -vitesse;
        document.querySelector(".parallax").style.backgroundPosition = "0px " + ypos + "px";

    }
}