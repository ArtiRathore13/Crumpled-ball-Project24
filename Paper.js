class Paper{
    constructor(x,y,radius){
        var options={
            density:1.2,
            isStatic:false,
            restitution:0.3,
            friction:1.0
        }

        this.body=Bodies.circle(x,y,radius/2,options);
        this.radius=radius;

        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
       //ellipseMode(RADIUS);
        fill ("blue");
        ellipse(pos.x,pos.y,this.radius);
    
    }

    

}