noseX=0;
noseY=0;
differnce=0;
leftWristX=0;
rightWristY=0;


function setup(){
 video = createCapture(VIDEO);
 video.size(550,500);

 canvas =  createCanvas(550,550);
 canvas = position(500,150);
 poseNet = ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses);
 name = document.getElementById("name").value;
}
function modelLoaded(){
    console.log('Model Loaded');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nosex = "+ noseX +"noseY = " + noseY);

        leftWristX = results[0].pose.leftWristX.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference)
    }
}
function draw(){
    background('#969A97');
    document.getElementById("square_side").innerHTML = "Width And Height of a Letter will be = " + difference +"px";
    fill('#F90093');
    stroke('#F90093');
    text(noseX, noseY, difference);
    textSize(difference); fill('#FFE787'); text(name, 50, 400); }
}