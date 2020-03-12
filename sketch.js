//   ////////////////////// collision code//////////////////
// var fixedRect, movingRect;

// function setup() {
//   createCanvas(1200,800);
//   fixedRect = createSprite(600, 400, 50, 80);
//   fixedRect.shapeColor = "green";
//   fixedRect.debug = true;
//   movingRect = createSprite(400,200,80,30);
//   movingRect.shapeColor = "green";
//   movingRect.debug = true;

// }

// function draw() {
//   background(0,0,0);  
//   movingRect.x = World.mouseX;
//   movingRect.y = World.mouseY;

//   console.log("hi");

//   if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
//       && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
//       && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
//       && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
//     movingRect.shapeColor = "red";
//     fixedRect.shapeColor = "red";
//   }
//   else {
//     movingRect.shapeColor = "green";
//     fixedRect.shapeColor = "green";
//   }

//   drawSprites();
// }

//////////////////// collision code///////////////////


///////////////////// bounce off code with args///////////////////
var movingRect, fixedRect;
var ob1,ob2;

function setup(){
  createCanvas(1200,800);
  fixedRect = createSprite(400,100,50,80);
  fixedRect.shapeColor = 'green';
  fixedRect.debug = true;

  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = 'green';
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;


}

function draw(){
  background('skyblue');
  

  //console.log(movingRect.x-fixedRect.x);

  bounceOff(movingRect,fixedRect);


  drawSprites();
}
///////////////////// bounce off code with args///////////////////


////////////// bounce off code/////////////////////


///////////// collision with arguements////////////
// var fixedRect, movingRect;
// var gameObject1, gameObject2, gameObject3, gameObject4;

// function setup() {
//   createCanvas(1200,800);
//   fixedRect = createSprite(600, 400, 50, 80);
//   fixedRect.shapeColor = "green";
 
//   movingRect = createSprite(800, 400,80,30);
//   movingRect.shapeColor = "green";

//   gameObject1 = createSprite(100, 100, 50, 50);
//   gameObject1.shapeColor = "green";
//   gameObject2 = createSprite(200, 100, 50, 50);
//   gameObject2.shapeColor = "green";
//   gameObject3 = createSprite(300, 100, 50, 50);
//   gameObject3.shapeColor = "green";
//   gameObject4 = createSprite(400, 100, 50, 50);
//   gameObject4.shapeColor = "green";
// }

// function draw() {
//   background(0,0,0);  
//   movingRect.x = World.mouseX;
//   movingRect.y = World.mouseY;

//   if(isTouching(movingRect, gameObject1)){
//     movingRect.shapeColor = "blue";
//     gameObject1.shapeColor = "blue";
//   }
//   else {
//     movingRect.shapeColor = "green";
//     gameObject1.shapeColor = "green";
//   }
//   drawSprites();
// }

// function isTouching(object1,object2){
//   if (object1.x - object2.x < object2.width/2 + object1.width/2
//     && object2.x - object1.x < object2.width/2 + object1.width/2
//     && object1.y - object2.y < object2.height/2 + object1.height/2
//     && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
//     return true;
//   }
//   else {
//     return false;
//   } 
// }

///////////// collision with arguements////////////





