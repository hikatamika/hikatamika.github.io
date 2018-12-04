function setup() {
  createCanvas(640, 480);
  smooth();
}

function draw() {
  stroke(0,255,255);
  fill(255,255,0);
  ellipse(320, 240, 380, 480);
  fill(255,0,255);
  quad(320,70,470,230,320,370,170,230);
  fill(255);
  rect(200,100,240,240);
  fill(255,0,255);
  ellipse(320, 415, 50, 50);
  fill(255,0,255);
  ellipse(240, 385, 50, 50);
  fill(255,0,255);
  ellipse(400, 385, 50, 50);
}