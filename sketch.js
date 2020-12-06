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
	fill(255, 255, 255);

}

/**
 * Draws to the canvas at each frame.
 *
 * @returns void
 */
function draw()
{
    background(0, 0, 0);
    ellipse(mouseX, mouseY, 100, 100);
}

/**
 * Triggered when a mouse button is pressed.
 *
 * @returns void
 */
function mousePressed(){
    randomFillRGBA();
}

/**
 * Triggered when a keyboard key is pressed.
 *
 * @returns void
 */
function keyPressed(){
    fill(255, 255, 255);
}

/**
 * Return an eight bit random number from 0-255.
 *
 * @requires randomNumber
 *
 * @returns int a random number from 0-255.
 */
function eightBitRandomNumber() {
    return randomNumber(255,0);
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
    let number = randomNumber(100,0) / 100;
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
 * Returns a random integer between a range (defaults 0-1).
 *
 * @description Returns a random integer between a range of a min (defaults to 0) to a max number (defaults to 1).
 *
 * @returns int A random integer between a range.
 */
function randomNumber(max = 1, min = 0) {
    if(min >= max) {
        return max;
    }

    return Math.floor(Math.random() * (max - min) + min);
}
