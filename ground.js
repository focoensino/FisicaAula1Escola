class Ground {
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h,{isStatic:true})
        World.add(terra,this.body)
        this.w = w
        this.h = h
    }


    show(){
        var pos = this.body.position
        fill(127)
       
        stroke(255)
        rect(pos.x,pos.y,this.w,this.h)
        
        
    }
}