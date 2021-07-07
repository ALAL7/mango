
class Stone{
    constructor(){
        var options = {
            restitution:0.4,
            isStatic: false,
            density: 1
            
        }
        this.body = Bodies.rectangle(500,400,20,20,options);
        this.image = loadImage("Plucking mangoes/stone.png");
        World.add(world,this.body);
    };
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
        
    }
}