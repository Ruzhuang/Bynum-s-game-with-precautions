if(localStorage.getItem("show")=="false"){
    window.href="game.html";
}
const button = document.getElementById("skip");
button.addEventListener("click",skip);
function skip(){
    location.href="game.html";
}

const notShow = document.getElementById("do-not-show-button");
notShow.addEventListener("click",stopShowing);
function stopShowing(){
    notShow.innerHTML="Will not show this on start of game.";
    localStorage.setItem("show","false");
    notShow.classList.add("clicked");
}