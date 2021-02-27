class Ball{
    constructor(x,y,r){
        var options={
            density: 1.0,
            restituition: 0.5,
            friction: 0.7,
            isStatic: false
            
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body= Bodies.circle(this.x, this.y, this.r , options)
        World.add(world, this.body);
    }

    display(){
        fill(595,121,0)
        push();
        translate(this.body.position.x,this.body.position.y);
        ellipse(0,0,this.r);
        pop();
    }

}
