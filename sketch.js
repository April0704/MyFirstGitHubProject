
function setup() {
  createCanvas(500,500);
  box=createSprite(250,250,50,50);
  box.shapeColor="#55D2B9";
edges=createEdgeSprites()
}

function draw() 
{
  background(30);
if(keyDown(RIGHT_ARROW)){
  box.x=box.x+2
}

if(keyDown(LEFT_ARROW)){
  box.x=box.x-2
}

if(keyDown(UP_ARROW)){
box.y=box.y-2
}
if(keyDown(DOWN_ARROW)){
  box.y=box.y+2
}
box.bounceOff(edges)
  drawSprites()
}




