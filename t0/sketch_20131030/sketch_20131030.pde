//PGraphics pg;

PImage img;

boolean inverted=false, grey=false;
int[] hist = new int[256];

void setup() {
  img = loadImage("fruta.jpg");
  size(700,500);
  frameRate(60);
  image(img, 0, 0);
  //println(frameRate);
}

void draw() {
  println(frameRate);
  //updatePixels();
}

void greyScalePixel(int mode, int pos, float r, float g, float b)
{
  if (mode == 0) pixels[pos] = color((r + g + b)/3);
  else pixels[pos] = color((max(r,g,b)+min(r,g,b))/2);
}

void invertColor()
{
  loadPixels();
  for(int i = 0; i < width*height; i++)
  {
    float r = red(pixels[i]);
    float g = green(pixels[i]);
    float b = blue(pixels[i]);
    //if (i > img.width*mouseY) greyScalePixel(0, i, r, g, b);
    //else greyScalePixel(1, i, r, g, b);
    
    pixels[i] = color(255 - r,255 - g,255 - b);
  }
  inverted = !inverted;
  updatePixels();
}

void reset()
{
  image(img, 0, 0);
  loadPixels();
  grey = inverted = false;
}

void greyScale()
{
  loadPixels();
  for(int i = 0; i < width*height; i++)
  {
    float r = red(pixels[i]);
    float g = green(pixels[i]);
    float b = blue(pixels[i]);
    //if (i > img.width*mouseY) greyScalePixel(0, i, r, g, b);
    //else greyScalePixel(1, i, r, g, b);
    
    if(!grey) pixels[i] = color((r+g+b)/3);
  }
  if(grey) loadPixels();
  grey = !grey;
  //println("debug");
  //grey = !grey;
  updatePixels();
}

void histogram()
{
  for(int i = 0;i < img.width;i++)
  {
    for(int j = 0;j < img.height;j++)
    {
      int bright = int(brightness(get(i,j)));
      hist[bright]++;
    }
  }
  
  int histMax = max(hist);
  stroke(255);
  for(int i=0; i<img.width; i+=2)
  {
    int which = int(map(i, 0, img.width, 0, 255));
    int y = int(map(hist[which], 0, histMax, img.height, 0));
    line(i, img.height, i, y);
  }
  updatePixels();
}

void keyPressed()
{
  if(keyCode == DOWN) invertColor();
  else if(keyCode == UP) greyScale();
  else if(keyCode == LEFT) histogram();
}
