const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, slingShot;
var base1, base;

function setup(){
createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    base = new Ground(390,592,300,10);
    base1 = new Ground(930,450,200,10);

   //level one
   block0 = new Box1(300,560,30,50);
   block1 = new Box1(330,560,30,50);
   block2 = new Box1(360,560,30,50);
   block3 = new Box1(390,560,30,50);
   block4 = new Box1(420,560,30,50);
   block5 = new Box1(450,560,30,50);
   block6 = new Box1(480,560,30,50);
      
   //level two
   block8 = new Box2 (330,510,30,50);
   block9 = new Box2(360,510,30,50);
   block10 = new Box2(390,510,30,50);
   block11 = new Box2 (420,510,30,50); 
   block12 = new Box2(450,510,30,50);

   
   //top
   block16 = new Box (390,410,30,50);


   //level three
   block13 = new Box3(360,460,30,50);
   block14 = new Box3(390,460,30,50);
   block15 = new Box3(420,460,30,50);

   //level1 
   block17 = new Box11(870,418,30,50);
   block18 = new Box11(900,418,30,50);
   block19 = new Box11(930,418,30,50);
   block20 = new Box11(960,418,30,50); 
   block21 = new Box11(990,418,30,50);

   //level2
   block22 = new Box12(900,367,30,50);
   block23 = new Box12(930,367,30,50);
   block24 = new Box12(960,367,30,50);

   //level25 
   block25 = new Box13(930,317,30,50);

   polygon1 = new Polygon(50,400,20);
   
   slingShot = new Slingshot(this.polygon,{x:100,y:200})



  Engine.run(engine);
}

function draw(){
    background("lightpink");
    Engine.update(engine);
    base.display();
    base1.display();
    block0.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    
    polygon1.display();
    drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Slingshot.fly();
}