function drawLayers(ctx, buttonValues, sharedButtonValues) {
    drawIntermediateLayer(ctx, buttonValues, sharedButtonValues);
    drawFrontLayer(ctx, buttonValues, sharedButtonValues);
    drawBackgroundLayer(ctx, buttonValues, sharedButtonValues);
}

function drawFrontLayer(ctx, buttonValues, sharedButtonValues) {
    const frontLayer = buttonValues.frontLayer;

    ctx.strokeStyle = sharedButtonValues.OUTLINE_COLOR;
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
    ctx.strokeStyle = sharedButtonValues.OUTLINE_COLOR
    drawTopRightSlantLine(ctx, buttonValues, sharedButtonValues);
    drawBottomLeftSlantLine(ctx, buttonValues, sharedButtonValues);

    drawSlantLinesOnRight(ctx, buttonValues, sharedButtonValues);
    drawSlantLinesOnBottom(ctx, buttonValues, sharedButtonValues);

    drawBottomRightCornerSlantLines(ctx, buttonValues, sharedButtonValues);
}

function drawBackgroundLayer(ctx, buttonValues, sharedButtonValues) {
    const backgroundLayer = buttonValues.backgroundLayer;

    ctx.strokeStyle = sharedButtonValues.OUTLINE_COLOR;
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
}

