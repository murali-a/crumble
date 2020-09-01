class Paper {
    var options  =
     {
    isStatic:false,
    restituon:0.3,
    friction:0.5,
    densiti:1.2}
Matter.Bodies.circle(x,y,2,[options],5)
}
function keypressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
    }
}