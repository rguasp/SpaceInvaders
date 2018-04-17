function Enemie(x, y) {
  this.x = x;// starting x point
  this.y = y; // starting y point

  // function that shows alien
  this.show = function() {
    fill(255, 0, 300);// color of alien
    ellipse(this.x, this.y, 60, 60);// shape of alien
  }

}