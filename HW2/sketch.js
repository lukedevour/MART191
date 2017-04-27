function setup() {
    // Setup basics
    createCanvas(500,500);
    background(0,132,147);

    // Body
    push();
    translate(250,250);
    strokeWeight(15);
    ellipseMode(CENTER);
    fill(187, 255, 19);
    ellipse(0, 0, 200, 300);
    pop();

    // Eyeball
    push();
    translate(250, 250);
    strokeWeight(15);
    ellipseMode(CENTER);
    fill(255, 255, 255);
    ellipse(0, 0, 100, 150);
    pop();

    // Mouth?
    push();
    translate(250, 250);
    strokeWeight(10);
    fill(222, 29, 42);
    triangle(-40, 160, 0, 20, 40, 160);
    pop();

    //NAME
    push();
    textAlign(CENTER);
    textSize(20);
    textFont("Serif");
    text("Luke's Eyeball Monster", 250, 30);
    pop();


}
    // Pupil
function draw() {
    fill(0, 0, 0);
    stroke(0, 255, 0);
    ellipse(250,250,100,30);


}
