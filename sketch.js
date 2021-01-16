function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  rect(0,0,50,50);
  rect(0,100,50,50)
  drawSprites();
}