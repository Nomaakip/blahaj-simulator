let blahajdisplay = document.getElementById("blahajcount");
let blahajimg = document.getElementById("blahajimg");
let blahaj = 0;
let saved = JSON.parse(localStorage.answer);
let stupidscript = false;
let timeout;
blahaj = saved;
localStorage.answer = JSON.stringify(blahaj);



if (blahaj <= 1) {
    blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahaj";
    }
    
    else if (blahaj >= 2) {
    blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahajs";
    }


function clicked() {
blahaj++;
if (blahaj == 1) {
blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahaj";
}

else if (blahaj >= 2) {
blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahajs";
}
blahajimg.height = 130;
setTimeout(() => {
    setTimeout(() => blahajimg.height = 150, 0);
}, 100);
document.getElementById('clicksound').play();
localStorage.answer = JSON.stringify(blahaj);
updatesmol();
}

function updatesmol() {
    const smol = document.getElementById("smol-blahajs");
    if(blahaj >= 1)
        smol.innerHTML = "<img src=\"file (4).png\" alt=\"smol blahaj\" height=\"75\" width=\"75\">".repeat(blahaj - 1);
    else
        smol.innerHTML = "";
}

function gambling() {
    let inputElement = document.getElementById("gamble");
    let rawInput = inputElement.value;
    let test2 = Number(rawInput);
    let gamblerng = Math.floor(Math.random()* 2)

    if (blahaj < rawInput ) {
        yes.innerHTML = "You can't gamble more blahajs than you have!";
    }

    else {
    if (rawInput == 0) {
        yes.innerHTML = "You gambled nothing, thus winning absolutely nothing.";
    }

    else {
    if (gamblerng == 1) {
        blahaj += test2;
        yes.innerHTML = "You won " + test2 + " blahajs! You now have " + blahaj + " blahajs!";
        blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahajs";
        localStorage.answer = JSON.stringify(blahaj);
    }

    else {
        blahaj -= test2;
        yes.innerHTML = "You lost " + test2 + " blahajs. You now have " + blahaj + " blahajs.";
        blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahajs";
        localStorage.answer = JSON.stringify(blahaj);
    }
    updatesmol();
}
}
}

function erase() {
    if (!stupidscript) {
        alert("Are you absolutely sure? This will clear all progress you've made. (click again to wipe)");
        stupidscript = true;
        timeout = setTimeout(() => {
            stupidscript = false;
        }, 10000);
    } else {
        clearTimeout(timeout);
        localStorage.clear();
        location.reload();
    }
}


function test() {
    blahaj = saved;
}

test();
updatesmol();
