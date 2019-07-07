const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function checkWinner(){
    if (dead.textContent == 10) {
        alert("You won");
        dead.textContent = 0;
        lost.textContent = 0;
    } else if(lost.textContent == 5) {
        alert("You lost")
        dead.textContent = 0;
        lost.textContent = 0;
    }
}

const checkHole = function(clicked) {
    console.log(clicked);
    console.log(clicked.toElement.className);
    if (clicked.toElement.className == 'hole'){
        lost.textContent++;
    }
    if (clicked.toElement.className == 'hole hole_has-mole'){
        dead.textContent++
    }
    setTimeout(checkWinner,0)
} 

function getHole(index) {
    let hole = index
    hole.onclick = checkHole
}

let holes = document.getElementsByClassName("hole");

for (let i = 0; i < holes.length; i++) {
    console.log(holes[i]);
    getHole(holes[i]);
}