class Block{
    constructor(x,y,width,height){
        var options={
            isStatic: false,
            restitution:0.4,
            density:1.0,
            friction:1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world, this.body)
    }
    display(){
        console.log(this.body.speed);
        if(this.body.speed<20){
          var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        }
        else{
          World.remove(world,this.body); 
          push();
          this.visibility=this.visibility-5;
          pop();
        }
             }
        };