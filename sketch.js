var wall, thickness;
var speed, bullet, weight;  

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,50,50);
  thickness=random(22, 83);
  wall=createSprite(900,200,thickness, height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX = speed;
  bullet.shapeColor = "purple";
  
}

function draw()
 {

  background(255,255,255);  
  if ( detecthecollision(bullet, wall)) 
{
    damage=(0.5)*weight*speed*speed/(thickness*thickness*thickness) 
  if (damage <10) 
    {
  wall.shapeColor=color(0,230,0);  
  }
  if (damage > 10) 
   {
  wall.shapeColor=color(255,0,0);
  }  
}
  drawSprites();

  }

  function detecthecollision (newBullet, newWall) {
    if (newWall.x-newBullet.x<newBullet.width/2+newWall.width/2)          {
    return true;
    }
    else {
    return false;
    }
    

  }