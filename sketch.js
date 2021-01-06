
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 
var pendulumObject1,pendulumObject2,pendulumObject3,pendulumObject4,pendulumObject5
var rope1,rope2,rope3, rope4,rope5; 
var world;
function preload()
{
	
}

function setup() {
	canvas=createCanvas(windowWidth/2,windowHeight/1.5);


	engine = Engine.create();
	world = engine.world;

let canvasmouse=Mouse.create(canvas.elt)
canvasmouse.pixelRatio=pixelDensity()
	let options={
		mouse:canvasmouse
	}
	mConstraint=MouseConstraint.create(engine,options)
	World.add(world,mConstraint)
	Engine.run(engine);
	
}


function draw() { 
	rectMode(CENTER); 
	background(230); 
	
}
function mouseDragged() { 
	matter.body.setPosition(pendulumObject1.body,{x:mouseX,y:mouseY})
 } 
 