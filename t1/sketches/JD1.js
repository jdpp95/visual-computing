var JD1 = function (p){

    p.setup() {
    createCanvas(600, 600);
    }

        p.draw() {
        p.background(0, 0, 0);
        // line(150, 25, mouseX, mouseY);
        ini = mouseX;
        for (m=0; m<13; m = m+2){
            for (i=-10; i<10; i++){
            p.rect(ini+(i*120), m*60, 60, 60);
            }
            for (i=-10; i<10; i++){
            p.rect(600 - ini+(i*120), (m+1)*60, 60, 60);
            }
        }
        for (m=1; m<13; m++){
            p.strokeWeight(2);
            p.stroke(126);
            p.line(0,m*60,600,m*60);
            p.strokeWeight(1);
            p.stroke(0);
        }
        }
}


var sketch = new p5(JD1, 'JD1_id');