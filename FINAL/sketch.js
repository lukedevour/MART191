function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
};

function draw() {
    //Varies ellipse location
    spotX = random(0, width);
    spotY = random(0, height);

    //Ellipses
    strokeWeight(7);
    fill(color.r, color.g, color.b, 50);
    ellipse(spotX, spotY, 1500, 1100);

    //Mouse target
    fill(255);
    ellipse(mouseX, mouseY, 160, 160);
    ellipse(mouseX, mouseY, 140, 140);
    ellipse(mouseX, mouseY, 120, 120);
    ellipse(mouseX, mouseY, 100, 100);
    ellipse(mouseX, mouseY, 80, 80);
    ellipse(mouseX, mouseY, 60, 60);
    ellipse(mouseX, mouseY, 40, 40);
    ellipse(mouseX, mouseY, 20, 20);

    //Varies color
    color.r = random(255);
    color.g = random(18, 79);
    color.b = random(400);

    //Text stuff
    push();
    textAlign(CENTER);
    textSize(100);
    textFont("Georgia");
    text("EPILEPSY INDUCER", 700, 250);
    pop();

};
