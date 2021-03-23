var nav = document.getElementById("navbars");

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