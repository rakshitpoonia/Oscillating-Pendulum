const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bar,ball,ground,state;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }


  var bar_options={
    isStatic: true
  }

  ground = Bodies.rectangle(200,330,400,20,ground_options)
  World.add(world,ground);

bar = Bodies.rectangle(200,100,200,20,bar_options);
World.add(world,bar);

var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(220,200,40,ball_options);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : bar,
  stiffness: 0.004,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);

fill("White");
}


function draw() {
  background(0); 
  Engine.update(engine);


  text("Press Space bar to set the pendulum using mouse",10,20);
  text("Press Enter to release the pendulum",100,50);

  fill ("blue");
rectMode(CENTER);
rect(bar.position.x,bar.position.y,200,20);

fill(0);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);


fill("red");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(8);
stroke("white");
line(ball.position.x,ball.position.y,bar.position.x,bar.position.y)


if(keyCode===32){
  state="attached";
  ball.position.y = mouseY;
  ball.position.x = mouseX;
  }

  if (state=="attached"){
    console.log("ok");
  }
  
  else if (keyCode === ENTER){
  state="detached";
  ball.position.x=mouseX-10 ;
  }
  
}