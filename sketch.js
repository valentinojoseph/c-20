var fixedrect, movingrect;


function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "red";
  movingrect = createSprite(60, 300, 50, 50);
  movingrect.shapeColor = "red";
}

function draw() {
  background("black");  
  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  
  
  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
    && fixedrect.x - movingrect.x  < fixedrect.width/2 + movingrect.width/2
    && movingrect.y - fixedrect.y < fixedrect.width/2 + movingrect.width/2
    && fixedrect.y - movingrect.y  < fixedrect.width/2 + movingrect.width/2
    ){

    movingrect.shapeColor = "blue";
    fixedrect.shapeColor = "blue";
  }
  else {
    movingrect.shapeColor = "yellow";
    fixedrect.shapeColor = "yellow";
  }
  
  //console.log(movingrect.x - fixedrect.x);

  drawSprites();
}   