class Slingshot{
    constructor(bodyA,ptb)
    {var options = {bodyA: bodyA, pointB: ptb, stiffness: 0.5, length: 10}
     this.body = Matter.Constraint.create(options)
     Matter.World.add(world, this.body)    
}
}
