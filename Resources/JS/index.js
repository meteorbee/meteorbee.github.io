let Opened = true

function ToggleNav() {
  if (Opened == true) {
    Opened = false
    document.getElementById("sidebar").style.width = "46px";
    document.getElementById("main").style.marginLeft = "46px";
    document.getElementById("CloseButton").classList.replace("fa-angle-left", "fa-angle-right");
  }else {
    Opened = true
    document.getElementById("sidebar").style.width = "220px";
    document.getElementById("main").style.marginLeft = "220px";
    document.getElementById("CloseButton").classList.replace("fa-angle-right", "fa-angle-left");
  } 
}