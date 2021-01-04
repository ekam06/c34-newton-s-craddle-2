
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
const Mouse=Matter.Mouse
const MouseConstraint=Matter.MouseConstraint

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5
var roof
var rope1 ,rope2,rope3,rope4,rope5
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	let canvasmouse=Mouse.create(canvas.elt)
  canvasmouse.pixelRatio=pixelDensity()
  let options={
	mouse:canvasmouse
}
mConstraint=MouseConstraint.create (engine,options)
World.add (world,mConstraint)
	bobObj1=new Bob(300,500,"red")
	bobObj2=new Bob(340,500,'red')
	bobObj3=new Bob(380,500,'red')
	bobObj4=new Bob(420,500,'red')
	bobObj5=new Bob(460,500,'red')
	Engine.run(engine);
  
	roof=new Roof(375,250,300,30)
	
	this.bobDiameter=40

	rope1= new Chain(bobObj1.body,roof.body,-bobDiameter*1.9,0)
	rope2= new Chain(bobObj2.body,roof.body,-bobDiameter*1.85+bobDiameter,0)
	rope3= new Chain(bobObj3.body,roof.body,-bobDiameter*0.85+bobDiameter,0)
	rope4= new Chain(bobObj4.body,roof.body,bobDiameter*0.1+bobDiameter,0)
	rope5= new Chain(bobObj5.body,roof.body,bobDiameter*1.1+bobDiameter,0)
}



function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(252,255,205);
    bobObj1.display()
    bobObj2.display()
	bobObj3.display()
	bobObj4.display()
	bobObj5.display()
	roof.display()
	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()
  drawSprites();
 
}
function mouseDragged(){


	Matter.Body.setPosition(bobObj1.body,{x:mouseX,y:mouseY})
}




