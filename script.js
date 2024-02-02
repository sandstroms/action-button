const canvas = document.getElementById("actionButton");
const ctx = canvas.getContext("2d");

drawButton(ctx);

function pressButton() {
    clearCanvas(canvas);
    drawPressedButton(ctx, buttonValues);

    let id = null;
    clearInterval(id);
    id = setInterval(frame, 350);

    function frame() {
        clearCanvas(canvas);
        drawButton(ctx);
        clearInterval(id);
    }
}

function clearCanvas(canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawButton(ctx) {
    drawFrontLayer(ctx, buttonValues);
    drawIntermediateLayer(ctx, buttonValues);
    drawBackgroundLayer(ctx, buttonValues);
}

function drawPressedButton(ctx) {
    drawFrontLayer(ctx, pressedButtonValues);
    drawIntermediateLayer(ctx, pressedButtonValues);
    drawBackgroundLayer(ctx, pressedButtonValues);
}

function drawFrontLayer(ctx, buttonValues) {
    const frontLayer = buttonValues.frontLayer;

    drawTopLine(ctx, { layer: frontLayer, ...buttonValues });
    drawRightLine(ctx, { layer: frontLayer, ...buttonValues });
    drawBottomLine(ctx, { layer: frontLayer, ...buttonValues });
    drawLeftLine(ctx, { layer: frontLayer, ...buttonValues });

    drawTopRightArc(ctx, { layer: frontLayer, ...buttonValues });
    drawBottomRightArc(ctx, { layer: frontLayer, ...buttonValues });
    drawBottomLeftArc(ctx, { layer: frontLayer, ...buttonValues });
    drawTopLeftArc(ctx, { layer: frontLayer, ...buttonValues });

    drawText(ctx, { layer: frontLayer, ...buttonValues });
}

function drawIntermediateLayer(ctx, buttonValues) {
    const { WIDTH, HEIGHT, frontLayer, intermediateLayer } = buttonValues;
    const { TOP_RIGHT_CORNER, BOTTOM_RIGHT_CORNER, BOTTOM_LEFT_CORNER, TOP_LEFT_CORNER } = frontLayer;
    const { TOP_RIGHT_ARC_CORNER, BOTTOM_RIGHT_ARC_CORNER, BOTTOM_LEFT_ARC_CORNER, TOP_LEFT_ARC_CORNER, SLANT_LENGTH_X, SLANT_LENGTH_Y, SPACING_CONSTANT } = intermediateLayer;

    /* -------------- Button-corner lines --------------- */
    ctx.beginPath();

    // Top-right
    ctx.moveTo(TOP_RIGHT_ARC_CORNER.x, TOP_RIGHT_ARC_CORNER.y);
    ctx.lineTo(TOP_RIGHT_ARC_CORNER.x + SLANT_LENGTH_X, TOP_RIGHT_ARC_CORNER.y + SLANT_LENGTH_Y);
 
    // Bottom-left
    ctx.moveTo(BOTTOM_LEFT_ARC_CORNER.x, BOTTOM_LEFT_ARC_CORNER.y);
    ctx.lineTo(BOTTOM_LEFT_ARC_CORNER.x + SLANT_LENGTH_X, BOTTOM_LEFT_ARC_CORNER.y + SLANT_LENGTH_Y);
 
    ctx.stroke()
    /* ------------------------------------- */

    /* Lines in-between corners --- */
    ctx.strokeStyle = "red";
    ctx.beginPath();

    // Right
    for (let i = SPACING_CONSTANT; i < HEIGHT; i += SPACING_CONSTANT) {
        ctx.moveTo(TOP_RIGHT_CORNER.x, TOP_RIGHT_CORNER.y + i);
        ctx.lineTo(TOP_RIGHT_CORNER.x + SLANT_LENGTH_X, TOP_RIGHT_CORNER.y + SLANT_LENGTH_Y + i);
    }

    // Bottom
    for (let i = SPACING_CONSTANT; i < WIDTH; i += SPACING_CONSTANT) {
        ctx.moveTo(BOTTOM_RIGHT_CORNER.x - i, BOTTOM_RIGHT_CORNER.y);
        ctx.lineTo(BOTTOM_RIGHT_CORNER.x + SLANT_LENGTH_X - i, BOTTOM_RIGHT_CORNER.y + SLANT_LENGTH_Y);
    }

    drawBottomRightCornerLines(ctx, { layer: buttonValues.intermediateLayer, ...buttonValues });

    ctx.stroke();
    ctx.strokeStyle = "black";
    /* ------------------------------------- */
}

function drawBackgroundLayer(ctx, buttonValues) {
    const backgroundLayer = buttonValues.backgroundLayer;

    drawRightLine(ctx, { layer: backgroundLayer, ...buttonValues });
    drawBottomLine(ctx, { layer: backgroundLayer, ...buttonValues });

    drawTopRightHalfArc(ctx, { layer: backgroundLayer, ...buttonValues });
    drawBottomRightArc(ctx, { layer: backgroundLayer, ...buttonValues });
    drawBottomLeftHalfArc(ctx, { layer: backgroundLayer, ...buttonValues });
}

function drawTopLine(ctx, buttonValues) {
    const { ARC_RADIUS, layer } = buttonValues;
    const { TOP_LEFT_CORNER, TOP_RIGHT_CORNER }  = layer;

    ctx.beginPath();
    ctx.moveTo(TOP_LEFT_CORNER.x + ARC_RADIUS, TOP_LEFT_CORNER.y);
    ctx.lineTo(TOP_RIGHT_CORNER.x - ARC_RADIUS, TOP_RIGHT_CORNER.y);
    ctx.stroke();
}

function drawRightLine(ctx, buttonValues) {
    const { ARC_RADIUS, layer } = buttonValues;
    const { TOP_RIGHT_CORNER, BOTTOM_RIGHT_CORNER }  = layer;

    ctx.beginPath();
    ctx.moveTo(TOP_RIGHT_CORNER.x, TOP_RIGHT_CORNER.y + ARC_RADIUS);
    ctx.lineTo(BOTTOM_RIGHT_CORNER.x, BOTTOM_RIGHT_CORNER.y - ARC_RADIUS);
    ctx.stroke();
}

function drawBottomLine(ctx, buttonValues) {
    const { ARC_RADIUS, layer } = buttonValues;
    const { BOTTOM_LEFT_CORNER, BOTTOM_RIGHT_CORNER }  = layer;

    ctx.beginPath();
    ctx.moveTo(BOTTOM_RIGHT_CORNER.x - ARC_RADIUS, BOTTOM_RIGHT_CORNER.y);
    ctx.lineTo(BOTTOM_LEFT_CORNER.x + ARC_RADIUS, BOTTOM_LEFT_CORNER.y);
    ctx.stroke();
}

function drawLeftLine(ctx, buttonValues) {
    const { ARC_RADIUS, layer } = buttonValues;
    const { BOTTOM_LEFT_CORNER, TOP_LEFT_CORNER }  = layer;

    ctx.beginPath();
    ctx.moveTo(BOTTOM_LEFT_CORNER.x, BOTTOM_LEFT_CORNER.y - ARC_RADIUS);
    ctx.lineTo(TOP_LEFT_CORNER.x, TOP_LEFT_CORNER.y + ARC_RADIUS);
    ctx.stroke();
}

function drawTopRightArc(ctx, buttonValues) {
    const { ARC_RADIUS, layer } = buttonValues;
    const { TOP_RIGHT_CORNER }  = layer;

    ctx.beginPath();
    ctx.arc(TOP_RIGHT_CORNER.x - ARC_RADIUS, TOP_RIGHT_CORNER.y + ARC_RADIUS, ARC_RADIUS, 3 * Math.PI / 2, 0);
    ctx.stroke();
}

function drawBottomRightArc(ctx, buttonValues) {
    const { ARC_RADIUS, layer } = buttonValues;
    const { BOTTOM_RIGHT_CORNER }  = layer;

    ctx.beginPath();
    ctx.arc(BOTTOM_RIGHT_CORNER.x - ARC_RADIUS, BOTTOM_RIGHT_CORNER.y - ARC_RADIUS, ARC_RADIUS, 0, Math.PI / 2);
    ctx.stroke(); 
}

function drawBottomLeftArc(ctx, buttonValues) {
    const { ARC_RADIUS, layer } = buttonValues;
    const { BOTTOM_LEFT_CORNER }  = layer;

    ctx.beginPath();
    ctx.arc(BOTTOM_LEFT_CORNER.x + ARC_RADIUS, BOTTOM_LEFT_CORNER.y - ARC_RADIUS, ARC_RADIUS, Math.PI / 2, Math.PI);
    ctx.stroke();
}

function drawTopLeftArc(ctx, buttonValues) {
    const { ARC_RADIUS, layer } = buttonValues;
    const { TOP_LEFT_CORNER }  = layer;

    ctx.beginPath();
    ctx.arc(TOP_LEFT_CORNER.x + ARC_RADIUS, TOP_LEFT_CORNER.y + ARC_RADIUS, ARC_RADIUS, Math.PI, 3 * Math.PI / 2);
    ctx.stroke();
}

function drawText(ctx, buttonValues) {
    const { WIDTH, HEIGHT, layer } = buttonValues;
    const { START_X, START_Y } = layer;

    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Submit", (WIDTH / 2) + START_X, (HEIGHT / 2) + START_Y);
}

function drawBottomLeftHalfArc(ctx, buttonValues) {
    const { ARC_RADIUS, layer } = buttonValues;
    const { BOTTOM_LEFT_CORNER }  = layer;

    ctx.beginPath();
    ctx.arc(BOTTOM_LEFT_CORNER.x + ARC_RADIUS, BOTTOM_LEFT_CORNER.y - ARC_RADIUS, ARC_RADIUS, Math.PI / 2, 3 * Math.PI / 4);
    ctx.stroke();
}

function drawTopRightHalfArc(ctx, buttonValues) {
    const { ARC_RADIUS, layer } = buttonValues;
    const { TOP_RIGHT_CORNER }  = layer;

    ctx.beginPath();
    ctx.arc(TOP_RIGHT_CORNER.x - ARC_RADIUS, TOP_RIGHT_CORNER.y + ARC_RADIUS, ARC_RADIUS, 7 * Math.PI / 4, 0);
    ctx.stroke();
}

function drawBottomRightCornerLines(ctx, buttonValues) {
    const { BOTTOM_RIGHT_ARC_CORNER, SLANT_LENGTH_X, SLANT_LENGTH_Y } = buttonValues.intermediateLayer;

    ctx.moveTo(BOTTOM_RIGHT_ARC_CORNER.x, BOTTOM_RIGHT_ARC_CORNER.y);
    ctx.lineTo(BOTTOM_RIGHT_ARC_CORNER.x + SLANT_LENGTH_X, BOTTOM_RIGHT_ARC_CORNER.y + SLANT_LENGTH_Y);
}
