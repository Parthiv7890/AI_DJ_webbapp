let song1 = ''
let song2 = ''
let lwx = 0
let lwy = 0
let rwx = 0
let rwy = 0
let scorelw = 0
let scorerw = 0
let song1status 
let song2status 
function preload(){
    song1 = loadSound('Lindsey_Stirling_-_Carol_of_the_Bel_(getmp3.pro).mp3')
    song2 = loadSound('Harry_Potter_-_Hedwigs_Theme_Pian_(getmp3.pro).mp3')
}


function setup(){
    canvas = createCanvas(600,500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotResults)
}
function gotResults(results){
    if(results.length > 0){
        rwx = results[0].pose.rightWrist.x
        rwy = results[0].pose.rightWrist.y
        lwx = results[0].pose.leftWrist.x
        lwy = results[0].pose.leftWrist.y

        scorelw = results[0].pose.keypoints[9].score
        scorerw = results[0].pose.keypoints[10].score


    }
}
function modelLoaded(){

}
function draw(){
    image(video,0,0,600,500)
    fill("#FF0000")
    stroke("#FF0000")

    song1status = song1.isPlaying()
    song2status = song2.isPlaying()
    if(scorelw > 0.2){
        circle(lwx,lwy,20)
        song2.stop()
        if(song1status == false){
            song1.play()
            document.getElementById("songplay").innerHTML = "Carrol of the Bells"
        }
    }
    if(scorerw>0.2){
        circle(rwx,rwy,20)
        song1.stop()
        if(song2status == false){
            song2.play()
            document.getElementById("songplay").innerHTML = "Hedwig's Theme"
        }
    }
}

function play(){
    song1.play()
    
}

