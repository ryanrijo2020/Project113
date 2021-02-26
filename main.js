function preload() {

}
function setup() {
    canvas=createCanvas(640,480);
    canvas.position(150,150);
    video=createCapture(VIDEO);
    video.hide();

}
function draw() {
    image(video,230,150,220,200);
fill(255,0,0);
stroke(255,0,0);
circle(100,50,70);
circle(560,50,70);
circle(560,430,70);
circle(100,430,70);

fill(0,128,0);
stroke(0,128,0);
rect(90,40,460,20);
rect(90,40,20,400);
rect(550,40,20,400);


rect(90,420,460,20);
}
function take_snapshot() {
    save('photoframe.png');
}
