
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ball;
var bin1,bin2,bin3;
function preload()
{
	
}
function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-15});
}
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(400,650,800,20);
	ball=new Ball(100,100,20);
	bin1=new Bin(300,640,20,200,PI/2);
	bin2=new Bin(450,640,100,20,-PI);
	bin3=new Bin(250,640,100,20,PI);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background(0);
  ground.display();
  ball.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
keyPressed();
 
}



