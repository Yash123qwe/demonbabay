class launcher {
constructor(bodyA,pointB) {
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness : 0.001,
        length : 10
    }
    this.childlauncher = Constraint.create(options)
    this.pointB = pointB
   World.add(world,this.childlauncher)
}
fly()
	{
		this.childlauncher.bodyA=null;
	}
    attach(stonebody){
        this.childlauncher.bodyA=stonebody
    }
display(){
    //line(x1,y1,x2,y2)
    if(this.childlauncher.bodyA){
    var pointA = this.childlauncher.bodyA.position
    var pointB = this.pointB
    strokeWeight(5)
    line(pointA.x , pointA.y,pointB.x , pointB.y )
    }
}
}