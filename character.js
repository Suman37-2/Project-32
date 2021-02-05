class Character{
    constructor(x,y,width,height){
      var op={
        isStatic:false  
      }  
      this.character=Bodies.rectangle(x,y,width,height,op);
      this.w=width;
      this.h=height;
      this.image=loadImage("villager.jpg");
      World.add(myWorld,this.character);
    }
   
    display(){
      var post=this.character.position;
      imageMode(CENTER);
      image(this.image,post.x,post.y,this.w,this.h);
    }
   }