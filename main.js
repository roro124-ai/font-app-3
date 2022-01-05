difference=0;
leftWristX=0;
rightWristX=0;

function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    
    }
    
    function modelLoaded(){
        console.log('PoseNet is Initalized');
    }
    
    function draw(){
        background('#969a97');
        document.getElementById("font_size").innerHTML="Font size of the text will be -"+difference+"px";
        textSize(difference);
        text('Rohaan',50,400);
        fill('#20F875');

    
    }
    
    function gotPoses(results){
        if(results.length>0){
            console.log(results);

            leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("left wrist x="+leftWristX+" right wrist x="+rightWristX+"difference="+difference);

        }
    
    }
    
    
    
    
    
    