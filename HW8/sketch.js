var Blarb = [];


function setup() {
    createCanvas(800, 800);


    for (var i = 0; i < 500; i++) {
        Blarb[i] = new Blarb();
    }



}


function draw() {

    for (var i = 0; i < 500; i++) {
        Blarb[i].display();
        Blarb[i].move();

    }

}
