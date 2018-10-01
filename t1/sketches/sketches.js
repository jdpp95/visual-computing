var grid = function (p) {

    p.setup = function () {
        p.createCanvas(600, 600);
        p.background(0);
    };

    p.draw = function () {
        var nLines = 15;
        var thickness = 10;
        //stroke(128);
        //strokeWeight(5);
        for (var i = 0; i < nLines; i++) {
            p.stroke(64);
            p.strokeWeight(thickness);
            p.line(0, i * p.height / nLines, p.width, i * p.height / nLines);
            p.line(i * p.width / nLines, 0, i * p.width / nLines, p.height);
            p.stroke(255);

        }
        for (i = 0; i < nLines; i++)
            for (var j = 0; j < nLines; j++) {
                p.strokeWeight(1);
                p.ellipse(i * p.width / nLines, j * p.height / nLines, thickness, thickness);
            }

    };
};

var feet = function (p) {

    var nBars = 30;
    var thickness;
    var x = 0;
    var speed = 0.5;

    p.setup = function () {
        p.createCanvas(600, 300);
        p.background(255);
        thickness = p.width / (nBars * 2);
    }

    p.draw = function () {
        var rw = 60,
            rh = 30;
        var forward = true;
        p.background(255);
        if (!p.mouseIsPressed) {
            p.showBars();
        }
        p.noStroke();
        p.fill(255, 255, 0);
        p.rect(x, 100, rw, rh);
        p.fill(0, 0, 200);
        p.rect(x, 150, rw, rh);
        //x++;
        if (x > p.width - rw || x < 0)
            speed *= -1;

        x += speed;

    }

    p.showBars = function () {
        p.strokeWeight(thickness);
        p.stroke(0);
        for (var i = 0; i <= nBars; i++) {
            p.line(i * 2 * thickness, 0, i * 2 * thickness, p.height);
        }
    }
};

