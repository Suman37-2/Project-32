class Dirt{
 constructor(x,y,width,height){
   var op={
     isStatic:true  
   }  
   this.dirt=Bodies.rectangle(x,y,width,height,op);
   this.w=width;
   this.h=height;
   this.image=loadImage("Dirt_block.png");
   World.add(myWorld,this.dirt);
 }

 display(){
   var post=this.dirt.position;
   imageMode(CENTER);
   image(this.image,post.x,post.y,this.w,this.h);
 }
}