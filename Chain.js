class Chain{
    constructor(car1,car2){
        var information = {
            bodyA:car1,
            pointB:car2,
            stiffness:0.05,
            length:20
        }
this.body = Constraint.create(information)
World.add(world,this.body)
this.image = loadImage("sprites/sling1 (1).png")
this.image1 = loadImage("sprites/sling2.png")

    }
    display(){
        image (this.image,215,210)
        image (this.image1,190,160)
        if( this.body.bodyA){
            stroke ("brown")
            strokeWeight(3)
           line(this.body.bodyA.position.x-16,this.body.bodyA.position.y,this.body.pointB.x-20,this.body.pointB.y)
           line(this.body.bodyA.position.x+20,this.body.bodyA.position.y,this.body.pointB.x+30,this.body.pointB.y)
               }
        }

    disconnectBird(){
        this.body.bodyA = null

    }

    attachBird(seat){
        this.body.bodyA = seat
    }
}
