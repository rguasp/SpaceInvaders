function Ship() {
  this.x = width/2 // starting point center of window
  // function that shows my ship
  this.show = function() {
    fill(255); // color to fill
    rectMode(CENTER);// draws rectangle starting from center
    rect(this.x, height-20, 20, 60);// creates rectangle
  }
  // function that moves the ship
  this.move = function(dir) {
    this.x += dir*5;// moves left and right 5 px
  }

}