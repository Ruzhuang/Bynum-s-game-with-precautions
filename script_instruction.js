if(localStorage.getItem("show")=="false" && localStorage.getItem("forceOpen")==null){
    window.href="game.html";
}

localStorage.removeItem("forceOpen")
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        console.log("here")
         document.getElementById('text-box').style.display="hidden";
         document.getElementById('text-box').style.overflow="hidden";
    } else if (state == 'complete') {
           document.getElementById('interactive');
           document.getElementById('load').style.visibility="hidden";
           document.getElementById('text-box').style.visibility="visible";
           document.getElementById('text-box').style.overflow="scroll";

    }
  }
const button = document.getElementById("skip");
button.addEventListener("click",skip);
function skip(){
    location.href="game.html";
}

const changeShow = document.getElementById("do-not-show-button");
if(localStorage.getItem("show")=="false"){
    changeShow.innerHTML="Show this instruction on start of game";
}
else{
    changeShow.innerHTML="Stop showing this instruction on start of game"
}
changeShow.addEventListener("click",changeShowing);
function changeShowing(){
    if(localStorage.getItem("show")=="true"){
        localStorage.setItem("show","false");
        changeShow.innerHTML="Show this instruction on start of game";
    }
    else{
        localStorage.setItem("show","true");
        changeShow.innerHTML="Stop showing this instruction on start of game";
    }
}