function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {

  background(220);

  let h = hour();
  // text('Current hour:\n' + h, 5, 50);
  let m = minute();
  // text('Current minute: \n' + m, 100, 50);
  console.log(m)
  // console.log(m)
  let s = second();
  // text('Current second: \n' + s, 200, 50);
  
  noStroke();

  fill('#8A89C0');
  arc(400, 300, 450, 450, -PI/2, h/24 * TWO_PI - HALF_PI );
  fill('#7BCDBA');
  arc(400, 300, 300, 300, -PI/2, m/60 * TWO_PI - HALF_PI);
  fill('#FBD1A2');
  arc(400, 300, 150, 150, -PI/2, s/60 * TWO_PI - HALF_PI);
}

