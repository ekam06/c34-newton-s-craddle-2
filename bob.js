class Bob{

    constructor(x,y,color){
    
        var options={
    //isStatic:false,
    restitution:1,
    friction:0,
    frictionAir:0.0,
    slop:1,
    inertia:Infinity
        }
    
    this.body=Bodies.circle(x,y,20,options)
    this.r=20
    this.color=color
    this.bobDiameter=40
    
    World .add(world,this.body)
    }
    display(){
     //   if(this.chain.bodyA){
    var angle=this.body.angle
    var pos=this.body.position
    push ()
    translate (pos.x,pos.y)
    rotate (angle)
    noStroke()
    ellipseMode(RADIUS)
    fill(this.color)
    ellipse(0,0,20,20)
    pop ()
   // }
}
    
    }