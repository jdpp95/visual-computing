var grid = function(p) {

    p.setup = function (){
        p.createCanvas(600,600);
        p.background(0);
    };

    p.draw = function(){
        var nLines = 15;
        var thickness = 10;
        //stroke(128);
        //strokeWeight(5);
        for(var i=0;i<nLines;i++)
        {
            p.stroke(64);
            p.strokeWeight(thickness);
            p.line(0,i*p.height/nLines,p.width,i*p.height/nLines);
            p.line(i*p.width/nLines,0,i*p.width/nLines,p.height);
            p.stroke(255);

        }
        for(var i=0; i<nLines; i++)
            for(var j=0; j<nLines;j++)
            {
                p.strokeWeight(1);
                p.ellipse(i*p.width/nLines,j*p.height/nLines,thickness,thickness);
            }

    };
};

var feet = function(p) {
    
    var nBars = 30;
    var thickness;
    var x = 0;
    var speed = 0.5;
    
    p.setup = function () {
        p.createCanvas(600,300);
        p.background(255);
        thickness = p.width/(nBars*2);
    }
    
    p.draw = function () {
        var rw = 60, rh = 30;
        var forward = true;
        p.background(255);
        if(!p.mouseIsPressed)
        {
            p.showBars();
        }
        p.noStroke();
        p.fill(255,255,0);
        p.rect(x,100,rw,rh);
        p.fill(0,0,200);
        p.rect(x,150,rw,rh);
        //x++;
        if(x > p.width - rw || x < 0)
            speed *= -1;
        
        x += speed;
        
    }
    
    p.showBars = function ()
    {
        p.strokeWeight(thickness);
        p.stroke(0);
        for(var i=0; i<=nBars; i++)
        {
            p.line(i*2*thickness,0,i*2*thickness,p.height);
        }
    }
};

var lilac = function(p)
{
    var xcenter, ycenter, skip=0;
    p.setup = function () {
        p.createCanvas(600,600);
        p.stroke(0);
        p.strokeWeight(2);
        p.frameRate(5);
        
        xcenter = p.width/2;
        ycenter = p.height/2;
    }
    
    p.draw = function () {
        p.background(128);
        p.line(xcenter-5,ycenter,xcenter+5,ycenter);
        p.line(xcenter,ycenter-5,xcenter,ycenter+5);
        var nCircles = 20;
        //var r=5, R=20;
        
        p.translate(xcenter,ycenter);
        for(var i=0; i<nCircles; i++)
        {
            p.push();
            if(i != skip)
            {
                p.rotate(i*2.0*p.PI/nCircles);
                p.drawBlurCircles(180, 0, 120);
            }
            p.pop();
        }
        
        skip = (skip+1) % nCircles;
        //console.log(skip);
    }
    
    p.drawBlurCircles = function(x, y, r) {
        //console.log("Drawing...")
        p.push();
        p.push();
        p.noStroke();
        var opc = 0.4;
        var step = 3.0/r;

        for (var i = r; i > 0; i-=1.5) {
          if (opc < 5) {
            opc += step;
            p.fill(255, 255, 0, opc);
          }
          p.ellipse(x, y, i, i);
        }
        p.pop();
        p.pop();
    };
};


var sketch1 = new p5(grid, 'grid_id');
var sketch2 = new p5(feet, 'feet_id');
var sketch3 = new p5(lilac, 'lilac_id');