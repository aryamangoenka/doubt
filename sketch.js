var bullet,speed,weight,wall,thickness;



function setup() {
  createCanvas(1600,400);
  background(0)
  thickness=random(22,83)
  weight=random(30,52)
  speed=random(223,321)
  
bullet=createSprite(150,200,80,20)
bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)
}
  function draw() {
    if(hasCollided(bullet,wall))
    {
      bullet.velocityX=0;
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

      if(damage>10)
      {
        wall.shapeColor=color(255,0,0);
      }


      if(damage<10)
        {
          wall.shapeColor=color(0,255,0);
        }
  }
}

    
    
    
hasCollided();
    drawSprites();
   
  function hasCollided(1bullet,1wall){

    bulletRightEdge=1bullet.x + 1bullet.width;
    wallLeftEdge=1wall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true;
    }
return false;

  }
