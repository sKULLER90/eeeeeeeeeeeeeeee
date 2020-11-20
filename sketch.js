
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1400, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(700,100,400,50)

	bob1 = new Bob(400,600,50)

	rope = new Rope(bob1.body,roof.body,-bobDiameter*2, 0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  
  roof.display();

  bob1.display();

  rope.display();

  drawSprites();
 
}



