const canvas = document.getElementById("actionButton");
const ctx = canvas.getContext("2d");

drawButton();

/* Show the pressed version of the button briefly */
function pressButton() {
    clearCanvas();
    drawPressedButton();

    let id = null;
    clearInterval(id);
    id = setInterval(frame, 350);

    function frame() {
        clearCanvas();
        drawButton();
        clearInterval(id);
    }
}

function drawButton() {
    drawLayers(ctx, buttonValues, sharedButtonValues);
}

function drawPressedButton() {
    drawLayers(ctx, pressedButtonValues, sharedButtonValues);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}