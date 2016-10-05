var img; //Declares variable 

function setup() {
  createCanvas(400, 500);
  img = loadImage("assets/penguin.jpg"); //Loads image
}

function draw() {
  //Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  //Controls the size of the image -- in this case, makes it half sized 
  image(img, 0, height/2, img.width/2, img.height/2)
  
}