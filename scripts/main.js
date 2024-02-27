const buttonFace = document.getElementById("button-face");

buttonFace.addEventListener('mousedown', function() {
    buttonFace.classList.add('mouseDown');
});

buttonFace.addEventListener('mouseup', function() {
    buttonFace.classList.remove('mouseDown');
});