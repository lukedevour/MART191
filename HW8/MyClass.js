function Blarb() {



    this.x = random(0, width);
    this.y = random(0, width);
    this.size = random(40, 70);
    this.r = random(0, 255);
    this.g = random(255, 0);
    this.b = random(0, 255);
    this.speed = random(0.5, 3);


    this.display = function() {
        fill(this.r, this.g, this.b);
        strokeWeight(5);
        ellipse(this.x, this.y, this.size, this.size);

    };


    this.move = function() {

        this.y = this.y - this.speed;
        if (this.y <= 0 - this.size * 2) {
            this.y = height + this.size * 2;


        }



    };
}
