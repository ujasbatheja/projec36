var gameState = 0;
var dog, dogImage;
var food, foodImage;
var database, position;
var foodStock, lastFed;
var foodStockButton, addFoodButton;

function preload(){     
  dogImage = loadImage("images/dogimg1.png");
  //foodImag = loadImage("images/Milk.png");
}

function setup() {
  createCanvas(500,500);
  dog = createSprite(250,250,5,5);
  dog.scale = 0.3;
  database = firebase.database();

  foodObj = new Food();
  
  foodStockRef = database.ref("food/qty");
  foodStockRef.on("value",function(data){ 
  foodStock = data.val();})

  feedButton = createButton("Feed the dog");
  feedButton.position(200,95);
  feedButton.mousePressed(100,50);

  addFoodButton = createButton("Add Food")
  addFoodButton.position(300,95);
  addFoodButton.mousePressed(100,100);
}

function draw() {  
  background(46,139,87);

  feedButton.mousePressed(function(){
    text("Feed the dog"+foodStock,200,100);
  })

  addFoodButton.mousePressed(function(){
    text("Increase the food"+foodStock,200,100);
  })
  
   dog.addImage("dogImage",dogImage);

   foodObj.display();
   //milk.display();

  drawSprites();
}
