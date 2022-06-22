noseX = 0;
noseY = 0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/2y698P5q/Clown-Nose-Download-PNG-Image-1.png')
}

function setup() {

    canvas = createCanvas(300, 300);
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()

    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on('pose', gotPoses)
}

function modelloaded() {
    console.log(" PoseNet is Initialized")
}

function gotPoses(results) {

    if(results.length > 0 ) {
        console.log(results)
        noseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("Nose x " + results[0].pose.nose.x)
        console.log("Nose y " + results[0].pose.nose.y)
    }
}

function draw() {
    image(video, 0,0,300,300)
    fill(255,0,0)
    stroke(255,0,0)
    circle(noseX, noseY, 20)
    image(clown_nose, noseX, noseY, 30, 30)
}

function take_snapshot() {
save('myFilterImage.png');

}