function drawRightLine(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { TOP_RIGHT_CORNER, BOTTOM_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.moveTo(TOP_RIGHT_CORNER.x, TOP_RIGHT_CORNER.y + ARC_RADIUS);
    ctx.lineTo(BOTTOM_RIGHT_CORNER.x, BOTTOM_RIGHT_CORNER.y - ARC_RADIUS);
    ctx.stroke();
}

function drawBottomLine(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { BOTTOM_LEFT_CORNER, BOTTOM_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.moveTo(BOTTOM_RIGHT_CORNER.x - ARC_RADIUS, BOTTOM_RIGHT_CORNER.y);
    ctx.lineTo(BOTTOM_LEFT_CORNER.x + ARC_RADIUS, BOTTOM_LEFT_CORNER.y);
    ctx.stroke();
}

function drawLeftLine(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { BOTTOM_LEFT_CORNER, TOP_LEFT_CORNER } = buttonValues.layer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.moveTo(BOTTOM_LEFT_CORNER.x, BOTTOM_LEFT_CORNER.y - ARC_RADIUS);
    ctx.lineTo(TOP_LEFT_CORNER.x, TOP_LEFT_CORNER.y + ARC_RADIUS);
    ctx.stroke();
}

function drawTopRightArc(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { TOP_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.arc(TOP_RIGHT_CORNER.x - ARC_RADIUS, TOP_RIGHT_CORNER.y + ARC_RADIUS, ARC_RADIUS, 3 * Math.PI / 2, 0);
    ctx.stroke();
}

function drawBottomRightArc(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { BOTTOM_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.arc(BOTTOM_RIGHT_CORNER.x - ARC_RADIUS, BOTTOM_RIGHT_CORNER.y - ARC_RADIUS, ARC_RADIUS, 0, Math.PI / 2);
    ctx.stroke();
}

function drawBottomLeftArc(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { BOTTOM_LEFT_CORNER } = buttonValues.layer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.arc(BOTTOM_LEFT_CORNER.x + ARC_RADIUS, BOTTOM_LEFT_CORNER.y - ARC_RADIUS, ARC_RADIUS, Math.PI / 2, Math.PI);
    ctx.stroke();
}

function drawTopLeftArc(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { TOP_LEFT_CORNER } = buttonValues.layer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.arc(TOP_LEFT_CORNER.x + ARC_RADIUS, TOP_LEFT_CORNER.y + ARC_RADIUS, ARC_RADIUS, Math.PI, 3 * Math.PI / 2);
    ctx.stroke();
}

function drawText(ctx, buttonValues) {
    const { TOP_LEFT_CORNER } = buttonValues.layer;

    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Submit", (WIDTH / 2) + TOP_LEFT_CORNER.x, (HEIGHT / 2) + TOP_LEFT_CORNER.y);
}

function drawBottomLeftHalfArc(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { BOTTOM_LEFT_CORNER } = buttonValues.layer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.arc(BOTTOM_LEFT_CORNER.x + ARC_RADIUS, BOTTOM_LEFT_CORNER.y - ARC_RADIUS, ARC_RADIUS, Math.PI / 2, 3 * Math.PI / 4);
    ctx.stroke();
}

function drawTopRightHalfArc(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { TOP_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.arc(TOP_RIGHT_CORNER.x - ARC_RADIUS, TOP_RIGHT_CORNER.y + ARC_RADIUS, ARC_RADIUS, 7 * Math.PI / 4, 0);
    ctx.stroke();
}

function drawTopRightSlantLine(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { frontLayer, intermediateLayer } = buttonValues;
    const { TOP_RIGHT_CORNER } = frontLayer;
    const { SLANT_LENGTH_X, SLANT_LENGTH_Y } = intermediateLayer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.moveTo(TOP_RIGHT_CORNER.x - ARC_RADIUS + (Math.cos(Math.PI / 4) * ARC_RADIUS), TOP_RIGHT_CORNER.y + ARC_RADIUS - (Math.sin(Math.PI / 4) * ARC_RADIUS));
    ctx.lineTo(TOP_RIGHT_CORNER.x - ARC_RADIUS + (Math.cos(Math.PI / 4) * ARC_RADIUS) + SLANT_LENGTH_X, TOP_RIGHT_CORNER.y + ARC_RADIUS - (Math.sin(Math.PI / 4) * ARC_RADIUS) + SLANT_LENGTH_Y);
    ctx.stroke();
}

function drawBottomLeftSlantLine(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH } = sharedButtonValues;
    const { frontLayer, intermediateLayer } = buttonValues;
    const { BOTTOM_LEFT_CORNER } = frontLayer;
    const { SLANT_LENGTH_X, SLANT_LENGTH_Y } = intermediateLayer;

    ctx.lineWidth = MAJOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.moveTo(BOTTOM_LEFT_CORNER.x + ARC_RADIUS - (Math.cos(Math.PI / 4) * ARC_RADIUS), BOTTOM_LEFT_CORNER.y - ARC_RADIUS + (Math.sin(Math.PI / 4) * ARC_RADIUS));
    ctx.lineTo(BOTTOM_LEFT_CORNER.x + ARC_RADIUS - (Math.cos(Math.PI / 4) * ARC_RADIUS) + SLANT_LENGTH_X, BOTTOM_LEFT_CORNER.y - ARC_RADIUS + (Math.sin(Math.PI / 4) * ARC_RADIUS) + SLANT_LENGTH_Y);
    ctx.stroke();
}

function drawSlantLinesOnRight(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH, MINOR_LINE_WIDTH, SLANT_LINE_COLOR, SPACING_CONSTANT } = sharedButtonValues;
    const { TOP_RIGHT_CORNER, } = buttonValues.frontLayer;
    const { SLANT_LENGTH_X, SLANT_LENGTH_Y } = buttonValues.intermediateLayer;

    ctx.strokeStyle = SLANT_LINE_COLOR;
    ctx.lineWidth = MINOR_LINE_WIDTH;
    ctx.beginPath();
    for (let i = MAJOR_LINE_WIDTH / 2 + SPACING_CONSTANT; i < HEIGHT - HEIGHT / 20; i += SPACING_CONSTANT) {
        ctx.moveTo(TOP_RIGHT_CORNER.x, TOP_RIGHT_CORNER.y + i);
        ctx.lineTo(TOP_RIGHT_CORNER.x + SLANT_LENGTH_X, TOP_RIGHT_CORNER.y + SLANT_LENGTH_Y + i);
    }
    ctx.stroke();
}

function drawSlantLinesOnBottom(ctx, buttonValues, sharedButtonValues) {
    const { MAJOR_LINE_WIDTH, MINOR_LINE_WIDTH, SLANT_LINE_COLOR, SPACING_CONSTANT } = sharedButtonValues
    const { BOTTOM_LEFT_CORNER, } = buttonValues.frontLayer;
    const { SLANT_LENGTH_X, SLANT_LENGTH_Y } = buttonValues.intermediateLayer;

    ctx.strokeStyle = SLANT_LINE_COLOR;
    ctx.lineWidth = MINOR_LINE_WIDTH;
    ctx.beginPath();
    for (let i = MAJOR_LINE_WIDTH / 2 + SPACING_CONSTANT; i < WIDTH - WIDTH / 20; i += SPACING_CONSTANT) {
        ctx.moveTo(BOTTOM_LEFT_CORNER.x + i, BOTTOM_LEFT_CORNER.y);
        ctx.lineTo(BOTTOM_LEFT_CORNER.x + SLANT_LENGTH_X + i, BOTTOM_LEFT_CORNER.y + SLANT_LENGTH_Y);
    }
    ctx.stroke();
}

function drawBottomRightCornerSlantLines(ctx, buttonValues, sharedButtonValues) {
    const { frontLayer, intermediateLayer } = buttonValues;
    const { SLANT_LINE_COLOR } = sharedButtonValues;
    const { BOTTOM_RIGHT_CORNER } = frontLayer
    const { SLANT_LENGTH_X, SLANT_LENGTH_Y } = intermediateLayer;

    ctx.strokeStyle = SLANT_LINE_COLOR;
    ctx.lineWidth = MINOR_LINE_WIDTH;
    ctx.beginPath();
    ctx.moveTo(BOTTOM_RIGHT_CORNER.x - ARC_RADIUS + (Math.cos(Math.PI / 4) * ARC_RADIUS), BOTTOM_RIGHT_CORNER.y - ARC_RADIUS + (Math.sin(Math.PI / 4) * ARC_RADIUS));
    ctx.lineTo(BOTTOM_RIGHT_CORNER.x - ARC_RADIUS + (Math.cos(Math.PI / 4) * ARC_RADIUS) + SLANT_LENGTH_X, BOTTOM_RIGHT_CORNER.y - ARC_RADIUS + (Math.sin(Math.PI / 4) * ARC_RADIUS) + SLANT_LENGTH_Y);
    // // To the right of the center slant line
    // for (let i = 1; i <= 3; i++) {
    //     ctx.moveTo(BOTTOM_RIGHT_CORNER.x - ARC_RADIUS + (Math.cos(i * Math.PI / 6) * ARC_RADIUS), BOTTOM_RIGHT_CORNER.y - ARC_RADIUS + (Math.sin(i * Math.PI / 6) * ARC_RADIUS));
    //     ctx.lineTo(BOTTOM_RIGHT_CORNER.x - ARC_RADIUS + (Math.cos(i * Math.PI / 6) * ARC_RADIUS) + SLANT_LENGTH_X, BOTTOM_RIGHT_CORNER.y - ARC_RADIUS + (Math.sin(i * Math.PI / 6) * ARC_RADIUS) + SLANT_LENGTH_Y);
    // }
    // // To the left of the center slant line
    // for (let i = 8; i >= 2; i /= 2) {
    //     ctx.moveTo(BOTTOM_RIGHT_CORNER.x - ((Math.cos(i * Math.PI / 16) * ARC_RADIUS) - (Math.cos(Math.PI / 4) * ARC_RADIUS)), BOTTOM_RIGHT_CORNER.y + ((Math.sin(i * Math.PI / 16) * ARC_RADIUS) - (Math.sin(Math.PI / 4) * ARC_RADIUS)));
    //     ctx.lineTo(BOTTOM_RIGHT_CORNER.x - ((Math.cos(i * Math.PI / 16) * ARC_RADIUS) - (Math.cos(Math.PI / 4) * ARC_RADIUS)) + SLANT_LENGTH_X, BOTTOM_RIGHT_CORNER.y + ((Math.sin(i * Math.PI / 16) * ARC_RADIUS) - (Math.sin(Math.PI / 4) * ARC_RADIUS)) + SLANT_LENGTH_Y);
    // }
    ctx.stroke();
}