var ellipseX = 0;

// setup
function setup() {
    createCanvas(600, 500);
}

function draw() {
    // background
    background(0);


    // target
    // Concentric Circles
    ellipse(ellipseX, 200, 80, 80);
    ellipse(ellipseX, 200, 70, 70);
    ellipse(ellipseX, 200, 60, 60);
    ellipse(ellipseX, 200, 50, 50);
    ellipse(ellipseX, 200, 40, 40);
    ellipse(ellipseX, 200, 30, 30);


    // lateral movement of big ellipse
    ellipseX = ellipseX + 1;

    // movement of small ellipse with mouse
    ellipse(mouseY, 25, 25, 25);

    // ellipse for mouse
    ellipse(mouseX, mouseY, 35, 35);

}
