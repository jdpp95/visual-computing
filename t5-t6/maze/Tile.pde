class Tile {
  public Frame frame;
  Vector position;
  int type;
  
  Tile(int x, int y, int type)
  {
    position = new Vector(x, height/2, y);
    this.type = type;
    frame = new Frame(scene) {
      @Override
      public void visit() {
        draw();
      }
    };
  }
  
  public void draw() {
    pushMatrix();
    pushStyle();
    rotateX(PI/2);
    
    if(type == WALL)
      wall();
    else
      floorTile();
      
    popStyle();
    popMatrix();
  }
  
  public void wall(){
    translate(position.x() + TILE_SIZE/2, position.y() - TILE_SIZE/2, position.z() + TILE_SIZE/2);
    beginShape(QUADS);
    texture(brick);
    noFill();
    noStroke();
    //box(TILE_SIZE);
    // +Z "front" face
    vertex(-TILE_SIZE/2, -TILE_SIZE/2,  TILE_SIZE/2, 0, 0);
    vertex( TILE_SIZE/2, -TILE_SIZE/2,  TILE_SIZE/2, 1, 0);
    vertex( TILE_SIZE/2,  TILE_SIZE/2,  TILE_SIZE/2, 1, 1);
    vertex(-TILE_SIZE/2,  TILE_SIZE/2,  TILE_SIZE/2, 0, 1);
  
    // -Z "back" face
    vertex( TILE_SIZE/2, -TILE_SIZE/2, -TILE_SIZE/2, 0, 0);
    vertex(-TILE_SIZE/2, -TILE_SIZE/2, -TILE_SIZE/2, 1, 0);
    vertex(-TILE_SIZE/2,  TILE_SIZE/2, -TILE_SIZE/2, 1, 1);
    vertex( TILE_SIZE/2,  TILE_SIZE/2, -TILE_SIZE/2, 0, 1);
  
    // +Y "bottom" face
    vertex(-TILE_SIZE/2,  TILE_SIZE/2,  TILE_SIZE/2, 0, 0);
    vertex( TILE_SIZE/2,  TILE_SIZE/2,  TILE_SIZE/2, 1, 0);
    vertex( TILE_SIZE/2,  TILE_SIZE/2, -TILE_SIZE/2, 1, 1);
    vertex(-TILE_SIZE/2,  TILE_SIZE/2, -TILE_SIZE/2, 0, 1);
  
    // -Y "top" face
    vertex(-TILE_SIZE/2, -TILE_SIZE/2, -TILE_SIZE/2, 0, 0);
    vertex( TILE_SIZE/2, -TILE_SIZE/2, -TILE_SIZE/2, 1, 0);
    vertex( TILE_SIZE/2, -TILE_SIZE/2,  TILE_SIZE/2, 1, 1);
    vertex(-TILE_SIZE/2, -TILE_SIZE/2,  TILE_SIZE/2, 0, 1);
  
    // +X "right" face
    vertex( TILE_SIZE/2, -TILE_SIZE/2,  TILE_SIZE/2, 0, 0);
    vertex( TILE_SIZE/2, -TILE_SIZE/2, -TILE_SIZE/2, 1, 0);
    vertex( TILE_SIZE/2,  TILE_SIZE/2, -TILE_SIZE/2, 1, 1);
    vertex( TILE_SIZE/2,  TILE_SIZE/2,  TILE_SIZE/2, 0, 1);
  
    // -X "left" face
    vertex(-TILE_SIZE/2, -TILE_SIZE/2, -TILE_SIZE/2, 0, 0);
    vertex(-TILE_SIZE/2, -TILE_SIZE/2,  TILE_SIZE/2, 1, 0);
    vertex(-TILE_SIZE/2,  TILE_SIZE/2,  TILE_SIZE/2, 1, 1);
    vertex(-TILE_SIZE/2,  TILE_SIZE/2, -TILE_SIZE/2, 0, 1);
    endShape();
  }
  
  public void floorTile(){
    translate(position.x(), position.y(), position.z());
    noStroke();
    rectMode(CORNER);
    //println("x: "+position.x()+", y:"+position.y());
    rotateX(PI/2);
    //texture(floor);
    /*if((position.x()/TILE_SIZE + position.z()/TILE_SIZE)%2 == 0) fill(255);
    else fill(0,TILE_SIZE/228,0);*/
    beginShape();
    texture(floor);
    textureMode(NORMAL);
    vertex(0,0,0,0,0);
    vertex(0,TILE_SIZE,0,0,1);
    vertex(TILE_SIZE,TILE_SIZE,0,1,1);
    vertex(TILE_SIZE,0,0,1,0);
    endShape();
  }
  
}
