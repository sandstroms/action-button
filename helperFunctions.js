function drawLayers(ctx, buttonValues, sharedButtonValues) {
    drawIntermediateLayer(ctx, buttonValues, sharedButtonValues);
    drawFrontLayer(ctx, buttonValues, sharedButtonValues);
    drawBackgroundLayer(ctx, buttonValues, sharedButtonValues);
}

function drawFrontLayer(ctx, buttonValues, sharedButtonValues) {
    const frontLayer = buttonValues.frontLayer;

    ctx.strokeStyle = sharedButtonValues.PRIMARY_LINE_COLOR;
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
    ctx.strokeStyle = sharedButtonValues.PRIMARY_LINE_COLOR
    drawTopRightSlantLine(ctx, buttonValues, sharedButtonValues);
    drawBottomLeftSlantLine(ctx, buttonValues, sharedButtonValues);

    drawSlantLinesOnRight(ctx, buttonValues, sharedButtonValues);
    drawSlantLinesOnBottom(ctx, buttonValues, sharedButtonValues);

    drawBottomRightCornerSlantLine(ctx, buttonValues, sharedButtonValues);
}

function drawBackgroundLayer(ctx, buttonValues, sharedButtonValues) {
    const backgroundLayer = buttonValues.backgroundLayer;

    ctx.strokeStyle = sharedButtonValues.PRIMARY_LINE_COLOR;
    drawRightLine(ctx, { layer: backgroundLayer, ...buttonValues }, sharedButtonValues);
    drawBottomLine(ctx, { layer: backgroundLayer, ...buttonValues }, sharedButtonValues);

    drawTopRightHalfArc(ctx, { layer: backgroundLayer, ...buttonValues }, sharedButtonValues);
    drawBottomRightArc(ctx, { layer: backgroundLayer, ...buttonValues }, sharedButtonValues);
    drawBottomLeftHalfArc(ctx, { layer: backgroundLayer, ...buttonValues }, sharedButtonValues);
}

