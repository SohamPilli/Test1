var box
var astro
function preload(){
astro = loadImage("astronaut.jpeg")
}
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,50,50)
  box.addImage(astro)
  box.scale = 0.1
}

function draw() 
{
  background(30);
if(keyDown(RIGHT_ARROW)){
  box.position.x = box.position.x + 2
}
if(keyDown(LEFT_ARROW)){
  box.position.x = box.position.x - 2
}
if(keyDown(UP_ARROW)){
box.position.y = box.position.y - 2
}
if(keyDown(DOWN_ARROW)){
  box.position.y = box.position.y + 2
}


drawSprites()
}




