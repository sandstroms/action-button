function drawFrontLayer(ctx, buttonValues, sharedButtonValues) {
    const frontLayer = buttonValues.frontLayer;

    drawTopLine(ctx, { layer: frontLayer, ...buttonValues }, sharedButtonValues);
    drawRightLine(ctx, { layer: frontLayer, ...buttonValues }, sharedButtonValues);
    drawBottomLine(ctx, { layer: frontLayer, ...buttonValues }, sharedButtonValues);
    drawLeftLine(ctx, { layer: frontLayer, ...buttonValues }, sharedButtonValues);

    drawTopRightArc(ctx, { layer: frontLayer, ...buttonValues }, sharedButtonValues);
    drawBottomRightArc(ctx, { layer: frontLayer, ...buttonValues }, sharedButtonValues);
    drawBottomLeftArc(ctx, { layer: frontLayer, ...buttonValues }, sharedButtonValues);
    drawTopLeftArc(ctx, { layer: frontLayer, ...buttonValues }, sharedButtonValues);

    drawText(ctx, { layer: frontLayer, ...buttonValues });
}

function drawIntermediateLayer(ctx, buttonValues, sharedButtonValues) {
    drawTopRightSlantLine(ctx, buttonValues, sharedButtonValues);
    drawBottomLeftSlantLine(ctx, buttonValues, sharedButtonValues);

    drawSlantLinesOnRight(ctx, buttonValues, sharedButtonValues);
    drawSlantLinesOnBottom(ctx, buttonValues, sharedButtonValues);

    drawBottomRightCornerLines(ctx, buttonValues, sharedButtonValues);
}

function drawBackgroundLayer(ctx, buttonValues, sharedButtonValues) {
    const backgroundLayer = buttonValues.backgroundLayer;

    drawRightLine(ctx, { layer: backgroundLayer, ...buttonValues }, sharedButtonValues);
    drawBottomLine(ctx, { layer: backgroundLayer, ...buttonValues }, sharedButtonValues);

    drawTopRightHalfArc(ctx, { layer: backgroundLayer, ...buttonValues }, sharedButtonValues);
    drawBottomRightArc(ctx, { layer: backgroundLayer, ...buttonValues }, sharedButtonValues);
    drawBottomLeftHalfArc(ctx, { layer: backgroundLayer, ...buttonValues }, sharedButtonValues);
}

