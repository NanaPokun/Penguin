var xPos = 27;
var yPos = 28;
var starSize = 6;

draw = function() {
    background(29, 40, 115);
    
    noStroke();
    //shooting star
    fill(242, 221, 58);
    ellipse(xPos, yPos, starSize, starSize+1);
    ellipse(xPos*12, yPos+150, starSize, starSize+1);
    
    //sky and stars
    fill(217, 191, 191); //moon
    ellipse(356, 50, 111, 104);
    //stars
    fill(217, 227, 154);
    ellipse(237, 19, 3, 3);
    ellipse(200, 40, 3, 3);
    ellipse(136, 15, 3, 3);
    ellipse(237, 75, 3, 3);
    ellipse(87, 38, 3, 3);
    ellipse(237, 124, 3, 3);
    ellipse(158, 81, 3, 3);
    ellipse(288, 105, 3, 3);
    ellipse(26, 19, 3, 3);
    ellipse(102, 105, 3, 3);
    ellipse(43, 73, 3, 3);
    
    
    //skyscrapers
    
    fill(56, 42, 37);
    rect(305, 142, 90, 238, 0); //building1
    rect(221, 217, 90, 166, 0); //building2
    //scraper1 windos
    fill(143, 127, 127); 
    rect(279, 232, 21, 21, 0);
    rect(279, 298, 21, 21, 0);
    rect(234, 232, 21, 21, 0);
    rect(235, 298, 21, 21, 0);
    //scraper2 windos
    rect(317, 166, 21, 21, 0);
    rect(319, 298, 21, 21, 0);
    rect(364, 166, 21, 21, 0);
    rect(369, 298, 21, 21, 0);
    rect(364, 234, 21, 21, 0);
    rect(319, 234, 21, 21, 0);
    
    //door
    fill(77, 52, 52);
    rect(259, 331, 21, 39, 0);
    rect(347, 331, 21, 39, 0);
    
    //ground
    fill(38, 28, 22);
    rect(-1, 369, 407, 31, 0);
    
    yPos ++;
    xPos ++;

};
console.log();


