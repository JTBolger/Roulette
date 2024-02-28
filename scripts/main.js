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
    }
    else {
        score += 1;
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

