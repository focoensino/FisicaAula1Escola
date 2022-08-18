const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var engine,world,ball,ground,rock,wall


function setup() {
  createCanvas(400,400)
  rectMode(CENTER)
   ellipseMode(RADIUS)
  
  engine = Engine.create()
  world = engine.world



var rockOptions = {
  restitution:0.85
}
rock = Bodies.circle(300,20,10,rockOptions)
World.add(world,rock)

   var ballOptions = {
    restitution:0.95,
    frictionAir:0.01
   }

   var groundOptions = {
    isStatic:true
   }
   ball =Bodies.circle(100,10,20,ballOptions)
   World.add(world,ball)
   console.log(ball)

   wall = Bodies.rectangle(300,200,200,20,groundOptions)
   World.add(world,wall)
  

ground = Bodies.rectangle(200,390,400,20,groundOptions)
World.add(world,ground)




}

function draw() 
{
 background(0)
 Engine.update(engine)

 ellipse(ball.position.x, ball.position.y,20)
 rect(ground.position.x,ground.position.y,400,20)
  
 ellipse(rock.position.x,rock.position.y,20)
 rect(wall.position.x,wall.position.y,200,10)
}

