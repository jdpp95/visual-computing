var x = 0;
var lx = 40
var y = lx 
var mov = true;


p.setup = function() {
    p.createCanvas(700, 400);
    p.frameRate(100);
	 
}

p.draw = function() {
	p.background(0);
	sd = 25
	bd = 130
	rb = 80
	rs = 25
	sr = 110
	
	p.stroke(255)
	p.fill(0)	
	p.rect(p.width/2-(sr/2), p.height/2-(sr/2), sr, sr)
	
	p.stroke(128)
	p.fill(128)
	
	p.ellipse(width/2, height/2-bd-y, rb, rb);
	p.ellipse(width/2+bd+y, height/2, rb, rb);
	p.ellipse(width/2, height/2+bd+y, rb, rb);	
	p.ellipse(width/2-bd-y, height/2, rb, rb);
	
	if (mov){
		y = y-3
	}else{
		y = y+3 
	}
	
	p.stroke(255)
	p.fill(255)
	p.ellipse(width/2, height/2-sd-x, sd, sd);
	p.ellipse(width/2+sd+x, height/2, sd, sd);
	p.ellipse(width/2, height/2+sd+x, sd, sd);	
	p.ellipse(width/2-sd-x, height/2, sd, sd);
	
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