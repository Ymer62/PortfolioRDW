/**
 * Dessine un arc de cercle proportionnel au pourcentage pct dans le canvas d'identifiant id
 * @param id string l'identifiant du canvas
 * @param pct float le pourcentage
 * */
function drawCanvasArc(id, pct) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext("2d");

    //je calcule la fin de mon arc en radian
    var start = Math.PI;
    var end = pct * Math.PI / 50 + start;

    //on supprime le dessin précédent
    context.clearRect(0, 0, canvas.width, canvas.height);

    //on commence une ligne
    context.beginPath();
    //l'épaisseur de la ligne
    context.lineWidth = 10;
    //La couleur de la ligne
    context.strokeStyle = '#83f954';
    //Définition de l'arc de cercle
    //- l'abcisse du centre : 60
    //- l'ordonnée du centre : 60
    //- le rayon de l'arc : 40
    //- l'angle de départ (en radian) : start
    //- l'angle final : end
    //- le sens de rotation : false (aiguille d'une montre)
    context.arc(72, 75, 60, start, end, false);
    // Dessine la ligne
    context.stroke();

    // Définit le style de police de caractère, l'alignement et la couleur
    context.font = "bold 20px Arial";
    context.textAlign = "center";
    context.fillStyle = "black";
    // Ecrit pct +" %" à la position(x, y) (80, 85)
    context.fillText(pct + " %", 75, 82);
}
//on dessine l'arc
drawCanvasArc("Html", 99);
drawCanvasArc("Css", 98);
drawCanvasArc("Js", 85);
drawCanvasArc("Php", 75);
drawCanvasArc("Jquerry", 75);
drawCanvasArc("nodeJs", 75);
drawCanvasArc("Bootstrap", 90);
drawCanvasArc("Materialise", 90);
drawCanvasArc("Foundation", 80);
drawCanvasArc("PhpMyAdmin", 75);
drawCanvasArc("MySql", 75);
drawCanvasArc("Mariadb", 75);
drawCanvasArc("Linux", 90);
drawCanvasArc("Windows", 95);