function setup() {
    var canvas = createCanvas(720, 400);
 
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('single-neuron');
  frameRate(1)

  background(255);
}



function draw() {
    background(255);

    neuron_size = 100
   
    coor_x = width * 0.5
    coor_y = height * 0.5
    //ellipse( width*0.5 , height * 0.5, size, size  )
    neuron(coor_x, coor_y, neuron_size )
    
    baby( coor_x, coor_y,10 )
    

    

    // push();
    // translate(width * 0.2, height * 0.5);
    // rotate(frameCount / 200.0);
    // polygon(0, 0, 82, 3);
    // pop();

}

function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius;
        var sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}


function neuron (x, y, size) {
    // Soma
    ellipse( x  ,y, size*2, size*2  )
}

function baby(x, y, size) {
// Draw an arc
// This should be made random
    coor_baby = on_the_edge(x, y, neuron_size )
    ellipse( coor_baby.x, coor_baby.y, size, size )
}

function on_the_edge(x, y, r) {

    // x = x_0 + r*sin(angle)
    // y = y_0 + r*cos(angle)

    angle = random(2*PI)
    edge_x = x + r * cos(angle)
    edge_y = y + r * sin(angle)

    return {'x': edge_x, 'y': edge_y}
}