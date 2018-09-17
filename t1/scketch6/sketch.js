var slider;

function setup() {
    createCanvas(700, 400);
    slider = createSlider(0, 80, 0);

}

function draw() {
    background(128);
    x = slider.value();
    y = 80 - x;
    l = 110;
    t = -160;
    stroke(255, 165, 0)
    fill(255, 165, 0)
    ellipse(width / 2 - l, height / 2, 60, 60);
    stroke(176, 224, 230)
    fill(176, 224, 230)
    ellipse(width / 2 + 45 + x - l, height / 2, 20 + x, 20 + x);
    ellipse(width / 2 - 45 - x - l, height / 2, 20 + x, 20 + x);
    ellipse(width / 2 - l, height / 2 + 45 + x, 20 + x, 20 + x);
    ellipse(width / 2 - l, height / 2 - 45 - x, 20 + x, 20 + x);

    ellipse(x + width / 2 + (45 * cos(radians(45))) - l, x + height / 2 + (45 * sin(radians(45))), 20 + x, 20 + x);
    ellipse(-x + width / 2 + (45 * cos(radians(135))) - l, x + height / 2 + (45 * sin(radians(135))), 20 + x, 20 + x);
    ellipse(-x + width / 2 + (45 * cos(radians(225))) - l, -x + height / 2 + (45 * sin(radians(225))), 20 + x, 20 + x);
    ellipse(x + width / 2 + (45 * cos(radians(315))) - l, -x + height / 2 + (45 * sin(radians(315))), 20 + x, 20 + x);

    stroke(255, 165, 0)
    fill(255, 165, 0)
    ellipse(width / 2 - t, height / 2, 60, 60);


    stroke(176, 224, 230)
    fill(176, 224, 230)
    ellipse(width / 2 + 45 + y - t, height / 2, 20 + y, 20 + y);
    ellipse(width / 2 - 45 - y - t, height / 2, 20 + y, 20 + y);
    ellipse(width / 2 - t, height / 2 + 45 + y, 20 + y, 20 + y);
    ellipse(width / 2 - t, height / 2 - 45 - y, 20 + y, 20 + y);

    ellipse(y + width / 2 + (45 * cos(radians(45))) - t, y + height / 2 + (45 * sin(radians(45))), 20 + y, 20 + y);
    ellipse(-y + width / 2 + (45 * cos(radians(135))) - t, y + height / 2 + (45 * sin(radians(135))), 20 + y, 20 + y);
    ellipse(-y + width / 2 + (45 * cos(radians(225))) - t, -y + height / 2 + (45 * sin(radians(225))), 20 + y, 20 + y);
    ellipse(y + width / 2 + (45 * cos(radians(315))) - t, -y + height / 2 + (45 * sin(radians(315))), 20 + y, 20 + y);







}
