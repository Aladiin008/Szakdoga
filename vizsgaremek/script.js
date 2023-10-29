document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.getElementById("links");

    window.menuMegjelenites = function() {
        navLinks.style.right = "-50%";
        ujMenu(true);
    };

    window.menuBezaras = function() {
        navLinks.style.right = "-100%";
        ujMenu(false);
    };

    function ujMenu(megjelenitve) {
        var orokbefogadhatoLink = document.querySelector("#links ul li:nth-child(3) a");
        if (orokbefogadhatoLink) {
            orokbefogadhatoLink.innerHTML = megjelenitve ? "Örökbefogadható<br> állataink" : "Örökbefogadható állataink";
        }
    }
});