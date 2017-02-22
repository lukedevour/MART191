var ellipseX = 0;

// setup
function setup() {
  createCanvas(600, 500);
}

function draw() {
// background
background(0);
// ellipse
ellipse(ellipseX, 200, 80, 80);
// lateral movement of big ellipse
ellipseX = ellipseX + 1;
// movement of small ellipses with mouse
var x1 = map(mouseX, 0, width, 25, 75);
ellipse(mouseY, 25, 25, 25);
var x2 = map(mouseX, 0, height, 0, 100);

}
