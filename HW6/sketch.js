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
        spotX = random(0, width);
        spotY = random(0, height);

        //Ellipses
        noStroke();
        fill(color.r, color.g, color.b, 100);
        ellipse(spotX, spotY, 130, 15);

        //Varies color
        color.r = random(0, 255);
        color.g = random(255, 500);
        color.b = random(0, 300);

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
