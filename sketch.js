const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld,bg;

function preload(){
  bg=loadImage("bger.jpg");
}

function setup() {
 myEngine=Engine.create();
 myWorld=myEngine.world;
  createCanvas(1250,550);
  d1=new Dirt(50,520,100,100);
  d2=new Dirt(150,520,100,100);
  d3=new Dirt(250,520,100,100);
  d4=new Dirt(350,520,100,100);
  d5=new Dirt(450,520,100,100);
  d6=new Dirt(550,520,100,100);
  d7=new Dirt(650,520,100,100);
  d8=new Dirt(750,520,100,100);
  d9=new Dirt(850,520,100,100);
  d10=new Dirt(950,520,100,100);
  d11=new Dirt(1050,520,100,100);
  d12=new Dirt(1150,520,100,100);
  d13=new Dirt(1250,520,100,100);

  steve=new Character(100,320,250,300);

}
function draw() {
  background("white");  
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();
  d8.display();
  d9.display();
  d10.display();
  d11.display();
  d12.display();
  d13.display();
  steve.display();
  drawSprites();
}
/*function keyPressed(){
if(keyCode===87){

}
}*/