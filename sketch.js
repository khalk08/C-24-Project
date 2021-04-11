
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var plane;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	var hammer = new Hammer(10,100);
	var plane = new Plane();

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("lightBlue");

  hammer.display();
  plane.display();
  
  
  drawSprites();
 
}



