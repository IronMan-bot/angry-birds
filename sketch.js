const Engine = Matter.Engine
const World =  Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world
var ground
var gameState=0

function preload() {
setbackground()

}
function setup() {
createCanvas(1200,600);
engine = Engine.create(); 
world = engine.world;


ground1 = new Ground()
box1 = new Box( 850,480,100,100)
box2 = new Box(1050,480,100,100)
box3 = new Box(850,350,100,100)
box4 = new Box(1050,350,100,100)
box5 = new Box(204,400,250,270)
bird = new Bird(200,200)
log = new Log(950,470,400)
log1 = new Log(950,300,400)
pig1 = new Pig(947,550)
pig2 = new Pig(946,445)
chain1 = new Chain(bird.body,{x:200 ,y:150 })

}

function draw() {
background(0);  
image(dg,0,0,1200,600)
Engine.update(engine);
text(mouseX+"   "+mouseY,50,50)
ground1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
bird.display();
log.display();
log1.display();
pig1.display();
pig2.display();
chain1.display();


}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x: mouseX, y: mouseY })
    gameState = 1
}

function mouseReleased(){
    chain1.disconnectBird()   
    

}

function KeyPressed(){
if(keyCode == 32){
   chain1.attachbird(bird.body)
}
}

function setbackground(){
    var d = new Date();
    var n = d.getHours();
    if(n>5&&n<19){
        dg= loadImage("sprites/bg.png")
      
    }
    else{
        dg= loadImage("sprites/bg2.jpg")  
    }
}                                                                                                                                            