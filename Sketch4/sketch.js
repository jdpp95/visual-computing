

var x = 0;
var lx = 40
var y = lx 
var mov = true;


function setup() {
  createCanvas(700, 400);
	frameRate(100);
	 
}

function draw() {
	background(0);
	sd = 25
	bd = 130
	rb = 80
	rs = 25
	sr = 110
	
	stroke(255)
	fill(0)	
	rect(width/2-(sr/2), height/2-(sr/2), sr, sr)
	
	stroke(128)
	fill(128)
	
	ellipse(width/2, height/2-bd-y, rb, rb);
	ellipse(width/2+bd+y, height/2, rb, rb);
	ellipse(width/2, height/2+bd+y, rb, rb);	
	ellipse(width/2-bd-y, height/2, rb, rb);
	
	if (mov){
		y = y-3
	}else{
		y = y+3 
	}
	
	stroke(255)
	fill(255)

	
	

	
	ellipse(width/2, height/2-sd-x, sd, sd);
	ellipse(width/2+sd+x, height/2, sd, sd);
	ellipse(width/2, height/2+sd+x, sd, sd);	
	ellipse(width/2-sd-x, height/2, sd, sd);
	
	if (mov){
		x++
		if (x > lx)
			mov = false
	}else{
		x--
		if (x < 1)
			mov = true
	}
	
	
		
}