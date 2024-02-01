drawButton();

function drawButton() {
    const canvas = document.getElementById("actionButton");
    const ctx = canvas.getContext("2d");

    /* Constants ------------------------------------------------------------ */
    const FRONT_START_X = 50;
    const FRONT_START_Y = 50;
    const WIDTH = 200;
    const HEIGHT = 120;
    const ARC_RADIUS = 8;
    const SLANT_X_LENGTH = 20;
    const SLANT_Y_LENGTH = 20;
    const FRONT_TOP_LEFT_CORNER = { x: FRONT_START_X, y: FRONT_START_Y };
    const FRONT_TOP_RIGHT_CORNER = { x: FRONT_START_X + WIDTH, y: FRONT_START_Y };
    const FRONT_BOTTOM_RIGHT_CORNER = { x: FRONT_START_X + WIDTH, y: FRONT_START_Y + HEIGHT };
    const FRONT_BOTTOM_LEFT_CORNER = { x: FRONT_START_X, y: FRONT_START_Y + HEIGHT };
    
    const buttonValues = {
        WIDTH,
        HEIGHT,
        ARC_RADIUS,
        frontLayer: {
            START_X: FRONT_START_X,
            START_Y: FRONT_START_Y,
            TOP_LEFT_CORNER: FRONT_TOP_LEFT_CORNER,
            TOP_RIGHT_CORNER: FRONT_TOP_RIGHT_CORNER,
            BOTTOM_RIGHT_CORNER: FRONT_BOTTOM_RIGHT_CORNER,
            BOTTOM_LEFT_CORNER: FRONT_BOTTOM_LEFT_CORNER
        },
        intermediateLayer: {
            TOP_RIGHT_ARC_CORNER: {
                x: (FRONT_TOP_RIGHT_CORNER.x - ARC_RADIUS) + (Math.cos(Math.PI / 4) * ARC_RADIUS), 
                y: (FRONT_TOP_RIGHT_CORNER.y + ARC_RADIUS) - (Math.sin(Math.PI / 4) * ARC_RADIUS)
            },
            BOTTOM_RIGHT_ARC_CORNER: {
                x: (FRONT_BOTTOM_RIGHT_CORNER.x - ARC_RADIUS) + (Math.cos(Math.PI / 4) * ARC_RADIUS),
                y: (FRONT_BOTTOM_RIGHT_CORNER.y - ARC_RADIUS) + (Math.sin(Math.PI / 4) * ARC_RADIUS)
            },
            BOTTOM_LEFT_ARC_CORNER: {
                x: (FRONT_BOTTOM_LEFT_CORNER.x + ARC_RADIUS) - (Math.cos(Math.PI / 4) * ARC_RADIUS),
                y: (FRONT_BOTTOM_LEFT_CORNER.y - ARC_RADIUS) + (Math.sin(Math.PI / 4) * ARC_RADIUS)
            },
            TOP_LEFT_ARC_CORNER: {
                x: (FRONT_TOP_LEFT_CORNER.x + ARC_RADIUS) - (Math.cos(Math.PI / 4) * ARC_RADIUS),
                y: (FRONT_TOP_LEFT_CORNER.y + ARC_RADIUS) - (Math.sin(Math.PI / 4) * ARC_RADIUS)
            },
            SLANT_LENGTH_X: SLANT_X_LENGTH,
            SLANT_LENGTH_Y: SLANT_Y_LENGTH,
            SLANT_LENGTH: Math.sqrt(Math.pow(SLANT_X_LENGTH, 2) + Math.pow(SLANT_Y_LENGTH, 2)),
            SPACING_CONSTANT: 20
        },
        backgroundLayer: {
            TOP_RIGHT_CORNER: {
                x: FRONT_TOP_RIGHT_CORNER.x + SLANT_X_LENGTH,
                y: FRONT_TOP_RIGHT_CORNER.y + SLANT_Y_LENGTH
            },
            BOTTOM_RIGHT_CORNER: {
                x: FRONT_BOTTOM_RIGHT_CORNER.x + SLANT_X_LENGTH,
                y: FRONT_BOTTOM_RIGHT_CORNER.y + SLANT_Y_LENGTH
            },
            BOTTOM_LEFT_CORNER: {
                x: FRONT_BOTTOM_LEFT_CORNER.x + SLANT_X_LENGTH,
                y: FRONT_BOTTOM_LEFT_CORNER.y + SLANT_Y_LENGTH
            },
            TOP_LEFT_CORNER: {
                x: FRONT_TOP_LEFT_CORNER.x + SLANT_X_LENGTH,
                y: FRONT_TOP_LEFT_CORNER.y + SLANT_Y_LENGTH
            }
        }
    };
    /* ---------------------------------------------------------------------- */

    drawFrontLayer(ctx, buttonValues);
    drawIntermediateLayer(ctx, buttonValues);
    drawBackgroundLayer(ctx, buttonValues);
}

