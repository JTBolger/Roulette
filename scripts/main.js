const buttonFace = document.getElementById("button-face");

var score = 1;
var highScore = 1;

buttonFace.addEventListener('mousedown', function() {
    buttonFace.classList.add('mouseDown');

    buttonFace.addEventListener('mouseup', mouseUpHandler);
    buttonFace.addEventListener('mouseleave', mouseLeaveHandler);
});

function mouseUpHandler() {
    buttonFace.classList.remove('mouseDown');
    buttonFace.removeEventListener('mouseup', mouseUpHandler);
    buttonFace.removeEventListener('mouseleave', mouseLeaveHandler);
    
    var randNum = Math.floor(Math.random() * 100) + 1;
    console.log("score : ", score, "\nrandNum : ", randNum);
    if (randNum < score) {
        score = 1;
        console.error("RESET")
    }
    else {
        score++;
    }
    if (score > highScore) {
        highScore = score;
        document.getElementById("high-score").innerHTML = "High Score : "+highScore;
    }
    document.getElementById("score").innerHTML = score;
}

function mouseLeaveHandler() {
    buttonFace.classList.remove('mouseDown');
    buttonFace.removeEventListener('mouseup', mouseUpHandler);
    buttonFace.removeEventListener('mouseleave', mouseLeaveHandler);
}

var int = 1;
var total = 1;
for (var i=0; i<100; i++) {
    total *= int;
    int -= 0.01;
}
console.warn("If you were wondering, the chances of beating this game are %"+(total*10));
