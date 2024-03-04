window.addEventListener("load", draw);

function draw() {
    const canvas = document.getElementById("actionButton");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
    
        canvas.width = OUTLINE_THICKNESS + WIDTH + SLANT_LENGTH;
        canvas.height = OUTLINE_THICKNESS + HEIGHT + SLANT_LENGTH;
        
        drawButton(ctx, buttonValues);
    }
}

/* Show the pressed version of the button briefly */
function pressButton() {
    const canvas = document.getElementById("actionButton");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        clearCanvas(canvas, ctx);
        drawPressedButton(ctx, pressedButtonValues);

        let id = null;
        clearInterval(id);
        id = setInterval(frame, 350);

        function frame() {
            clearCanvas(canvas, ctx);
            drawButton(ctx, buttonValues);
            clearInterval(id);
        }
    }
}

function drawButton(ctx, buttonValues) {
    drawLayers(ctx, buttonValues);
}

function drawPressedButton(ctx, buttonValues) {
    drawLayers(ctx, buttonValues);
    drawEffect(ctx, buttonValues);
}

function clearCanvas(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}