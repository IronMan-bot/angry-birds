class Pig extends BaseClass{
    constructor(x,y,w,h){   
     
      super(x,y,50,50)
      this.img = loadImage('sprites/enemy.png'); 
      
     
    }

    display(){
      if(this.body.speed<3){
        super.display()
      }
      else{
        World.remove(world,this.body)
      }
      
  }
}
    
  
  