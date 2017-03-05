var x = 300;
var y = 200;
var d = 50;
var state = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    if (state) {
        background(0);
    } else {
        background(255);
        textSize(30);
        textFont("Georgia");
        text("OMFG TURN THE LIGHTS OFF!", 250, 27);
    }
    ellipse(x, y, d, d);
}

function mousePressed() {
    if (dist(mouseX, mouseY, x, y) < d / 2) {
        state = !state;
    }
}
