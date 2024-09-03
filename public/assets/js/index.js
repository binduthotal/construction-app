function myFunction() {
    var x = document.getElementById("mTopnav");
    if (x.className === "mobile-topnav") {
      x.className += " responsive";
    } else {
      x.className = "mobile-topnav";
    }


    $(document).ready(function($) {
      $('.links').click(function() {
        $("#mTopnav").removeClass("responsive");
      });
    });
  }

  

function servicesPageActions(){
document.getElementById("services-img").src = "assets/img/background2.jpg"
// document.getElementById("services-img").style.height = "500px"
document.getElementById("services-img").style.height = "100vh"

document.getElementById("material-icon").src = "assets/img/material-select.png"
document.getElementById("build-icon").src = "assets/img/build.png"
document.getElementById("manage-icon").src = "assets/img/manage icon-unselect.png"

document.getElementById("material-icon-span").style.fontWeight = "bold"
document.getElementById("build-icon-span").style.fontWeight = "normal"
document.getElementById("manage-icon-span").style.fontWeight = "normal"

}

function materialPage(){

var myBox = $(".material");
myBox.addClass("w3-animate-left");
myBox.remove("w3-animate-left");

document.getElementById("services-img").src = "assets/img/background2.jpg"
document.getElementById("services-img").style.height = "100vh"

document.getElementById("material").style.display = "block";
document.getElementById("build").style.display = "none";
document.getElementById("manage").style.display = "none";

document.getElementById("material-icon").src = "assets/img/material-select.png"
document.getElementById("build-icon").src = "assets/img/build.png"
document.getElementById("manage-icon").src = "assets/img/manage icon-unselect.png"

document.getElementById("material-icon-span").style.fontWeight = "bold"
document.getElementById("build-icon-span").style.fontWeight = "normal"
document.getElementById("manage-icon-span").style.fontWeight = "normal"
}

function buildPage(){
var myBox = $(".build");
myBox.addClass("w3-animate-left");

document.getElementById("services-img").src = "assets/img/background3.jpg"
// document.getElementById("services-img").style.height = "600px"
document.getElementById("services-img").style.height = "100vh"

document.getElementById("build").style.display = "block"
document.getElementById("material").style.display = "none";
document.getElementById("manage").style.display = "none";

document.getElementById("material-icon").src = "assets/img/material-unselect.png"
document.getElementById("build-icon").src = "assets/img/build-select.png"
document.getElementById("manage-icon").src = "assets/img/manage icon-unselect.png"

document.getElementById("material-icon-span").style.fontWeight = "normal"
document.getElementById("build-icon-span").style.fontWeight = "bold"
document.getElementById("manage-icon-span").style.fontWeight = "normal"

}

function managePage(){
var myBox = $(".manage");
myBox.addClass("w3-animate-left");
document.getElementById("services-img").src = "assets/img/background4.jpg"
document.getElementById("services-img").style.height = "100vh"
// document.getElementById("services-img").style.height = "600px"

document.getElementById("material").style.display = "none";
document.getElementById("build").style.display = "none";
document.getElementById("manage").style.display = "block";

document.getElementById("material-icon").src = "assets/img/material-unselect.png"
document.getElementById("build-icon").src = "assets/img/build.png"
document.getElementById("manage-icon").src = "assets/img/manage icon-select.png"

document.getElementById("material-icon-span").style.fontWeight = "normal"
document.getElementById("build-icon-span").style.fontWeight = "normal"
document.getElementById("manage-icon-span").style.fontWeight = "bold"
}