class Mango{
	constructor(x,y,diameter)
	{
		var options={
			isStatic:true,
			restitution :0.5,
            friction :1.0,
			}
		
		
		this.body=Bodies.circle(x, y, diameter, options)
		this.image=loadImage("images/mango.png");
		this.diameter=20;
		World.add(world, this.body);
	}

	display()
	{
		push();
		translate(this.body.position.x,this.body.position.y);
		imageMode(CENTER);
		image(this.image, 0,0,20,60)
		pop();
 }
}