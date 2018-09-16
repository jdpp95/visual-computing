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
    
    var nBars = 15;
    var thickness;
    
    p.setup = function () {
        p.createCanvas(600,600);
        p.background(255);
        thickness = p.width/(nBars*2);
        p.strokeWeight(thickness);
        p.stroke(0);
        for(var i=0; i<nBars; i++)
        {
            p.line(i*thickness,0,i*thickness,p.height);
        }
    }
    
    p.draw = function () {
        
    }
};

var sketch1 = new p5(grid, 'grid_id');
var sketch2 = new p5(feet, 'feet_id');