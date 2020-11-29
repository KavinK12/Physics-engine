const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
 function setup(){
   createCanvas(600,600);

   myEngine = Engine.create(); //myEngine.world
   myWorld = myEngine.world;

 }

 function draw(){
   background(0);

   Engine.update(myEngine);
 }