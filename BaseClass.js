class BaseClass{
    constructor(x,y,w,h){   
        var Order2 = {
        restitution:1
      }
      
     this.body = Bodies.rectangle(x,y,w,h,Order2);
      World.add(world,this.body)
      this.width = w
      this.height = h
     
        this.img = loadImage('sprites/base.png');
    }

       display(){
        imageMode(CENTER)
        image(this.img,this.body.position.x, this.body.position.y,this.width,this.height);
       
        

    }
    
}