function drawTopLine(ctx, buttonValues, sharedButtonValues) {
    const { OUTLINE_THICKNESS } = sharedButtonValues;
    const { TOP_LEFT_CORNER, TOP_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.moveTo(TOP_LEFT_CORNER.x + CORNER_RADIUS, TOP_LEFT_CORNER.y);
    ctx.lineTo(TOP_RIGHT_CORNER.x - CORNER_RADIUS, TOP_RIGHT_CORNER.y);
    ctx.stroke();
}

function drawRightLine(ctx, buttonValues, sharedButtonValues) {
    const { OUTLINE_THICKNESS } = sharedButtonValues;
    const { TOP_RIGHT_CORNER, BOTTOM_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.moveTo(TOP_RIGHT_CORNER.x, TOP_RIGHT_CORNER.y + CORNER_RADIUS);
    ctx.lineTo(BOTTOM_RIGHT_CORNER.x, BOTTOM_RIGHT_CORNER.y - CORNER_RADIUS);
    ctx.stroke();
}

function drawBottomLine(ctx, buttonValues, sharedButtonValues) {
    const { OUTLINE_THICKNESS } = sharedButtonValues;
    const { BOTTOM_LEFT_CORNER, BOTTOM_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.moveTo(BOTTOM_RIGHT_CORNER.x - CORNER_RADIUS, BOTTOM_RIGHT_CORNER.y);
    ctx.lineTo(BOTTOM_LEFT_CORNER.x + CORNER_RADIUS, BOTTOM_LEFT_CORNER.y);
    ctx.stroke();
}

function drawLeftLine(ctx, buttonValues, sharedButtonValues) {
    const { OUTLINE_THICKNESS } = sharedButtonValues;
    const { BOTTOM_LEFT_CORNER, TOP_LEFT_CORNER } = buttonValues.layer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.moveTo(BOTTOM_LEFT_CORNER.x, BOTTOM_LEFT_CORNER.y - CORNER_RADIUS);
    ctx.lineTo(TOP_LEFT_CORNER.x, TOP_LEFT_CORNER.y + CORNER_RADIUS);
    ctx.stroke();
}

function drawTopRightArc(ctx, buttonValues, sharedButtonValues) {
    const { OUTLINE_THICKNESS } = sharedButtonValues;
    const { TOP_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.arc(TOP_RIGHT_CORNER.x - CORNER_RADIUS, TOP_RIGHT_CORNER.y + CORNER_RADIUS, CORNER_RADIUS, 3 * Math.PI / 2, 0);
    ctx.stroke();
}

function drawBottomRightArc(ctx, buttonValues, sharedButtonValues) {
    const { OUTLINE_THICKNESS } = sharedButtonValues;
    const { BOTTOM_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.arc(BOTTOM_RIGHT_CORNER.x - CORNER_RADIUS, BOTTOM_RIGHT_CORNER.y - CORNER_RADIUS, CORNER_RADIUS, 0, Math.PI / 2);
    ctx.stroke();
}

function drawBottomLeftArc(ctx, buttonValues, sharedButtonValues) {
    const { OUTLINE_THICKNESS } = sharedButtonValues;
    const { BOTTOM_LEFT_CORNER } = buttonValues.layer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.arc(BOTTOM_LEFT_CORNER.x + CORNER_RADIUS, BOTTOM_LEFT_CORNER.y - CORNER_RADIUS, CORNER_RADIUS, Math.PI / 2, Math.PI);
    ctx.stroke();
}

function drawTopLeftArc(ctx, buttonValues, sharedButtonValues) {
    const { OUTLINE_THICKNESS } = sharedButtonValues;
    const { TOP_LEFT_CORNER } = buttonValues.layer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.arc(TOP_LEFT_CORNER.x + CORNER_RADIUS, TOP_LEFT_CORNER.y + CORNER_RADIUS, CORNER_RADIUS, Math.PI, 3 * Math.PI / 2);
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
    const { OUTLINE_THICKNESS } = sharedButtonValues;
    const { BOTTOM_LEFT_CORNER } = buttonValues.layer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.arc(BOTTOM_LEFT_CORNER.x + CORNER_RADIUS, BOTTOM_LEFT_CORNER.y - CORNER_RADIUS, CORNER_RADIUS, Math.PI / 2, 3 * Math.PI / 4);
    ctx.stroke();
}

function drawTopRightHalfArc(ctx, buttonValues, sharedButtonValues) {
    const { OUTLINE_THICKNESS } = sharedButtonValues;
    const { TOP_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.arc(TOP_RIGHT_CORNER.x - CORNER_RADIUS, TOP_RIGHT_CORNER.y + CORNER_RADIUS, CORNER_RADIUS, 7 * Math.PI / 4, 0);
    ctx.stroke();
}

function drawTopRightSlantLine(ctx, buttonValues, sharedButtonValues) {
    const { OUTLINE_THICKNESS } = sharedButtonValues;
    const { frontLayer, intermediateLayer } = buttonValues;
    const { TOP_RIGHT_CORNER } = frontLayer;
    const { SLANT_LENGTH } = intermediateLayer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.moveTo(TOP_RIGHT_CORNER.x - CORNER_RADIUS + (Math.cos(Math.PI / 4) * CORNER_RADIUS), TOP_RIGHT_CORNER.y + CORNER_RADIUS - (Math.sin(Math.PI / 4) * CORNER_RADIUS));
    ctx.lineTo(TOP_RIGHT_CORNER.x - CORNER_RADIUS + (Math.cos(Math.PI / 4) * CORNER_RADIUS) + SLANT_LENGTH, TOP_RIGHT_CORNER.y + CORNER_RADIUS - (Math.sin(Math.PI / 4) * CORNER_RADIUS) + SLANT_LENGTH);
    ctx.stroke();
}

function drawBottomLeftSlantLine(ctx, buttonValues, sharedButtonValues) {
    const { OUTLINE_THICKNESS } = sharedButtonValues;
    const { frontLayer, intermediateLayer } = buttonValues;
    const { BOTTOM_LEFT_CORNER } = frontLayer;
    const { SLANT_LENGTH } = intermediateLayer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.moveTo(BOTTOM_LEFT_CORNER.x + CORNER_RADIUS - (Math.cos(Math.PI / 4) * CORNER_RADIUS), BOTTOM_LEFT_CORNER.y - CORNER_RADIUS + (Math.sin(Math.PI / 4) * CORNER_RADIUS));
    ctx.lineTo(BOTTOM_LEFT_CORNER.x + CORNER_RADIUS - (Math.cos(Math.PI / 4) * CORNER_RADIUS) + SLANT_LENGTH, BOTTOM_LEFT_CORNER.y - CORNER_RADIUS + (Math.sin(Math.PI / 4) * CORNER_RADIUS) + SLANT_LENGTH);
    ctx.stroke();
}

function drawSlantLinesOnRight(ctx, buttonValues, sharedButtonValues) {
    const { OUTLINE_THICKNESS, SLANT_LINE_THICKNESS, SECONDARY_LINE_COLOR, SPACING_CONSTANT } = sharedButtonValues;
    const { TOP_RIGHT_CORNER } = buttonValues.frontLayer;
    const { SLANT_LENGTH } = buttonValues.intermediateLayer;

    ctx.strokeStyle = SECONDARY_LINE_COLOR;
    ctx.lineWidth = SLANT_LINE_THICKNESS;
    ctx.beginPath();
    for (let i = OUTLINE_THICKNESS / 2 + SPACING_CONSTANT; i < HEIGHT - HEIGHT / 20; i += SPACING_CONSTANT) {
        ctx.moveTo(TOP_RIGHT_CORNER.x, TOP_RIGHT_CORNER.y + i);
        ctx.lineTo(TOP_RIGHT_CORNER.x + SLANT_LENGTH, TOP_RIGHT_CORNER.y + SLANT_LENGTH + i);
    }
    ctx.stroke();
}

function drawSlantLinesOnBottom(ctx, buttonValues, sharedButtonValues) {
    const { OUTLINE_THICKNESS, SLANT_LINE_THICKNESS, SECONDARY_LINE_COLOR, SPACING_CONSTANT } = sharedButtonValues
    const { BOTTOM_LEFT_CORNER } = buttonValues.frontLayer;
    const { SLANT_LENGTH } = buttonValues.intermediateLayer;

    ctx.strokeStyle = SECONDARY_LINE_COLOR;
    ctx.lineWidth = SLANT_LINE_THICKNESS;
    ctx.beginPath();
    for (let i = OUTLINE_THICKNESS / 2 + SPACING_CONSTANT; i < WIDTH - WIDTH / 20; i += SPACING_CONSTANT) {
        ctx.moveTo(BOTTOM_LEFT_CORNER.x + i, BOTTOM_LEFT_CORNER.y);
        ctx.lineTo(BOTTOM_LEFT_CORNER.x + SLANT_LENGTH + i, BOTTOM_LEFT_CORNER.y + SLANT_LENGTH);
    }
    ctx.stroke();
}

function drawBottomRightCornerSlantLine(ctx, buttonValues, sharedButtonValues) {
    const { frontLayer, intermediateLayer } = buttonValues;
    const { SECONDARY_LINE_COLOR } = sharedButtonValues;
    const { BOTTOM_RIGHT_CORNER } = frontLayer
    const { SLANT_LENGTH } = intermediateLayer;

    ctx.strokeStyle = SECONDARY_LINE_COLOR;
    ctx.lineWidth = SLANT_LINE_THICKNESS;
    ctx.beginPath();
    ctx.moveTo(BOTTOM_RIGHT_CORNER.x - CORNER_RADIUS + (Math.cos(Math.PI / 4) * CORNER_RADIUS), BOTTOM_RIGHT_CORNER.y - CORNER_RADIUS + (Math.sin(Math.PI / 4) * CORNER_RADIUS));
    ctx.lineTo(BOTTOM_RIGHT_CORNER.x - CORNER_RADIUS + (Math.cos(Math.PI / 4) * CORNER_RADIUS) + SLANT_LENGTH, BOTTOM_RIGHT_CORNER.y - CORNER_RADIUS + (Math.sin(Math.PI / 4) * CORNER_RADIUS) + SLANT_LENGTH);
    ctx.stroke();
}

function drawEffect(ctx) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(EFFECT_LINE_TOP_LEFT_CORNER.x, EFFECT_LINE_TOP_LEFT_CORNER.y);
    ctx.lineTo(EFFECT_LINE_TOP_LEFT_CORNER.x - EFFECT_LINE_MAJOR_WIDTH, EFFECT_LINE_TOP_LEFT_CORNER.y - EFFECT_LINE_MAJOR_WIDTH);
    ctx.moveTo(EFFECT_LINE_TOP_RIGHT_CORNER.x, EFFECT_LINE_TOP_RIGHT_CORNER.y);
    ctx.lineTo(EFFECT_LINE_TOP_RIGHT_CORNER.x + EFFECT_LINE_MAJOR_WIDTH, EFFECT_LINE_TOP_RIGHT_CORNER.y - EFFECT_LINE_MAJOR_WIDTH);
    ctx.moveTo(EFFECT_LINE_BOTTOM_LEFT_CORNER.x, EFFECT_LINE_BOTTOM_LEFT_CORNER.y);
    ctx.lineTo(EFFECT_LINE_BOTTOM_LEFT_CORNER.x - EFFECT_LINE_MAJOR_WIDTH, EFFECT_LINE_BOTTOM_LEFT_CORNER.y + EFFECT_LINE_MAJOR_WIDTH);
    ctx.moveTo(EFFECT_LINE_BOTTOM_RIGHT_CORNER.x, EFFECT_LINE_BOTTOM_RIGHT_CORNER.y);
    ctx.lineTo(EFFECT_LINE_BOTTOM_RIGHT_CORNER.x + EFFECT_LINE_MAJOR_WIDTH, EFFECT_LINE_BOTTOM_RIGHT_CORNER.y + EFFECT_LINE_MAJOR_WIDTH);
    ctx.moveTo(EFFECT_LINE_TOP.x, EFFECT_LINE_TOP.y);
    ctx.lineTo(EFFECT_LINE_TOP.x, EFFECT_LINE_TOP.y - EFFECT_LINE_MINOR_WIDTH);
    ctx.moveTo(EFFECT_LINE_RIGHT.x, EFFECT_LINE_RIGHT.y);
    ctx.lineTo(EFFECT_LINE_RIGHT.x + EFFECT_LINE_MINOR_WIDTH, EFFECT_LINE_RIGHT.y);
    ctx.moveTo(EFFECT_LINE_BOTTOM.x, EFFECT_LINE_BOTTOM.y);
    ctx.lineTo(EFFECT_LINE_BOTTOM.x, EFFECT_LINE_BOTTOM.y + EFFECT_LINE_MINOR_WIDTH);
    ctx.moveTo(EFFECT_LINE_LEFT.x, EFFECT_LINE_LEFT.y);
    ctx.lineTo(EFFECT_LINE_LEFT.x - EFFECT_LINE_MINOR_WIDTH, EFFECT_LINE_LEFT.y);
    ctx.stroke();
}