function drawRoundedRect(ctx, buttonValues) {
    const { ARC_RADIUS, layer } = buttonValues;
    const { TOP_RIGHT_CORNER, BOTTOM_RIGHT_CORNER, BOTTOM_LEFT_CORNER, TOP_LEFT_CORNER } = layer;

   /* -------------- Lines --------------- */
   ctx.beginPath();

   // Top
   ctx.moveTo(TOP_LEFT_CORNER.x + ARC_RADIUS, TOP_LEFT_CORNER.y);
   ctx.lineTo(TOP_RIGHT_CORNER.x - ARC_RADIUS, TOP_RIGHT_CORNER.y);

   // Right
   ctx.moveTo(TOP_RIGHT_CORNER.x, TOP_RIGHT_CORNER.y + ARC_RADIUS);
   ctx.lineTo(BOTTOM_RIGHT_CORNER.x, BOTTOM_RIGHT_CORNER.y - ARC_RADIUS);

   // Bottom
   ctx.moveTo(BOTTOM_RIGHT_CORNER.x - ARC_RADIUS, BOTTOM_RIGHT_CORNER.y);
   ctx.lineTo(BOTTOM_LEFT_CORNER.x + ARC_RADIUS, BOTTOM_LEFT_CORNER.y);

   // Left
   ctx.moveTo(BOTTOM_LEFT_CORNER.x, BOTTOM_LEFT_CORNER.y - ARC_RADIUS);
   ctx.lineTo(TOP_LEFT_CORNER.x, TOP_LEFT_CORNER.y + ARC_RADIUS);

   ctx.stroke()
   /* ------------------------------------- */

   /* -------------- Arcs ----------------- */
   // Top-right
   ctx.beginPath();
   ctx.arc(TOP_RIGHT_CORNER.x - ARC_RADIUS, TOP_RIGHT_CORNER.y + ARC_RADIUS, ARC_RADIUS, 3 * Math.PI / 2, 0);
   ctx.stroke();

   // Bottom-right
   ctx.beginPath();
   ctx.arc(BOTTOM_RIGHT_CORNER.x - ARC_RADIUS, BOTTOM_RIGHT_CORNER.y - ARC_RADIUS, ARC_RADIUS, 0, Math.PI / 2);
   ctx.stroke();

   // Bottom-left
   ctx.beginPath();
   ctx.arc(BOTTOM_LEFT_CORNER.x + ARC_RADIUS, BOTTOM_LEFT_CORNER.y - ARC_RADIUS, ARC_RADIUS, Math.PI / 2, Math.PI);
   ctx.stroke();
 
   // Top-left
   ctx.beginPath();
   ctx.arc(TOP_LEFT_CORNER.x + ARC_RADIUS, TOP_LEFT_CORNER.y + ARC_RADIUS, ARC_RADIUS, Math.PI, 3 * Math.PI / 2);
   ctx.stroke();
   /* ------------------------------------- */
}

function drawFrontLayer(ctx, buttonValues) {
    const { WIDTH, HEIGHT, frontLayer } = buttonValues;
    const { START_X, START_Y } = frontLayer;

    drawRoundedRect(ctx, { layer: frontLayer, ...buttonValues });

    /* -------------- Text ----------------- */
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Submit", (WIDTH / 2) + START_X, (HEIGHT / 2) + START_Y);
    /* ------------------------------------- */
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
 
    // Bottom-right
    ctx.moveTo(BOTTOM_RIGHT_ARC_CORNER.x, BOTTOM_RIGHT_ARC_CORNER.y);
    ctx.lineTo(BOTTOM_RIGHT_ARC_CORNER.x + SLANT_LENGTH_X, BOTTOM_RIGHT_ARC_CORNER.y + SLANT_LENGTH_Y);
 
    // Bottom-left
    ctx.moveTo(BOTTOM_LEFT_ARC_CORNER.x, BOTTOM_LEFT_ARC_CORNER.y);
    ctx.lineTo(BOTTOM_LEFT_ARC_CORNER.x + SLANT_LENGTH_X, BOTTOM_LEFT_ARC_CORNER.y + SLANT_LENGTH_Y);
 
    // Top-left
    ctx.moveTo(TOP_LEFT_ARC_CORNER.x, TOP_LEFT_ARC_CORNER.y);
    ctx.lineTo(TOP_LEFT_ARC_CORNER.x + SLANT_LENGTH_X, TOP_LEFT_ARC_CORNER.y + SLANT_LENGTH_Y);

    ctx.stroke()
    /* ------------------------------------- */

    /* Lines in-between corners --- */
    ctx.strokeStyle = "red";
    ctx.beginPath();

    // Top
    for (let i = SPACING_CONSTANT; i < WIDTH; i += SPACING_CONSTANT) {
        ctx.moveTo(TOP_LEFT_CORNER.x + i, TOP_LEFT_CORNER.y);
        ctx.lineTo(TOP_LEFT_CORNER.x + SLANT_LENGTH_X + i, TOP_LEFT_CORNER.y + SLANT_LENGTH_Y);
    }

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

    // Left
    for (let i = SPACING_CONSTANT; i < HEIGHT; i += SPACING_CONSTANT) {
        ctx.moveTo(BOTTOM_LEFT_CORNER.x, BOTTOM_LEFT_CORNER.y - i);
        ctx.lineTo(BOTTOM_LEFT_CORNER.x + SLANT_LENGTH_X, BOTTOM_LEFT_CORNER.y + SLANT_LENGTH_Y - i);
    }

    ctx.stroke();
    ctx.strokeStyle = "black";
    /* ------------------------------------- */
}

function drawBackgroundLayer(ctx, buttonValues) {
    drawRoundedRect(ctx, { layer: buttonValues.backgroundLayer, ...buttonValues });
}