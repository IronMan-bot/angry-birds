class Ground{
    constructor(){   
        var aryansOrder = {
            isStatic:true
          }
          
          
          ground = Bodies.rectangle(600,580,1200,20,aryansOrder);
          World.add(world,ground)
      }
      display(){
        rectMode(CENTER)
        rect(ground.position.x,ground.position.y,1200,20)
      }
}