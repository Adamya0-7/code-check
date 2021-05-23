class Ball{
    constructor(x,y,radius){
        var options = {restitution: 0.5}
        this.body = Matter.Bodies.circle(x,y,radius,options);
        Matter.World.add(world, this.body)
        this.radius = radius;
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius);
    }
}