var x;
var y;
var c;

function setup() {
  x = 0;
  y = 0;
}

function draw() {
  c = createCanvas(windowWidth, windowHeight);
  background('#0E293D');
  translate(width / 2, height / 2);
 ellipse(x, y, 175, 175);	
rect(x, y,175, 175); 

}