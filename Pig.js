class Pig extends BaseClass {
  constructor(x, y,){
    super(x,y,50,50);
    this.visible = 255;
    this.image = loadImage("sprites/enemy.png");
  }
   display(){
       
       if(this.body.speed<3){
           super.display();
       }else{
         World.remove(world,this.body);
         this.visible = this.visible -5
         push();
         tint(255,this.visible)
         image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
       }
       //console.log(this.body.speed)


   }
};