X=0;
Y=0;
function setup()
{
canvas=createCanvas(250,250);
canvas.center();
video=createCapture(VIDEO);
video.size(250,250);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotposes);
}
function preload()
{
mustache=loadImage('https://i.postimg.cc/xCYHz5X6/Mustache.jpg');
}
function draw()
{
image(video,0,0,250,250);
image(mustache,X,Y, 70,30);
}
function modelLoaded()
{
console.log('modelLoaded');
}
function gotposes(results)
{
if(results.length>0)
{
console.log(results);
X=results[0].pose.nose.x-35;
Y=results[0].pose.nose.y;
}
}