window.addEventListener("load", draw);

function draw() {
    const canvas = document.getElementById("actionButton");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
    
        canvas.width = OUTLINE_THICKNESS + WIDTH + SLANT_LENGTH + 230;
        canvas.height = OUTLINE_THICKNESS + HEIGHT + SLANT_LENGTH + 230;
        
        drawButton(ctx, buttonValues, sharedButtonValues);
    }
}

/* Show the pressed version of the button briefly */
function pressButton() {
    const canvas = document.getElementById("actionButton");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        clearCanvas(canvas, ctx);
        drawPressedButton(ctx, pressedButtonValues, sharedButtonValues);

        let id = null;
        clearInterval(id);
        id = setInterval(frame, 350);

        function frame() {
            clearCanvas(canvas, ctx);
            drawButton(ctx, buttonValues, sharedButtonValues);
            clearInterval(id);
        }
    }
}

function drawButton(ctx, buttonValues, sharedButtonValues) {
    drawLayers(ctx, buttonValues, sharedButtonValues);
}

function drawPressedButton(ctx, buttonValues, sharedButtonValues) {
    drawLayers(ctx, buttonValues, sharedButtonValues);
    drawEffect(ctx, buttonValues, sharedButtonValues);
}

function clearCanvas(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}