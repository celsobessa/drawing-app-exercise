let defaultBrushValues = {
    shape: 'ellipse',
    width: 100,
    height: 100
};
let brushValues = defaultBrushValues;
/**
 * Sets up the P5 environment.
 *
 * @description sets up the P5 environment and defaults prior to the first frame draw.
 *
 * @returns void
 */
function setup()
{
	createCanvas(600, 600);
    background(0, 0, 0);
    fill(255, 255, 255);
    brush(defaultBrushValues);

}

/**
 * Draws to the canvas at each frame.
 *
 * @returns void
 */
function draw()
{
    brush(brushValues);
}

/**
 * Triggered when a mouse button is pressed.
 *
 * @returns void
 */
function mousePressed(){
    randomFillRGBA();
    brushValues = randomBrushValues();
    console.log(width, height);
}

/**
 * Triggered when a keyboard key is pressed.
 *
 * @returns void
 */
function keyPressed(){
    //fill(255, 255, 255);
    //randomBrush();
}

/**
 * Return an eight bit random number from 0-255.
 *
 * @requires randomNumber
 *
 * @returns int a random number from 0-255.
 */
function eightBitRandomNumber() {
    return randomNumber(0, 255);
}

/**
 * Returns a pseudo probability floating point number between 0-1.
 *
 * @description Returns a floating point number ranging from 0 to 1 with a variable number of decimals (defaults to 2 decimal point).
 *
 * @requires randomNumber
 *
 * @returns float a random floating point number ranging from 0 to 1.
 */
function randomPseudoProbability( decimals = 2) {
    let number = randomNumber(0,100) / 100;
    number = number.toFixed(decimals);
    return (number);
}

/**
 * Changes fill to a random RGBA value.
 *
 * @description Changes fill to a random RGBA value.
 *
 * @requires eightBitRandomNumber.
 * @requires randomPseudoProbability.
 *
 * @returns void
 */
function randomFillRGBA() {
    fill(eightBitRandomNumber(),eightBitRandomNumber(),eightBitRandomNumber(), randomPseudoProbability(2));
}

/**
 * Creates a "brush" of a specific size and shape.
 *
 * @description Creates a "brush" with a specific size and shape.
 *
 * @returns void
 */
function brush( brushValues = randomBrushValues() ) {
    console.log(brushValues);
    if ( brushValues.shape === 'ellipse'){
        ellipse(mouseX, mouseY, brushValues.width, brushValues.height);
    } else {
        rect(mouseX - (brushValues.width/2), mouseY - (brushValues.height/2), brushValues.width, brushValues.height);
    }
}

/**
 * Changes the "brush" to a random size and shape.
 *
 * @description Changes the "brush" to a random size between 30 and 450 pixels and it's shape between circle or rectangle.
 *
 * @requires randomNumber.
 * @requires randomPseudoProbability.
 *
 * @returns void
 */
function randomBrushValues() {
    let brushValues = {
    // a random shape. 0 for ellipse, 1 for rect (rectangle).
        shape: randomNumber() === 0 ? 'ellipse': 'rect',
        // a random width between 30-450
        width: randomNumber(30, 450),
        // a random height between 30-450
        height: randomNumber(30, 450)
    };
    return brushValues;
}

/**
 * Returns a random integer between a range (defaults 0-1).
 *
 * @description Returns a random integer between a range of a min (defaults to 0) to a max number (defaults to 2).
 *
 * @returns int A random integer between a range.
 */
function randomNumber(min = 0, max = 2) {
    if(min >= max) {
        return max;
    }

    return Math.floor(Math.random() * (max - min) + min);
}
