class Bin{
    constructor(x,y,width,height,angle){
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width=width;
        this.height=height;
        Matter.Body.setAngle(this.body,angle);
        
        World.add(world,this.body);
    }
    display(){
        fill("white");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}
