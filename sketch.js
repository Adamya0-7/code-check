
function setup() {
  createCanvas(800,400);
  engine = Matter.Engine.create();
  world = engine.world;
  box1 = new Box(700,200,20,300,0);
  box2 = new Box(650,250,20,220,0);
  box3 = new Box(100,200,20,300,0);
  box4 = new Box(400,50,600,20,0);
  box5 = new Box(610,350,200,20,0);
  box6 = new Box(680,80,50,5,180);
  box7 = new Box(190,350,200,20,0);
  lever1 = new lever(310,350,100,10);
  lever2 = new lever(500,350,100,10);

  slingshot1 = new Slingshot(lever1,{x:310, y: 350})
  slingshot2 = new Slingshot(lever2,{x:500, y: 350})

  ball1 = new Ball(680,200,12);
  

}

function draw() {
  background(255,255,255);  
  Matter.Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
 lever1.display();
  lever2.display();

  ball1.display();

  drawSprites();
}

function keyPressed() {
  if(keyCode == 32) {
    console.log("This works");
    Matter.Body.setVelocity(ball1.body,{x:2, y:-30});
  }
}