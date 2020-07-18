//Create variables here
var dog,happyDog;
var database,foodS,foodStock;
function preload()
{
  //load images here
  dog1=loadImage("images/dogImg.png");
  dog2=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
  getStock();
	createCanvas(500,500);
  dog=createSprite(250,350,10,10);
  dog.addImage(dog1);
  dog.scale=0.2;
}


function draw() {  
    background(46,139,87);
    
    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(dog2);
     
    }
    
    
    drawSprites();
    //add styles here
    fill("black");
    textSize(12);
    text("food left: "+ foodS,30,60);
    textSize(10);
    text("Press Up arrow key to feed Doggo",30,100);
    
}
function readStock(data){
  foodS=data.val();
}
function getStock(){
  foodStock=database.ref('food');
  foodStock.on("value",readStock);

}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1;
  }

  database.ref('/').update({
    'food':x
  })
}


