var scAngle;
h = hour();
m = minute();
s = second();
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);

  text('Current hour:\n' + h, 5, 50);
  text('Current minute: \n' + m, 5, 50);
  text('Current second: \n' + s, 5, 50);

  angleMode(DEGREES);

  scAngle = map(sc, 0, 60, 0, 360);

  stroke(255, 0, 0);
  arc(50, 50, 80, 80, 0, PI);

  push()
  rotate(scAngle);
  stroke(255, 0, 0);
  stokeWeight(7);
  line(0, 0, 100, 0);
  

  arc(50, 50, 80, 80, 0, PI);

  drawSprites();
}