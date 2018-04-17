let ship; // create variable in order to make new instance
let enemie = []; //enemie array 
let lasers = []; // lasers array
// executes when program begins
// variables must be declared outside set up function
function setup() {
  // create canvas must be first statement
  let canvas = createCanvas(600, 650);
  canvas.parent('sketch-container'); // container for canvas
  ship = new Ship();// new instance of ship
  //laser = new Laser(width/2, height/2);// new instance of laser
  for (var i = 0; i < 6; i++) {      // loops enemies array for more enemies
    enemie[i] = new Enemie(i*80+80, 60);// x and y expression
   }
}
// statements in draw() are executed until 
// program is stopped. Each statement is executed
// in sequence after the last line is read the
// first line is executed again.
function draw() {
  background(51); // background color for canvas
  ship.show(); // makes ship object appear on canvas
  for (var i = 0; i < lasers.length; i++) { // loop show and move for multiple lasers
      lasers[i].show();// show laser function
      lasers[i].move();// move laser function
    }
  for (var i = 0; i < enemie.length; i++) { // loop enemie show aswell
      enemie[i].show();
    }
}



// event that is triggered whenever a key is pressed
function keyPressed() {
  if(key === ' ') {
    var laser = new Laser(ship.x, height);// where the laser starts (from ships x location, height bottom of canvas)
    lasers.push(laser);
  }
  if(keyCode === RIGHT_ARROW) {
    ship.move(1);// positive moves right
  } else if (keyCode === LEFT_ARROW) {
    ship.move(-1);// negative moves left
  }
}
