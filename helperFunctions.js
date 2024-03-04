function drawLayers(ctx, buttonValues) {
    drawIntermediateLayer(ctx, buttonValues);
    drawFrontLayer(ctx, buttonValues);
    drawBackgroundLayer(ctx, buttonValues);
}

function drawFrontLayer(ctx, buttonValues) {
    const frontLayer = buttonValues.frontLayer;

    ctx.strokeStyle = PRIMARY_LINE_COLOR
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
    drawTopRightSlantLine(ctx, buttonValues);
    drawBottomLeftSlantLine(ctx, buttonValues);

    drawSlantLinesOnRight(ctx, buttonValues);
    drawSlantLinesOnBottom(ctx, buttonValues);

    drawBottomRightCornerSlantLine(ctx, buttonValues);
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
    const { TOP_LEFT_CORNER, TOP_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.moveTo(TOP_LEFT_CORNER.x + CORNER_RADIUS, TOP_LEFT_CORNER.y);
    ctx.lineTo(TOP_RIGHT_CORNER.x - CORNER_RADIUS, TOP_RIGHT_CORNER.y);
    ctx.stroke();
}

function drawRightLine(ctx, buttonValues) {
    const { TOP_RIGHT_CORNER, BOTTOM_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.moveTo(TOP_RIGHT_CORNER.x, TOP_RIGHT_CORNER.y + CORNER_RADIUS);
    ctx.lineTo(BOTTOM_RIGHT_CORNER.x, BOTTOM_RIGHT_CORNER.y - CORNER_RADIUS);
    ctx.stroke();
}

function drawBottomLine(ctx, buttonValues) {
    const { BOTTOM_LEFT_CORNER, BOTTOM_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.moveTo(BOTTOM_RIGHT_CORNER.x - CORNER_RADIUS, BOTTOM_RIGHT_CORNER.y);
    ctx.lineTo(BOTTOM_LEFT_CORNER.x + CORNER_RADIUS, BOTTOM_LEFT_CORNER.y);
    ctx.stroke();
}

function drawLeftLine(ctx, buttonValues) {
    const { BOTTOM_LEFT_CORNER, TOP_LEFT_CORNER } = buttonValues.layer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.moveTo(BOTTOM_LEFT_CORNER.x, BOTTOM_LEFT_CORNER.y - CORNER_RADIUS);
    ctx.lineTo(TOP_LEFT_CORNER.x, TOP_LEFT_CORNER.y + CORNER_RADIUS);
    ctx.stroke();
}

function drawTopRightArc(ctx, buttonValues) {
    const { TOP_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.arc(TOP_RIGHT_CORNER.x - CORNER_RADIUS, TOP_RIGHT_CORNER.y + CORNER_RADIUS, CORNER_RADIUS, 3 * Math.PI / 2, 0);
    ctx.stroke();
}

function drawBottomRightArc(ctx, buttonValues) {
    const { BOTTOM_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.arc(BOTTOM_RIGHT_CORNER.x - CORNER_RADIUS, BOTTOM_RIGHT_CORNER.y - CORNER_RADIUS, CORNER_RADIUS, 0, Math.PI / 2);
    ctx.stroke();
}

function drawBottomLeftArc(ctx, buttonValues) {
    const { BOTTOM_LEFT_CORNER } = buttonValues.layer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.arc(BOTTOM_LEFT_CORNER.x + CORNER_RADIUS, BOTTOM_LEFT_CORNER.y - CORNER_RADIUS, CORNER_RADIUS, Math.PI / 2, Math.PI);
    ctx.stroke();
}

function drawTopLeftArc(ctx, buttonValues) {
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

function drawBottomLeftHalfArc(ctx, buttonValues) {
    const { BOTTOM_LEFT_CORNER } = buttonValues.layer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.arc(BOTTOM_LEFT_CORNER.x + CORNER_RADIUS, BOTTOM_LEFT_CORNER.y - CORNER_RADIUS, CORNER_RADIUS, Math.PI / 2, 3 * Math.PI / 4);
    ctx.stroke();
}

function drawTopRightHalfArc(ctx, buttonValues) {
    const { TOP_RIGHT_CORNER } = buttonValues.layer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.arc(TOP_RIGHT_CORNER.x - CORNER_RADIUS, TOP_RIGHT_CORNER.y + CORNER_RADIUS, CORNER_RADIUS, 7 * Math.PI / 4, 0);
    ctx.stroke();
}

function drawTopRightSlantLine(ctx, buttonValues) {
    const { frontLayer, intermediateLayer } = buttonValues;
    const { TOP_RIGHT_ARC_CORNER } = frontLayer;
    const { SLANT_LENGTH } = intermediateLayer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.moveTo(TOP_RIGHT_ARC_CORNER.x, TOP_RIGHT_ARC_CORNER.y);
    ctx.lineTo(TOP_RIGHT_ARC_CORNER.x + SLANT_LENGTH, TOP_RIGHT_ARC_CORNER.y + SLANT_LENGTH);
    ctx.stroke();
}

function drawBottomLeftSlantLine(ctx, buttonValues) {
    const { frontLayer, intermediateLayer } = buttonValues;
    const { BOTTOM_LEFT_ARC_CORNER } = frontLayer;
    const { SLANT_LENGTH } = intermediateLayer;

    ctx.lineWidth = OUTLINE_THICKNESS;
    ctx.beginPath();
    ctx.moveTo(BOTTOM_LEFT_ARC_CORNER.x, BOTTOM_LEFT_ARC_CORNER.y);
    ctx.lineTo(BOTTOM_LEFT_ARC_CORNER.x + SLANT_LENGTH, BOTTOM_LEFT_ARC_CORNER.y + SLANT_LENGTH);
    ctx.stroke();
}

function drawBottomRightCornerSlantLine(ctx, buttonValues) {
    const { frontLayer, intermediateLayer } = buttonValues;
    const { BOTTOM_RIGHT_ARC_CORNER } = frontLayer
    const { SLANT_LENGTH } = intermediateLayer;

    ctx.strokeStyle = SECONDARY_LINE_COLOR;
    ctx.lineWidth = SLANT_LINE_THICKNESS;
    ctx.beginPath();
    ctx.moveTo(BOTTOM_RIGHT_ARC_CORNER.x, BOTTOM_RIGHT_ARC_CORNER.y);
    ctx.lineTo(BOTTOM_RIGHT_ARC_CORNER.x + SLANT_LENGTH, BOTTOM_RIGHT_ARC_CORNER.y + SLANT_LENGTH);
    ctx.stroke();
}

function drawSlantLinesOnRight(ctx, buttonValues) {
    const { TOP_RIGHT_CORNER } = buttonValues.frontLayer;
    const { SLANT_LENGTH } = buttonValues.intermediateLayer;

    const height = determineHeightOfCornerLines(buttonValues);
    const numLines = height / SPACING_CONSTANT;
    const newSpacingConstant = height / numLines;

    ctx.strokeStyle = SECONDARY_LINE_COLOR;
    ctx.lineWidth = SLANT_LINE_THICKNESS;
    ctx.beginPath();
    let j = newSpacingConstant;
    for (let i = 1; i < numLines; i ++, j+= newSpacingConstant) {
        ctx.moveTo(TOP_RIGHT_CORNER.x, TOP_RIGHT_CORNER.y + j);
        ctx.lineTo(TOP_RIGHT_CORNER.x + SLANT_LENGTH, TOP_RIGHT_CORNER.y + SLANT_LENGTH + j);
    }
    ctx.stroke();
}

function drawSlantLinesOnBottom(ctx, buttonValues) {
    const { BOTTOM_LEFT_CORNER } = buttonValues.frontLayer;
    const { SLANT_LENGTH } = buttonValues.intermediateLayer;

    const width = determineWidthOfCornerLines(buttonValues);
    const numLines = width / SPACING_CONSTANT;
    const newSpacingConstant = width / numLines;

    ctx.strokeStyle = SECONDARY_LINE_COLOR;
    ctx.lineWidth = SLANT_LINE_THICKNESS;
    ctx.beginPath();
    let j = newSpacingConstant;
    for (let i = 1; i < numLines; i++, j+= newSpacingConstant) {
        ctx.moveTo(BOTTOM_LEFT_CORNER.x + j, BOTTOM_LEFT_CORNER.y);
        ctx.lineTo(BOTTOM_LEFT_CORNER.x + SLANT_LENGTH + j, BOTTOM_LEFT_CORNER.y + SLANT_LENGTH);
    }
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

function determineHeightOfCornerLines(buttonValues) {
    const { BOTTOM_RIGHT_ARC_CORNER, TOP_RIGHT_ARC_CORNER } = buttonValues.frontLayer;
    return BOTTOM_RIGHT_ARC_CORNER.y - TOP_RIGHT_ARC_CORNER.y;
}

function determineWidthOfCornerLines(buttonValues) {
    const { BOTTOM_RIGHT_ARC_CORNER, BOTTOM_LEFT_ARC_CORNER } = buttonValues.frontLayer;
    return BOTTOM_RIGHT_ARC_CORNER.x - BOTTOM_LEFT_ARC_CORNER.x;
}