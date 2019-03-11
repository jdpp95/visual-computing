import frames.primitives.*;
import frames.core.*;
import frames.processing.*;
import processing.serial.*;

String[] input;
Scene scene;
Frame f1, f2;
PImage floor, brick;
ArrayList<Tile> maze;
int mazeSizeX;
int mazeSizeY;
Vector start;


final int TILE_SIZE = 50;
final int EMPTY_TILE = 0;
final int WALL = 1;
final int START = 2;
final int FINISH = 3;
Serial port;
int joystick_x = 0, joystick_y = 0, button = 0;

void setup() {
  size(1000, 600, P3D);
  scene = new Scene(this);
  f1 = new Frame(scene);
  port = new Serial(this, Serial.list()[0], 9600);
  //scene.fitBallInterpolation();
  //scene.setFieldOfView(PI / 6);
  floor = loadImage("tile.jpg");
  brick = loadImage("brick.jpg");
  scene.setRadius(1500);
  scene.setUpVector(new Vector(0,0,1));
  //scene.translate(0,0,0);
  //scene.lookAt(maze);
  loadMaze();
}

void draw() {
  //camera(width/2, height/2, (height/2) / tan(PI/6), width/2, height/2, 0, 0, 1, mouseX
  background(0);
  scene.traverse();
  scene.setEye(f2);
  mazeInteraction();
}
// 'first-person' interaction
public void mouseDragged() {
  // spins the default-frame (the eye or the frame picked with a mouseMoved)
  if (mouseButton == LEFT)
    scene.spin();
  else if (mouseButton == RIGHT)
  // translates the default-frame (the eye or the frame picked with a mouseMoved)
    scene.translate();
  // zooms the default-frame (the eye or the frame picked with a mouseMoved)
  else
    scene.zoom(scene.mouseDX());
}

void mouseWheel(MouseEvent event) {
  // same as: scene.scale(event.getCount() * 20, scene.eye());
  scene.scale(event.getCount() * 20);
}

void keyPressed(){
  switch (key) {
    case 'o':
      if (scene.type() == Graph.Type.PERSPECTIVE)
        scene.setType(Graph.Type.ORTHOGRAPHIC);
      else
        scene.setType(Graph.Type.PERSPECTIVE);
  }
}

void loadMaze() {
  input = loadStrings("Maze.txt");
  maze = new ArrayList();
  int[] coords = int(split(input[0], " "));
  mazeSizeX = coords[0];
  mazeSizeY = coords[1];
  for(int i=1; i<input.length; i++)
  {
    String line = input[i];
    println(line);
    for(int j=0; j < mazeSizeY; j++)
    {
      int type = -1;
      switch(line.charAt(j*2)) {
        case '.':
          type = EMPTY_TILE;
          break;
        case '#':
          type = WALL;
          break;
        case 'S':
          type = START;
          break;
        case 'F':
          type = FINISH;
          break;
      }
      Tile t = new Tile((i-1)*TILE_SIZE, j*TILE_SIZE,type);
      maze.add(t);
      if (type == START){
        f2 = t.frame;
        start = new Vector(t.position.x(), t.position.y(), t.position.z());
        scene.translate(start.x(),height/2 - TILE_SIZE*2,start.z()/4);
        scene.setTrackedFrame("Theseus", f2);
      }
    }
  }
}

void mazeInteraction() {
  int raw_value = -1;
  //println("Button: "+button);
  if(port.available() > 0)
  {
    raw_value = port.read();
    if(raw_value < 50) {
      if(raw_value == 2 && (joystick_x + joystick_y < 10)) {
        button = 1; //Loose
      } else if (raw_value == 1) {
        button = 0; //Hold
      }
    } else if(raw_value < 150) 
      joystick_x = (raw_value - 100)/10;
    else 
      joystick_y = (raw_value - 200)/10;
  }
  
  //scene.eye().setReference(f2);
  //scene.lookAt(start);
  
  println("raw: "+raw_value);
  println("X: "+joystick_x);
  println("Y: "+joystick_y);
    
  if(button == 1){
    scene.translate("Theseus", joystick_x, 0, joystick_y);
    //scene.translate(f2);
  } else {}
    //scene.translate("Theseus", joystick_x, 0, joystick_y);
}
