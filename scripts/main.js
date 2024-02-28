const buttonFace = document.getElementById("button-face");

buttonFace.addEventListener('mousedown', function() {
    buttonFace.classList.add('mouseDown');

    buttonFace.addEventListener('mouseup', mouseUpHandler);
    buttonFace.addEventListener('mouseleave', mouseLeaveHandler);
});

function mouseUpHandler() {
    buttonFace.classList.remove('mouseDown');
    buttonFace.removeEventListener('mouseup', mouseUpHandler);
    buttonFace.removeEventListener('mouseleave', mouseLeaveHandler);
}

function mouseLeaveHandler() {
    buttonFace.classList.remove('mouseDown');
    buttonFace.removeEventListener('mouseup', mouseUpHandler);
    buttonFace.removeEventListener('mouseleave', mouseLeaveHandler);
}
