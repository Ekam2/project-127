arijit_song = "";
jvke_song = "";

user_name = localStorage.getItem("Username");

document.getElementById("welcome_user_name").innerHTML = "Hi " + user_name + "! " +"     "  +  "    Welcome To THE AI MUSIC WEB APP        "  + "           (also click to go back)"  ;


function d(){
    window.location = "hi.html";
}

function note(){
window.alert("NOTE - Get your left-hand wrist in front of the webcam to play MILNE HAI MUJHSE AAYE Song. Get your right-hand wrist in front of the webcam to play GOLDEN HOUR Theme Song.   Keep at least 2 feet distance from the webcam, so that your wrists are detected quickly");
}

    function setup(){
        canvas = createCanvas(600,550);
        canvas.center();
      
    
        video = createCapture(VIDEO);
        video.hide();
    }
    
    function draw(){
        image(video,0,-100,600,650);}

        function preload(){
            arijit_song = loadSound("arijit.mp3");
            jvke_song = loadSound("jvke.mp3");
        }