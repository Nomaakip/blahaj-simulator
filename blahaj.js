let blahajdisplay = document.getElementById("blahajcount");
let blahajimg = document.getElementById("blahajimg");
let stupidscript = false;
let timeout;
let blahaj = localStorage.getItem('blahaj');
let hypercuber = localStorage.getItem('hypercuber');

if (hypercuber) {
    hypercuber = hypercuber;
    document.getElementById("hyper").disabled = true;
}

else {
    hypercuber = false;
    document.getElementById("hyper").disabled = true;
}

if (blahaj) {
    blahaj = blahaj;
    
}

else {
    blahaj = 0;
}






if (blahaj <= 1) {
    blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahaj";
    }
    
    else if (blahaj >= 2) {
    blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahajs";
    }


function clicked() {
    if (hypercuber) {
        blahaj++;
    }


blahaj++;


blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahaj";

blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahajs";

blahajimg.style.transform = 'scale(0.75)';



setTimeout(() => {
    setTimeout(() => 
        blahajimg.style.transform = 'scale(1)');
}, 100);
document.getElementById('clicksound').play();
localStorage.setItem('blahaj', blahaj);
updatesmol();
    checks();
}

function updatesmol() {
    const smol = document.getElementById("smol-blahajs");
    if(blahaj >= 1)
        document.getElementById("smol-blahajs").innerHTML = "<img src=\"file (4).png\" alt=\"smol blahaj\" height=\"75\" width=\"75\">".repeat(blahaj);
    else
    document.getElementById("smol-blahajs").innerHTML = "";
}

function gambling() {
    let inputElement = document.getElementById("gamble");
    let rawInput = inputElement.value;
    let test2 = Number(rawInput);
    let gamblerng = Math.floor(Math.random()* 1);
    blahaj++;


    if (blahaj < rawInput ) {
        yes.innerHTML = "You can't gamble more blahajs than you have!";
    }

    else {
    if (rawInput <= 0) {
        yes.innerHTML = "You gambled nothing, thus winning absolutely nothing.";
    }

    else {
    if (gamblerng == 1) {
        blahaj += test2;
        yes.innerHTML = "You won " + test2 + " blahajs! You now have " + blahaj + " blahajs!";
        blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahajs";
        localStorage.setItem('blahaj', blahaj);
    }

    else {
        blahaj -= test2;
        yes.innerHTML = "You lost " + test2 + " blahajs. You now have " + blahaj + " blahajs.";
        blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahajs";
        localStorage.setItem('blahaj', blahaj);
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

function hyperblahaj() {
    if (blahaj <= 30) {
        console.log("not enough blahajs!")
    }

else {
if (!hypercuber) {
    hypercuber = true;
    blahaj -= 30;
    alr.innerHTML = 'sucessfully bought!';
    localStorage.setItem('hypercuber', hypercuber);
    document.getElementById("hyper").disabled = true;
    
if (blahaj <= 1) {
    blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahaj";
    }
    
    else if (blahaj >= 2) {
    blahajdisplay.innerHTML = "you currently have: " + blahaj + " blahajs";
    }
    localStorage.setItem('blahaj', blahaj);
    console.log(hypercuber);
}
}
}
function checks() {
    if (blahaj >= 30 && !hypercuber) {
    document.getElementById("hyper").disabled = false;
}
}

updatesmol();
clicked();
