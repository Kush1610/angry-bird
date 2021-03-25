const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)
    box1 = new Box(750,300,50,50);
    box1.debug=true
    box2 = new Box(910,320,50,50);
    box1.debug=true
   // pig1 = new Pig(800,350);
    log1 = new Log(800,5,300,PI/2);
    log1.debug=true

}

function draw(){
    background(0);
    Engine.update(engine);
   // console.log(box2.body.position.x);
  //  console.log(box2.body.position.y);
    console.log(log1);
   //console.log(pig1.body.position.x)
    ground.display();
    box1.display();
    box2.display();
    //pig1.display();
    log1.display();
}