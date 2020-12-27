/* MENU BUTTONS BEGIN */

document.getElementById("open-menu").onclick=openingFunction();

function openingFunction (){
    document.getElementById("dropdown").style.display = "block";
}

document.getElementById("close-menu").onclick=closingFunction();

function closingFunction (){
    document.getElementById("dropdown").style.display = "none";
}

document.getElementsByClassName("menu-link-project").onclick=closingFunction();

document.getElementsByClassName("menu-link-org").onclick=closingFunction();

/* MENU BUTTONS END */

/* SCROLL TO BLOCK ABOUT US BEGINS */

document.getElementById("scroll").onclick=scrollFunction();

function scrollFunction (){
    let scrollDiv = document.getElementById("about-project").offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
}

/* SCROLL TO BLOCK ABOUT US ENDS */