function drawTopLine(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { TOP_LEFT_CORNER, TOP_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.moveTo(TOP_LEFT_CORNER.x + ARC_RADIUS, TOP_LEFT_CORNER.y);
    ctx.lineTo(TOP_RIGHT_CORNER.x - ARC_RADIUS, TOP_RIGHT_CORNER.y);
    ctx.stroke();
    resetStyles(ctx);
}

function drawRightLine(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { TOP_RIGHT_CORNER, BOTTOM_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.moveTo(TOP_RIGHT_CORNER.x, TOP_RIGHT_CORNER.y + ARC_RADIUS);
    ctx.lineTo(BOTTOM_RIGHT_CORNER.x, BOTTOM_RIGHT_CORNER.y - ARC_RADIUS);
    ctx.stroke();
    resetStyles(ctx);
}

function drawBottomLine(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { BOTTOM_LEFT_CORNER, BOTTOM_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.moveTo(BOTTOM_RIGHT_CORNER.x - ARC_RADIUS, BOTTOM_RIGHT_CORNER.y);
    ctx.lineTo(BOTTOM_LEFT_CORNER.x + ARC_RADIUS, BOTTOM_LEFT_CORNER.y);
    ctx.stroke();
    resetStyles(ctx);
}

function drawLeftLine(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { BOTTOM_LEFT_CORNER, TOP_LEFT_CORNER } = buttonValues.layer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.moveTo(BOTTOM_LEFT_CORNER.x, BOTTOM_LEFT_CORNER.y - ARC_RADIUS);
    ctx.lineTo(TOP_LEFT_CORNER.x, TOP_LEFT_CORNER.y + ARC_RADIUS);
    ctx.stroke();
    resetStyles(ctx);
}

function drawTopRightArc(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { TOP_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.arc(TOP_RIGHT_CORNER.x - ARC_RADIUS, TOP_RIGHT_CORNER.y + ARC_RADIUS, ARC_RADIUS, 3 * Math.PI / 2, 0);
    ctx.stroke();
    resetStyles(ctx);
}

function drawBottomRightArc(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { BOTTOM_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.arc(BOTTOM_RIGHT_CORNER.x - ARC_RADIUS, BOTTOM_RIGHT_CORNER.y - ARC_RADIUS, ARC_RADIUS, 0, Math.PI / 2);
    ctx.stroke();
    resetStyles(ctx);
}

function drawBottomLeftArc(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { BOTTOM_LEFT_CORNER } = buttonValues.layer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.arc(BOTTOM_LEFT_CORNER.x + ARC_RADIUS, BOTTOM_LEFT_CORNER.y - ARC_RADIUS, ARC_RADIUS, Math.PI / 2, Math.PI);
    ctx.stroke();
    resetStyles(ctx);
}

function drawTopLeftArc(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { TOP_LEFT_CORNER } = buttonValues.layer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.arc(TOP_LEFT_CORNER.x + ARC_RADIUS, TOP_LEFT_CORNER.y + ARC_RADIUS, ARC_RADIUS, Math.PI, 3 * Math.PI / 2);
    ctx.stroke();
    resetStyles(ctx);
}

function drawText(ctx, buttonValues) {
    const { START_X, START_Y } = buttonValues.layer;

    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Submit", (WIDTH / 2) + START_X, (HEIGHT / 2) + START_Y);
}

function drawBottomLeftHalfArc(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { BOTTOM_LEFT_CORNER } = buttonValues.layer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.arc(BOTTOM_LEFT_CORNER.x + ARC_RADIUS, BOTTOM_LEFT_CORNER.y - ARC_RADIUS, ARC_RADIUS, Math.PI / 2, 3 * Math.PI / 4);
    ctx.stroke();
    resetStyles(ctx);
}

function drawTopRightHalfArc(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { TOP_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.arc(TOP_RIGHT_CORNER.x - ARC_RADIUS, TOP_RIGHT_CORNER.y + ARC_RADIUS, ARC_RADIUS, 7 * Math.PI / 4, 0);
    ctx.stroke();
    resetStyles(ctx);
}

function drawBottomRightCornerLines(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { BOTTOM_RIGHT_ARC_CORNER, SLANT_LENGTH_X, SLANT_LENGTH_Y } = buttonValues.intermediateLayer;
    
    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.moveTo(BOTTOM_RIGHT_ARC_CORNER.x, BOTTOM_RIGHT_ARC_CORNER.y);
    ctx.lineTo(BOTTOM_RIGHT_ARC_CORNER.x + SLANT_LENGTH_X, BOTTOM_RIGHT_ARC_CORNER.y + SLANT_LENGTH_Y);
    ctx.stroke();
    resetStyles(ctx);
}

function drawTopRightSlantLine(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { TOP_RIGHT_ARC_CORNER, SLANT_LENGTH_X, SLANT_LENGTH_Y } = buttonValues.intermediateLayer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.moveTo(TOP_RIGHT_ARC_CORNER.x, TOP_RIGHT_ARC_CORNER.y);
    ctx.lineTo(TOP_RIGHT_ARC_CORNER.x + SLANT_LENGTH_X, TOP_RIGHT_ARC_CORNER.y + SLANT_LENGTH_Y);
    ctx.stroke();
    resetStyles(ctx);
}

function drawBottomLeftSlantLine(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { BOTTOM_LEFT_ARC_CORNER, SLANT_LENGTH_X, SLANT_LENGTH_Y } = buttonValues.intermediateLayer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.moveTo(BOTTOM_LEFT_ARC_CORNER.x, BOTTOM_LEFT_ARC_CORNER.y);
    ctx.lineTo(BOTTOM_LEFT_ARC_CORNER.x + SLANT_LENGTH_X, BOTTOM_LEFT_ARC_CORNER.y + SLANT_LENGTH_Y);
    ctx.stroke();
    resetStyles(ctx);
}

function drawSlantLinesOnRight(ctx, buttonValues, sharedButtonValues) {
    const { MINOR_LINE_WIDTH, SLANT_LINE_COLOR } = sharedButtonValues;
    const { TOP_RIGHT_CORNER, } = buttonValues.frontLayer;
    const { SLANT_LENGTH_X, SLANT_LENGTH_Y } = buttonValues.intermediateLayer;

    ctx.strokeStyle = SLANT_LINE_COLOR;
    ctx.lineWidth = MINOR_LINE_WIDTH;
    ctx.beginPath();
    for (let i = SPACING_CONSTANT; i < HEIGHT; i += SPACING_CONSTANT) {
        ctx.moveTo(TOP_RIGHT_CORNER.x, TOP_RIGHT_CORNER.y + i);
        ctx.lineTo(TOP_RIGHT_CORNER.x + SLANT_LENGTH_X, TOP_RIGHT_CORNER.y + SLANT_LENGTH_Y + i);
    }
    ctx.stroke();
    resetStyles(ctx);
}

function drawSlantLinesOnBottom(ctx, buttonValues, sharedButtonValues) {
    const { MINOR_LINE_WIDTH, SLANT_LINE_COLOR } = sharedButtonValues
    const { BOTTOM_RIGHT_CORNER, } = buttonValues.frontLayer;
    const { SLANT_LENGTH_X, SLANT_LENGTH_Y } = buttonValues.intermediateLayer;

    ctx.strokeStyle = SLANT_LINE_COLOR;
    ctx.lineWidth = MINOR_LINE_WIDTH;
    ctx.beginPath();
    for (let i = SPACING_CONSTANT; i < WIDTH; i += SPACING_CONSTANT) {
        ctx.moveTo(BOTTOM_RIGHT_CORNER.x - i, BOTTOM_RIGHT_CORNER.y);
        ctx.lineTo(BOTTOM_RIGHT_CORNER.x + SLANT_LENGTH_X - i, BOTTOM_RIGHT_CORNER.y + SLANT_LENGTH_Y);
    }
    ctx.stroke();
    resetStyles(ctx);
}

function resetStyles(ctx) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
}