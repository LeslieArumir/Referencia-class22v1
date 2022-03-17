const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world; 
var ground
function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

var ground_options = {
  isStatic: true
}

var ball_options= {
  restitution:1.0
}

  ground=Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(200,100,20, ball_options);
  World.add(world,ball);
  

}

function draw() {
  background(143, 220, 231 ); 
  Engine.update(engine);
  rectMode(CENTER)
  fill(101, 62, 53 )
  rect(ground.position.x, ground.position.y,400,20);
  fill(48, 27, 132 )
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20 ,20)
  
  
}