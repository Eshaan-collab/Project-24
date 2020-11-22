class Ball{
    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius,{restitution:0.3,isStatic:false,friction:0.3,density:1.5});
        this.raduis=radius;
        
        World.add(world,this.body);
    }
    display(){
        fill("red");
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}
