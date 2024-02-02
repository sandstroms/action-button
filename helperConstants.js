const FRONT_TOP_LEFT_CORNER = { x: FRONT_START_X, y: FRONT_START_Y };
const FRONT_TOP_RIGHT_CORNER = { x: FRONT_START_X + WIDTH, y: FRONT_START_Y };
const FRONT_BOTTOM_RIGHT_CORNER = { x: FRONT_START_X + WIDTH, y: FRONT_START_Y + HEIGHT };
const FRONT_BOTTOM_LEFT_CORNER = { x: FRONT_START_X, y: FRONT_START_Y + HEIGHT };

const sharedButtonValues = {
    ARC_RADIUS,
    MAJOR_LINE_WIDTH,
    MINOR_LINE_WIDTH,
    SLANT_LINE_COLOR
};

const buttonValues = {
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
        SPACING_CONSTANT
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

const PRESSED_FRONT_START_X = FRONT_START_X + SLANT_X_LENGTH - PRESSED_SLANT_X_LENGTH;
const PRESSED_FRONT_START_Y = FRONT_START_Y + SLANT_Y_LENGTH - PRESSED_SLANT_Y_LENGTH;
const PRESSED_FRONT_TOP_LEFT_CORNER = { x: PRESSED_FRONT_START_X, y: PRESSED_FRONT_START_Y };
const PRESSED_FRONT_TOP_RIGHT_CORNER = { x: PRESSED_FRONT_START_X + WIDTH, y: PRESSED_FRONT_START_Y };
const PRESSED_FRONT_BOTTOM_RIGHT_CORNER = { x: PRESSED_FRONT_START_X + WIDTH, y: PRESSED_FRONT_START_Y + HEIGHT };
const PRESSED_FRONT_BOTTOM_LEFT_CORNER = { x: PRESSED_FRONT_START_X, y: PRESSED_FRONT_START_Y + HEIGHT };

const pressedButtonValues = {
    frontLayer: {
        START_X: PRESSED_FRONT_START_X,
        START_Y: PRESSED_FRONT_START_Y,
        TOP_LEFT_CORNER: PRESSED_FRONT_TOP_LEFT_CORNER,
        TOP_RIGHT_CORNER: PRESSED_FRONT_TOP_RIGHT_CORNER,
        BOTTOM_RIGHT_CORNER: PRESSED_FRONT_BOTTOM_RIGHT_CORNER,
        BOTTOM_LEFT_CORNER: PRESSED_FRONT_BOTTOM_LEFT_CORNER
    },
    intermediateLayer: {
        TOP_RIGHT_ARC_CORNER: {
            x: (PRESSED_FRONT_TOP_RIGHT_CORNER.x - ARC_RADIUS) + (Math.cos(Math.PI / 4) * ARC_RADIUS), 
            y: (PRESSED_FRONT_TOP_RIGHT_CORNER.y + ARC_RADIUS) - (Math.sin(Math.PI / 4) * ARC_RADIUS)
        },
        BOTTOM_RIGHT_ARC_CORNER: {
            x: (PRESSED_FRONT_BOTTOM_RIGHT_CORNER.x - ARC_RADIUS) + (Math.cos(Math.PI / 4) * ARC_RADIUS),
            y: (PRESSED_FRONT_BOTTOM_RIGHT_CORNER.y - ARC_RADIUS) + (Math.sin(Math.PI / 4) * ARC_RADIUS)
        },
        BOTTOM_LEFT_ARC_CORNER: {
            x: (PRESSED_FRONT_BOTTOM_LEFT_CORNER.x + ARC_RADIUS) - (Math.cos(Math.PI / 4) * ARC_RADIUS),
            y: (PRESSED_FRONT_BOTTOM_LEFT_CORNER.y - ARC_RADIUS) + (Math.sin(Math.PI / 4) * ARC_RADIUS)
        },
        TOP_LEFT_ARC_CORNER: {
            x: (PRESSED_FRONT_TOP_LEFT_CORNER.x + ARC_RADIUS) - (Math.cos(Math.PI / 4) * ARC_RADIUS),
            y: (PRESSED_FRONT_TOP_LEFT_CORNER.y + ARC_RADIUS) - (Math.sin(Math.PI / 4) * ARC_RADIUS)
        },
        SLANT_LENGTH_X: PRESSED_SLANT_X_LENGTH,
        SLANT_LENGTH_Y: PRESSED_SLANT_Y_LENGTH,
        SPACING_CONSTANT
    },
    backgroundLayer: {
        TOP_RIGHT_CORNER: {
            x: PRESSED_FRONT_TOP_RIGHT_CORNER.x + PRESSED_SLANT_X_LENGTH,
            y: PRESSED_FRONT_TOP_RIGHT_CORNER.y + PRESSED_SLANT_Y_LENGTH
        },
        BOTTOM_RIGHT_CORNER: {
            x: PRESSED_FRONT_BOTTOM_RIGHT_CORNER.x + PRESSED_SLANT_X_LENGTH,
            y: PRESSED_FRONT_BOTTOM_RIGHT_CORNER.y + PRESSED_SLANT_Y_LENGTH
        },
        BOTTOM_LEFT_CORNER: {
            x: PRESSED_FRONT_BOTTOM_LEFT_CORNER.x + PRESSED_SLANT_X_LENGTH,
            y: PRESSED_FRONT_BOTTOM_LEFT_CORNER.y + PRESSED_SLANT_Y_LENGTH
        },
        TOP_LEFT_CORNER: {
            x: PRESSED_FRONT_TOP_LEFT_CORNER.x + PRESSED_SLANT_X_LENGTH,
            y: PRESSED_FRONT_TOP_LEFT_CORNER.y + PRESSED_SLANT_Y_LENGTH
        }
    }
};