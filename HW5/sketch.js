
var spot = {
  x: 100,
  y: 100
};

var spot2 = {
  x: 100,
  y: 100
};

var x;
var x = 100;
var col = {
  r:0,
  g: 255,
  b: 0
};

var y;
var y = 100;
var col = {
  r:0,
  g: 255,
  b: 0
};
var col2 = {
  r:255,
  g: 0,
  b: 0
};//

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
};

function draw() {
  spotX = random(0, width);
  spotY = random(0, height);
  fill(color.r, color.g, color.b, 100);
  ellipse(spotX, spotY, 130, 15);
  color.r = random(100, 255);
  color.g = random(22, 255)
  color.b = random(55, 210);
};
