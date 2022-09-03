let song1 = ''
let song2 = ''

function preload(){
    song1 = loadSound('Lindsey_Stirling_-_Carol_of_the_Bel_(getmp3.pro).mp3')
    song2 = loadSound('Harry_Potter_-_Hedwigs_Theme_Pian_(getmp3.pro).mp3')
}


function setup(){
    canvas = createCanvas(600,500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video,0,0,600,500)
}

function play(){
    song1.play()
}