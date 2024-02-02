const canvas = document.getElementById("actionButton");
const ctx = canvas.getContext("2d");

drawButton(ctx);

function pressButton() {
    clearCanvas(canvas);
    drawPressedButton(ctx);

    let id = null;
    clearInterval(id);
    id = setInterval(frame, 350);

    function frame() {
        clearCanvas(canvas);
        drawButton(ctx);
        clearInterval(id);
    }
}

function drawButton(ctx) {
    drawFrontLayer(ctx, buttonValues, sharedButtonValues);
    drawIntermediateLayer(ctx, buttonValues, sharedButtonValues);
    drawBackgroundLayer(ctx, buttonValues, sharedButtonValues);
}

function drawPressedButton(ctx) {
    drawFrontLayer(ctx, pressedButtonValues, sharedButtonValues);
    drawIntermediateLayer(ctx, pressedButtonValues, sharedButtonValues);
    drawBackgroundLayer(ctx, pressedButtonValues, sharedButtonValues);
}

function clearCanvas(canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}