
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var terra,fisica

var ball,ground,right,left,topo;
var bnt1


function setup() {
createCanvas(500,500)
fisica = Engine.create()
terra = fisica.world;
ellipseMode(RADIUS)
rectMode(CENTER)

bnt1 = createImg('up.png')
bnt1.position(220,30)
bnt1.size(50,50)
bnt1.mouseClicked(vForce)

var ballOptions={
    restitution:0.95,
    frictionAir:0.01
}

ball = Bodies.circle(200,100,20,ballOptions)
World.add(terra,ball)

ground =new Ground(250,490,500,20)
right = new Ground(10,250,20,500)
left = new Ground(490,250,20,500)
topo = new Ground(250,10,500,20)

}


function draw() 
{
background(0)
Engine.update(fisica)
fill(255)
ellipse(ball.position.x,ball.position.y,20)
ground.show()
right.show()
left.show()
topo.show()

}

function vForce(){

    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
    
    
}

