//I am still having trouble figuring out global variables.

//Setup
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
};

function draw() {
    //Varies ellipse location
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

};
