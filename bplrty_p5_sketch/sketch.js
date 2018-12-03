var angle = 0.0;;
var jitter = 0.0;;

var a = 0.0;
var s = 0.0;

var maniaH = 255;

var mixedX = 675;
var mixedY = 675;

function setup() {
  createCanvas(900, 900);
  background(0);
  colorMode(HSB, 360);
  stroke(255);
  line(0,450,width,450);
  line(450,0,450,height);
  rectMode(CENTER);
}

function draw() {
  //base
  background(0);
  stroke(360);
  line(0,450,width,450);
  line(450,0,450,height);
  //euthymia sect
  textSize(32);
  fill(360);
  text("balance", 165, 425); 
  //mania sect
  textSize(32);
  fill(360);
  text("mania", 630, 425); 
  //depression sect
  textSize(32);
  fill(360);
  text("depression", 140, 875); 
  //mixed sect
  textSize(32);
  fill(360);
  text("mixed state", 595, 875); 
  
  //euthymic sq
  if ((mouseX < 450) && (mouseX > 0) && (mouseY < 450)  && (mouseY > 0)) { 
    fill(360);
    rect(225,225,100,100);
  } else { 
  } 
  //manic sq
  if ((mouseX > 450) && (mouseY < 450)) { 
    fill(maniaH,360,360);
    if (second() % 1 == 0) {  
      jitter = 0.2;
    }
    if (second() % 0.125 == 0) {  
      maniaH = maniaH + 1;
    }
    if (maniaH >= 360) {  
      maniaH = 0;
    }
    angle = angle + jitter;
    var c = cos(angle);
    translate(width*0.75, height/4);
    rotate(c);
    rect(0,0,175,175);
  } else { 
  } 
  //depressed sq
  if ((mouseX < 450) && (mouseY > 450)) { 
    
    a = a + 0.04;
    s = cos(a)*2;
    
    translate(width/4, height*0.75);
    scale(1,s); 
    fill(51);
    
    fill(270,180,216);
    rect(0,0,175,75);
  } else { 
  } 
  //mixed sq
  if ((mouseX > 450) && (mouseY > 450)) { 
    fill(0,360,360);
    
  if (mixedX > 800) {
      mixedX += random(-30, 0);
    } else { mixedX += random(-10, 15);
    }  
    
  if (mixedY > 800) {
      mixedY += random(-30, 0);
    } else { mixedY += random(-15, 15);
    }
  
  if (mixedX < 550) {
      mixedX += random(0,30);
    } else { mixedX += random(-15, 15);
    }  
    
  if (mixedY < 550) {
      mixedY += random(0,30);
    } else { mixedY += random(-15, 15);
    }
    
    rect(mixedX,mixedY,100,100);
  } else { 
  } 
}