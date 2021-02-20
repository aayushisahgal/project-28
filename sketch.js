
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var tree,treeIm, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy,boyIm;
var stones;
var attach;
var cloud,cloudIm;

function preload(){
	boyIm=loadImage("images/boy.png");
  treeIm=loadImage('images/tree.png');
  cloudIm=loadImage('images/cloud.png');
  }

function setup() {
	createCanvas(1100, 650);
	engine = Engine.create();
	world = engine.world;

  groundObject=new Ground();

//	mango1=new Mango(300,460,10);
	mango2=new Mango(600,290,0.34);
	mango3=new Mango(855,325,0.35);
	mango4=new Mango(735,200,0.35);
	mango5=new Mango(710,320,0.36);
	mango6=new Mango(780,250,0.35);
	mango8=new Mango(825,170,0.33);
	mango7=new Mango(880,260,0.35);
  mango9=new Mango(940,220,0.35);
  mango10=new Mango(980,305,0.35);

	
  tree=createSprite(775,368);
  tree.addImage(treeIm);
  tree.scale=0.42;

  boy=createSprite(160,550);
  boy.addImage(boyIm);
  boy.scale=0.125;

  cloud=createSprite(300,150);
  cloud.addImage(cloudIm);
  cloud.scale=0.6;



	stones=new Stone(100,460,30);
 

	attach=new Throw(stones.body,{x:100,y:465});

	
	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background('cyan');
  
 
  

 // detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);
  detectCollision(stones,mango9);
  detectCollision(stones,mango10);

  drawSprites();
   textSize(20);
   fill('red')
  text('press space to get a second chance to play',100,250);

  
  //mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
 
  stones.display();
 

  groundObject.display();



}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
	attach.fly();
}

function detectCollision(lstones,lmango){
	

if(lstones.body.position.x -lmango.body.position.x <lmango.diameter + lstones.diameter
  &&lmango.body.position.x -lstones.body.position.x <lmango.diameter + lstones.diameter
  && lstones.body.position.y -lmango.body.position.y <lmango.diameter + lstones.diameter
  &&lmango.body.position.y -lstones.body.position.y <lmango.diameter + lstones.diameter){
    Matter.Body.setStatic(lmango.body,false);
  }

}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stones.body,{x:100,y:465});
    attach.Launch(stones.body);
  }
}




