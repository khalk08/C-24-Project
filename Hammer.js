class Hammer{
    constructor(x,y) {
       var options = {
           'density': 2,
           'friction': 1.0,
           'restituition': 0.5,
       }
        this.body = Bodies.rectangle(x, y, 50, 60, options);
        this.width = 140;
        this.height = 50;
        World.add(world, this.body)  
    } 

        display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y - mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWight(3);
        stroke(white);
        fill("orange");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height,);
        pop();
        }
      }       
        
        
    