var lilac = function (p) {
    var xcenter, ycenter, skip = 0;
    p.setup = function () {
        p.createCanvas(600, 600);
        p.stroke(0);
        p.strokeWeight(2);
        p.frameRate(5);

        xcenter = p.width / 2;
        ycenter = p.height / 2;
    }

    p.draw = function () {
        p.background(128);
        p.line(xcenter - 5, ycenter, xcenter + 5, ycenter);
        p.line(xcenter, ycenter - 5, xcenter, ycenter + 5);
        var nCircles = 20;
        //var r=5, R=20;

        p.translate(xcenter, ycenter);
        for (var i = 0; i < nCircles; i++) {
            p.push();
            if (i != skip) {
                p.rotate(i * 2.0 * p.PI / nCircles);
                p.drawBlurCircles(180, 0, 120);
            }
            p.pop();
        }

        skip = (skip + 1) % nCircles;
        //console.log(skip);
    }

    p.drawBlurCircles = function (x, y, r) {
        //console.log("Drawing...")
        p.push();
        p.push();
        p.noStroke();
        var opc = 0.4;
        var step = 3.0 / r;

        for (var i = r; i > 0; i -= 1.5) {
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

var iSquare = function (p) {
    var x = 0;
    var lx = 40
    var y = lx
    var mov = true;

    p.setup = function () {
        p.createCanvas(700, 400);
        p.frameRate(100);

    }

    p.draw = function () {
        p.background(0);
        sd = 25
        bd = 130
        rb = 80
        rs = 25
        sr = 110

        p.stroke(255)
        p.fill(0)
        p.rect(p.width / 2 - (sr / 2), p.height / 2 - (sr / 2), sr, sr)

        p.stroke(128)
        p.fill(128)

        p.ellipse(p.width / 2, p.height / 2 - bd - y, rb, rb);
        p.ellipse(p.width / 2 + bd + y, p.height / 2, rb, rb);
        p.ellipse(p.width / 2, p.height / 2 + bd + y, rb, rb);
        p.ellipse(p.width / 2 - bd - y, p.height / 2, rb, rb);

        if (mov) {
            y = y - 3
        } else {
            y = y + 3
        }

        p.stroke(255)
        p.fill(255)
        p.ellipse(p.width / 2, p.height / 2 - sd - x, sd, sd);
        p.ellipse(p.width / 2 + sd + x, p.height / 2, sd, sd);
        p.ellipse(p.width / 2, p.height / 2 + sd + x, sd, sd);
        p.ellipse(p.width / 2 - sd - x, p.height / 2, sd, sd);

        if (mov) {
            x++
            if (x > lx)
                mov = false
        } else {
            x--
            if (x < 1)
                mov = true
        }
    }
}

var cafeWall = function (p) {
    p.setup = function () {
        p.createCanvas(600, 600);
    }

    p.draw = function () {
        p.background(0, 0, 0);
        // line(150, 25, mouseX, mouseY);
        ini = p.mouseX;
        for (m = 0; m < 13; m = m + 2) {
            for (i = -10; i < 10; i++) {
                p.rect(ini + (i * 120), m * 60, 60, 60);
            }
            for (i = -10; i < 10; i++) {
                p.rect(600 - ini + (i * 120), (m + 1) * 60, 60, 60);
            }
        }
        for (m = 1; m < 13; m++) {
            p.strokeWeight(2);
            p.stroke(126);
            p.line(0, m * 60, 600, m * 60);
            p.strokeWeight(1);
            p.stroke(0);
        }
    }

};

var circles = function (p) {
    var slider;

    p.setup = function() {
        p.createCanvas(700, 400);
        //slider = p.createSlider(0, 80, 0);

    }

    p.draw = function() {
        p.background(128);
        //x = slider.value();
        x = 80*p.mouseX/p.width;
        if (x < 0) x = 0;
        if (x > 80) x = 80;
        y = 80 - x;
        l = 110;
        t = -160;
        p.stroke(255, 165, 0)
        p.fill(255, 165, 0)
        p.ellipse(p.width / 2 - l, p.height / 2, 60, 60);
        p.stroke(176, 224, 230)
        p.fill(176, 224, 230)
        p.ellipse(p.width / 2 + 45 + x - l, p.height / 2, 20 + x, 20 + x);
        p.ellipse(p.width / 2 - 45 - x - l, p.height / 2, 20 + x, 20 + x);
        p.ellipse(p.width / 2 - l, p.height / 2 + 45 + x, 20 + x, 20 + x);
        p.ellipse(p.width / 2 - l, p.height / 2 - 45 - x, 20 + x, 20 + x);

        p.ellipse(x + p.width / 2 + (45 * p.cos(p.radians(45))) - l, x + p.height / 2 + (45 * p.sin(p.radians(45))), 20 + x, 20 + x);
        p.ellipse(-x + p.width / 2 + (45 * p.cos(p.radians(135))) - l, x + p.height / 2 + (45 * p.sin(p.radians(135))), 20 + x, 20 + x);
        p.ellipse(-x + p.width / 2 + (45 * p.cos(p.radians(225))) - l, -x + p.height / 2 + (45 * p.sin(p.radians(225))), 20 + x, 20 + x);
        p.ellipse(x + p.width / 2 + (45 * p.cos(p.radians(315))) - l, -x + p.height / 2 + (45 * p.sin(p.radians(315))), 20 + x, 20 + x);

        p.stroke(255, 165, 0)
        p.fill(255, 165, 0)
        p.ellipse(p.width / 2 - t, p.height / 2, 60, 60);


        p.stroke(176, 224, 230)
        p.fill(176, 224, 230)
        p.ellipse(p.width / 2 + 45 + y - t, p.height / 2, 20 + y, 20 + y);
        p.ellipse(p.width / 2 - 45 - y - t, p.height / 2, 20 + y, 20 + y);
        p.ellipse(p.width / 2 - t, p.height / 2 + 45 + y, 20 + y, 20 + y);
        p.ellipse(p.width / 2 - t, p.height / 2 - 45 - y, 20 + y, 20 + y);

        p.ellipse(y + p.width / 2 + (45 * p.cos(p.radians(45))) - t, y + p.height / 2 + (45 * p.sin(p.radians(45))), 20 + y, 20 + y);
        p.ellipse(-y + p.width / 2 + (45 * p.cos(p.radians(135))) - t, y + p.height / 2 + (45 * p.sin(p.radians(135))), 20 + y, 20 + y);
        p.ellipse(-y + p.width / 2 + (45 * p.cos(p.radians(225))) - t, -y + p.height / 2 + (45 * p.sin(p.radians(225))), 20 + y, 20 + y);
        p.ellipse(y + p.width / 2 + (45 * p.cos(p.radians(315))) - t, -y + p.height / 2 + (45 * p.sin(p.radians(315))), 20 + y, 20 + y);
    }

};

var sketch1 = new p5(grid, 'grid_id');
var sketch2 = new p5(feet, 'feet_id');
var sketch3 = new p5(lilac, 'lilac_id');
var sketch4 = new p5(iSquare, 'iSquare_id');
var sketch5 = new p5(cafeWall, 'cafeWall_id');
var sketch6 = new p5(circles, 'circles_id');

function openIllusion(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
