var hr
var min
var sec
var hrAngle, minAngle, secAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
  
}

function draw() {
  background(0)

  translate(200,200)
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();

  secAngle = map(sec,0,60,0,360);
  minAngle = map(min ,0,60,0,360);
  
  hrAngle = map(hr % 12,0,12,0,360);


  stroke(255)
  arc(0,0,260,260,0,360)
  //seconds
  push()
  rotate(secAngle)
  stroke(0,0,255)
  strokeWeight(4);
  line(0,0,100,0)
  pop()

  //min
  push()
  rotate(minAngle)
  stroke(0,255,0)
  strokeWeight(5);
  line(0,0,75,0)
  pop()

  //hr
  push()
  rotate(hrAngle)
  stroke(255,0,0)
  strokeWeight(7);
  line(0,0,60,0)
  pop()

 

  



 
}