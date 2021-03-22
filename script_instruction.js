if (localStorage.getItem("show") == "false" && localStorage.getItem("forceOpen") == null) {
    console.log("here!");
    window.location.href = "game.html";
}

localStorage.removeItem("forceOpen")

let img;
for (let i = 1; i < 14; i++) {
    img = document.getElementById("img" + i);
    if (img.complete) {
        document.getElementById("loader" + i).style.display = "none"
    } else {
        document.getElementById("img" + i).addEventListener("load", function() {
            document.getElementById("loader" + i).style.display = "none"
        })
    }
}
/*
    [].forEach.call(imgs, function(img) {
        if (img.complete) {
            document.getElementById("loader" + counter).style.display = "none";
            console.log("img.complete  " + "loader" + counter);
        } else {
            img.addEventListener('load', loadComplete(counter));
            console.log("else  " + "loader" + counter);
        }
        counter++;
    });

function loadComplete(i) {
    document.getElementById("loader" + i).style.display = "none";
    console.log("loadComplete " + "loader" + i)
}*/
const button = document.getElementById("skip");
button.addEventListener("click", skip);

function skip() {
    location.href = "game.html";
}

const changeShow = document.getElementById("do-not-show-button");
if (localStorage.getItem("show") == "false") {
    changeShow.innerHTML = "Show this instruction on start of game";
} else {
    changeShow.innerHTML = "Stop showing this instruction on start of game"
}
changeShow.addEventListener("click", changeShowing);

function changeShowing() {
    if (localStorage.getItem("show") == "true") {
        localStorage.setItem("show", "false");
        changeShow.innerHTML = "Show this instruction on start of game";
    } else {
        localStorage.setItem("show", "true");
        changeShow.innerHTML = "Stop showing this instruction on start of game";
    }
}