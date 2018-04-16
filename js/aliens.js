function Alien() {
  this.x = width/2 // starting x point
  this.y = 50; // starting y point
  // function that shows alien
  this.show = function() {
    fill(255, 0, 200);// color of alien
    ellipse(this.x, this.y, 60, 60);// shape of alien
  }

}