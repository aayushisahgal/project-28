class Stone{
    constructor(x,y,diameter){

        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2

        }

        this.body=Bodies.circle(x,y,diameter,options)
        this.diameter=40;
        //this.height=10;
        this.image=loadImage('images/stone.png');  
         World.add(world,this.body);
         
         
    }

    display(){
        //var pos=this.body.position;
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,40,30);
      
        pop();
    }
}