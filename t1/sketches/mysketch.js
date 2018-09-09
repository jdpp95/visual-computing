//PGraphics pg;

var img;

var inverted=false, grey=false;
var hist = [];

function preload()
{
	img = loadImage("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fresh-fruit-background-1530133222.jpg");
}

function setup() {
  createCanvas(700,500);
  //frameRate(60);
  image(img, 0, 0);
  //prvarln(frameRate);
}

function draw() {
  //prvarln(frameRate);
  //updatePixels();
  ellipse(80,60,10,10);
}

function greyScalePixel(mode, pos, r, g, b)
{
  if (mode == 0) pixels[pos] = color((r + g + b)/3);
  else pixels[pos] = color((max(r,g,b)+min(r,g,b))/2);
}

function invertColor()
{
  loadPixels();
  for(var i = 0; i < width*height; i++)
  {
    var r = red(pixels[i]);
    var g = green(pixels[i]);
    var b = blue(pixels[i]);
    //if (i > img.width*mouseY) greyScalePixel(0, i, r, g, b);
    //else greyScalePixel(1, i, r, g, b);
    
    pixels[i] = color(255 - r,255 - g,255 - b);
  }
  inverted = !inverted;
  updatePixels();
}

function reset()
{
  image(img, 0, 0);
  loadPixels();
  grey = inverted = false;
}

function greyScale()
{
  loadPixels();
  for(var i = 0; i < width*height; i++)
  {
    var r = red(pixels[i]);
    var g = green(pixels[i]);
    var b = blue(pixels[i]);
    //if (i > img.width*mouseY) greyScalePixel(0, i, r, g, b);
    //else greyScalePixel(1, i, r, g, b);
    
    if(!grey) pixels[i] = color((r+g+b)/3);
  }
  if(grey) loadPixels();
  grey = !grey;
  //prvarln("debug");
  //grey = !grey;
  updatePixels();
}

function histogram()
{
  for(var i = 0;i < img.width;i++)
  {
    for(var j = 0;j < img.height;j++)
    {
      var bright = brightness(get(i,j));
      hist[bright]++;
    }
  }
  
  var histMax = max(hist);
  stroke(255);
  for(var i=0; i<img.width; i+=2)
  {
    var which = map(i, 0, img.width, 0, 255);
    var y = map(hist[which], 0, histMax, img.height, 0);
    line(i, img.height, i, y);
  }
  updatePixels();
}

function keyPressed()
{
  if(keyIsDown(DOWN_KEY)) invertColor();
  else if(keyIsDown(UP_KEY)) greyScale();
  else if(keyIsDown(LEFT_KEY)) histogram();
}
