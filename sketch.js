var pac,bully1,bully2,bully3,divider,divider2;
var score=0;
var life=3;
 var gamestate="play";
function setup(){
  createCanvas(600,600);
   pac = createSprite(300,300,20,20);
   bully1 = createSprite(250,200,30,30);
   bully2= createSprite(300,200,30,30);
   bully3 = createSprite(350,200,30,30);
   bullies= [bully1,bully2,bully3]
   divider= createSprite(0,100,1200,5);
   divider2= createSprite(0,550,1200,5);
}
function draw(){
  background(0)
   drawSprites();
  console.log(gamestate);
 text("Lifes Remaining:"+life,50,50);

 if(gamestate=="play"){
  if(keyIsDown(UP_ARROW)){
    pac.y=pac.y-2;
  }
  else if(keyIsDown(DOWN_ARROW)){
    pac.y=pac.y+2;
  }
  else if(keyIsDown(RIGHT_ARROW)){
    pac.x= pac.x+2;
  }
  else if(keyIsDown(LEFT_ARROW)){
    pac.x= pac.x-2;
  }
  textSize(18)
text("Score:"+score,500,50);
 if(frameCount%30==0){
   score=score+10;
 }
 
 if(pac.isTouching(bullies)){
life= life-1;
 }
 if(life=0){
  gamestate="end";
}
}
 else if(gamestate=="end"){
   reset();
 }
}
function reset(){
  pac.x=300;
  pac.y=300;
  bully1.x=250;
  bully1.y=200;
  bully2.x=300;
  bully2.y=bully1.y;
  bully3.x=bully2.x+50;
  bully3.y=bully1.y;
  text("Click Here To Restart")
}
