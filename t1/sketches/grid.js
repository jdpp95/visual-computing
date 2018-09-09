function setup(){
	createCanvas(600,600);
	background(0);
}

function draw(){
	var nLines = 15;
	var thickness = 10;
	//stroke(128);
	//strokeWeight(5);
	for(var i=0;i<nLines;i++)
	{
		stroke(64);
		strokeWeight(thickness);
		line(0,i*height/nLines,width,i*height/nLines);
		line(i*width/nLines,0,i*width/nLines,height);
		stroke(255);
		
	}
	for(var i=0; i<nLines; i++)
		for(var j=0; j<nLines;j++)
		{
			strokeWeight(1);
			ellipse(i*width/nLines,j*height/nLines,thickness,thickness);
		}

}