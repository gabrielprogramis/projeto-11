var sea;
var seaImage; 
var navio;


function preload() {
  seaImage = loadImage("sea.png");
  navigation =loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-1.png")
}

function setup() {
  createCanvas(800, 600)

  sea = createSprite(50,180,20,50);
  sea.addImage (seaImage);
  sea.scale = 0.3
    
  navio = createSprite(350,200,50,50);
  navio.addAnimation("corendo",navigation);
  navio.scale = 0.3
  
}

function draw() {
  background("150");
  drawSprites();

}
