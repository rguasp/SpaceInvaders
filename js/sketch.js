let ship; // create variable in order to make new instance
let alien = []; // alien array
// executes when program begins
// variables must be declared outside set up function
function setup() {
  // create canvas must be first statement
  createCanvas(600, 400);
  ship = new Ship();// new instance of ship
  for (var i = 0; i < 5; i++) {
    alien[i] = new Alien();
  }
}
// statements in draw() are executed until 
// program is stopped. Each statement is executed
// in sequence after the last line is read the
// first line is executed again.
function draw() {
  background(51); // background color
  ship.show(); // makes ship object appear on canvas
  alien.show();
}
// event that is triggered whenever a key is pressed
function keyPressed() {
  if(keyCode === RIGHT_ARROW) {
    ship.move(1);// positive moves right
  } else if (keyCode === LEFT_ARROW) {
    ship.move(-1);// negative moves left
  }
}