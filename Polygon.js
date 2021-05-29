class Polygon {
    constructor(x,y,radius) {
  
     var options = {
     isStatic:true,
  
     'restitution':1.2,
     'friction':0.9,
     'density':1
  
     }
     
     
    this.polygon = Bodies.circle(x,y,radius,options);
    this.x=x;
    this.y=y;
    this.image=loadImage("sprites/polygon.png");
    this.radius=radius;
  
    World.add(world,this.polygon);
 }
  display(){
      push()
      rectMode(CENTER);
      imageMode(CENTER);
      image(this.image,this.polygon.position.x,this.polygon.position.y,50,50);
      strokeWeight(4);
      pop()
  }
  
  
  
  }
  