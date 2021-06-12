var nav = document.getElementById("navbars");
var loader = document.getElementById("pre-loader");

window.addEventListener('load', function() {
    loader.style.display = "none";
});

function openMenu() {
    nav.style.right = "0px";
    nav.style.display = "block";
    document.getElementById("menu-btn").style.display = "none";
}

function closeMenu() {
    nav.style.right = "-200px";
    nav.style.display = "none";
    document.getElementById("menu-btn").style.display = "block";
}