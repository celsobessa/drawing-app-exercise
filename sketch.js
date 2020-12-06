function setup()
{
	createCanvas(600, 600);
	fill(255, 255, 255);

}

function draw()
{
	background(0, 0, 0);
	ellipse(mouseX, mouseY, 100, 100);

}

function mousePressed(){
    fill(rgbaRandom(),rgbaRandom(),rgbaRandom());
}

function keyPressed(){
    fill(255, 255, 255);
}

function rgbaRandom() {
    return randomNumber(255,0);
}
function randomNumber(max = 1, min = 0) {
  if(min >= max) {
    return max;
  }

  return Math.floor(Math.random() * (max - min) + min);
}
