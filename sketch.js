
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var box1, box2, box3, box4, box5, box6, b7, b8, b9, b10;
var b11, b12, b13, b14, b15;
var slingS;
var hitter;

function preload()
{
	
}

function setup() {
	createCanvas(500, 600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,600,1200,20);

	box1 = new Block(300,565,50,50);
	box2 = new Block(150,565,50,50);
	box3 = new Block(250,565,50,50);
	box4 = new Block(200,565,50,50);
	box5 = new Block(350,565,50,50);
	
	box6 = new Block(175,515,50,50);
	b7 = new Block(225,515,50,50);
	b8 = new Block(275,515,50,50);
	b9 = new Block(325,515,50,50);

	b10 = new Block(200,465,50,50);
	b11 = new Block(250,465,50,50);
	b12 = new Block(300,465,50,50);

	b13 = new Block(225,415,50,50);
	b14 = new Block(275,415,50,50);

	b15 = new Block(250,365,50,50);

	hitter = new Ball(80,180,50);

	slingS = new Slingshot(hitter.body,{x:80,y:180});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(135,206,235);
  textSize(15)
  text("Drag the ball to release it and launch it to the blocks",150,50);
  text("The challenge is to hit them all and get them out",150,70);
  text("For another try at the game, press the space bar",150,90);
  text("You'll have to hit them really hard for it to count!",150,110);
  text("With each block that disappears, you get one point",150,130);
  text("Last thing, remember...have fun!",150,150);
  
  ground.display();

  fill("green")
  box1.display();
  box4.display();
  
  fill("purple");
  box2.display();
  box5.display();

  fill("blue");
  box3.display();
  
  fill("orange") 
  box6.display();
  b9.display();

  fill("pink")
  b7.display();
  b8.display();

  fill(220,20,60)
  b10.display();
  b12.display();

  fill(0,204,198)
  b11.display();

  fill(144,238,144)
  b13.display();
  b14.display();

  fill(172,73,245)
  b15.display();

  slingS.display();
  hitter.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(hitter.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingS.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingS.attach(hitter.body);
    }
}



