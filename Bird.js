class Bird extends BaseClass{

    constructor(x,y){   
        super(x,y,50,50)
        this.img = loadImage('sprites/bird.png');
        this.img1 = loadImage('sprites/smoke.png');
        this.drum = []
      }
    
       display(){
        super.display()
        if(this.body.position.x>300&&this.body.speed>10){
            var bucket = [this.body.position.x,this.body.position.y]
            this.drum.push(bucket)
            
        }
       
        
        for(var a=0  ;  a<this.drum.length    ; a=a+1    ){
            image(this.img1,this.drum[a][0],this.drum[a][1])

        }



    }
}
