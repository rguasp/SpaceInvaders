function Laser(x, y) {
  this.x = x;// starting x point
  this.y = y; // starting y point

  // function that shows laser
  this.show = function() {
    noStroke();
    fill(0, 191, 255);// color of laser
    ellipse(this.x, this.y, 16, 16);// shape of laser
  }
  // laser movement
  this.move = function() {
    this.y = this.y - 5; // moves up
  }
}