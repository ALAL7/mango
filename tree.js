class Tree{
    constructor(){
        var options = {
            isStatic : true
            
        }
        this.body = Bodies.rectangle(500,400,20,20,options);
        this.image = loadImage("Plucking mangoes/tree.png");
        World.add(world,this.body);
    };
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,300,300);
    }
}