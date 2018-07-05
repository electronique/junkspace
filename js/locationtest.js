var xcoord = [];
var ycoord = [];
var coordLimit = 2000;
var pointcolor = 255;
var glarepointcolor = 100;
var glareoffset = 10

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
function setup(){
    createCanvas(2000,2000);
    background(0);//black background
    pushcoords();//Fills arrays with random numbers
    }

function draw(){
    for(var i = 0;i<coordLimit;i++){
    debrisSwagger(xcoord[i],ycoord[i]);
    }
}

function debrisSwagger(x,y){
      
       xpos = xpos + random(-1, 1);
  // Moving up at a constant speed
  ypos = ypos - 1;
  if (ypos < 0) {
    ypos = height;
  }
  debrisEntity(x,y);

}
function debrisEntity(x,y){
    stroke(pointcolor);
    point(x,y);//drawn point. replace with image.
    stroke(glarepointcolor);
    point(x+glareoffset,y+glareoffset);
}
function pushcoords(){
    for(var i =0; i< coordLimit ;i++){
        var randomX = Math.floor(Math.random()*coordLimit);
        var randomY = Math.floor(Math.random()*coordLimit);
         xcoord.push(randomX);
         ycoord.push(randomY);
    }
}

  function success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  //function error(err) {
   // console.warn(`ERROR(${err.code}): ${err.message}`);
  //}
  navigator.geolocation.getCurrentPosition(success);//error was not working grabs with only success
  //navigator.geolocation.getCurrentPosition(success, error, options);//full call for geolocation

