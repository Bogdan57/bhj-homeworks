const counter = function() {
    const timer = document.getElementById("timer");
    if (timer.textContent == 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(myinterval);

    } else {
        timer.textContent -= 1;
    }
}    
let myinterval = setInterval(counter, 1000);