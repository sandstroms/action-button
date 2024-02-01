drawButton();

function drawButton() {
    const canvas = document.getElementById("actionButton");
    const ctx = canvas.getContext("2d");

    /* Constants ------------------------------------------------------------ */
    const START_X = 50;
    const START_Y = 50;
    const WIDTH = 200;
    const HEIGHT = 120;
    const ARC_RADIUS = 8;
    const SLANT_LENGTH_X = 20;
    const SLANT_LENGTH_Y = 20;
    const TOP_LEFT_CORNER = { x: START_X, y: START_Y };
    const TOP_RIGHT_CORNER = { x: START_X + WIDTH, y: START_Y };
    const BOTTOM_RIGHT_CORNER = { x: START_X + WIDTH, y: START_Y + HEIGHT };
    const BOTTOM_LEFT_CORNER = { x: START_X, y: START_Y + HEIGHT };
    const buttonValues = {
        WIDTH,
        HEIGHT,
        ARC_RADIUS,
        frontLayer: {
            START_X,
            START_Y,
            TOP_LEFT_CORNER,
            TOP_RIGHT_CORNER,
            BOTTOM_RIGHT_CORNER,
            BOTTOM_LEFT_CORNER
        },
        intermediateLayer: {
            TOP_RIGHT_ARC_CORNER: {
                x: (TOP_RIGHT_CORNER.x - ARC_RADIUS) + (Math.cos(Math.PI / 4) * ARC_RADIUS), 
                y: (TOP_RIGHT_CORNER.y + ARC_RADIUS) - (Math.sin(Math.PI / 4) * ARC_RADIUS)
            },
            BOTTOM_RIGHT_ARC_CORNER: {
                x: (BOTTOM_RIGHT_CORNER.x - ARC_RADIUS) + (Math.cos(Math.PI / 4) * ARC_RADIUS),
                y: (BOTTOM_RIGHT_CORNER.y - ARC_RADIUS) + (Math.sin(Math.PI / 4) * ARC_RADIUS)
            },
            BOTTOM_LEFT_ARC_CORNER: {
                x: (BOTTOM_LEFT_CORNER.x + ARC_RADIUS) - (Math.cos(Math.PI / 4) * ARC_RADIUS),
                y: (BOTTOM_LEFT_CORNER.y - ARC_RADIUS) + (Math.sin(Math.PI / 4) * ARC_RADIUS)
            },
            TOP_LEFT_ARC_CORNER: {
                x: (TOP_LEFT_CORNER.x + ARC_RADIUS) - (Math.cos(Math.PI / 4) * ARC_RADIUS),
                y: (TOP_LEFT_CORNER.y + ARC_RADIUS) - (Math.sin(Math.PI / 4) * ARC_RADIUS)
            },
            SLANT_LENGTH_X,
            SLANT_LENGTH_Y,
            SLANT_LENGTH: Math.sqrt(Math.pow(SLANT_LENGTH_X, 2) + Math.pow(SLANT_LENGTH_Y, 2))
        },
        backgroundLayer: {
            TOP_RIGHT_CORNER: {
                x: TOP_RIGHT_CORNER.x + SLANT_LENGTH_X,
                y: TOP_RIGHT_CORNER.y + SLANT_LENGTH_Y
            },
            BOTTOM_RIGHT_CORNER: {
                x: BOTTOM_RIGHT_CORNER.x + SLANT_LENGTH_X,
                y: BOTTOM_RIGHT_CORNER.y + SLANT_LENGTH_Y
            },
            BOTTOM_LEFT_CORNER: {
                x: BOTTOM_LEFT_CORNER.x + SLANT_LENGTH_X,
                y: BOTTOM_LEFT_CORNER.y + SLANT_LENGTH_Y
            },
            TOP_LEFT_CORNER: {
                x: TOP_LEFT_CORNER.x + SLANT_LENGTH_X,
                y: TOP_LEFT_CORNER.y + SLANT_LENGTH_Y
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
    const { TOP_RIGHT_ARC_CORNER, BOTTOM_RIGHT_ARC_CORNER, BOTTOM_LEFT_ARC_CORNER, TOP_LEFT_ARC_CORNER, SLANT_LENGTH_X, SLANT_LENGTH_Y } = buttonValues.intermediateLayer;

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
}

function drawBackgroundLayer(ctx, buttonValues) {
    drawRoundedRect(ctx, { layer: buttonValues.backgroundLayer, ...buttonValues });
}