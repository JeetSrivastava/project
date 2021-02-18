class Ground{
    constructor(x,y,width,height){
        var groundoption = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,groundoption)
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(pos.x,pos.y,this.width,this.height);
    }
}