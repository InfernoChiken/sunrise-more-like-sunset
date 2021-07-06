const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bg, bgImg;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


}

function draw(){
    if(bg){
    background(bg);
    }
    // add condition to check if any background image is there to add
    

    Engine.update(engine);

    // write code to display time in correct format here

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    // write code slice the datetime
    hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour >= 1 && hour < 3){
        bgImg = "sunrise1.png"
    }else if(hour >= 3 && hour < 5){
        bgImg = "sunrise2.png"
    }else if(hour >= 5 && hour < 7){
        bgImg = "sunrise3.png";
    }else if(hour >= 7 && hour < 9){
        bgImg = "sunrise4.png";
    }else if(hour >= 9 && hour < 11){
        bgImg = "sunrise5.png";
    }else if(hour >= 11 && hour < 13){
        bgImg = "sunrise6.png";
    }else if(hour >= 13 && hour < 15){
        bgImg = "sunset7.png";
    }else if(hour >= 15 && hour < 17){
        bgImg = "sunset8.png";
    }else if(hour >= 17 && hour < 19){
        bgImg = "sunset9.png";
    }else if(hour >= 19 && hour < 21){
        bgImg = "sunset10.png";
    }else if(hour >= 21 && hour < 23){
        bgImg = "sunset11.png";
    }else{
        bgImg = "sunset12.png";
    }

    //load the image in backgroundImg variable here
    bg = loadImage(bgImg);
}
