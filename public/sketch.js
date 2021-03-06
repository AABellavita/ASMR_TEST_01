let socket = io();

var w = 0;

function preload(){
  // put preload code here
  // track = loadSound("/assets/sounds/ItFeelsGood.mp3");
}

function setup() {
  // put setup code here
  // createCanvas(windowWidth,windowHeight);
  // track.play();
}

function draw() {
  // put drawing code here
  // trackTime = track.currentTime();
  // console.log(trackTime);
}

function watch() {
  if (w == 0) {
    document.getElementById("overlay").style.opacity = "0";
    document.getElementById("bt2").style.backgroundImage = "url(/assets/images/lp/occhio-barrato.png)";
    w = 1
  } else if(w == 1) {
    document.getElementById("overlay").style.opacity = "0.8";
    document.getElementById("bt2").style.backgroundImage = "url(/assets/images/lp/occhio.png)";
    w = 0
  }
}

function gioca_1() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("header").style.display = "none";
  console.log(socket.id)
  socket.emit("join", {id: socket.id});
}

function gioca_2() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("header").style.display = "none";
  document.getElementById("myFrame").src = "/assets/game_r2/index.html";
}

function gioca_3() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("header").style.display = "none";
  document.getElementById("myFrame").src = "/assets/game_r3/index.html";
}

function home() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("header").style.display = "flex";
}

function info(){
  if (w == 0) {
    document.getElementById("welcome").style.display = "none";
    w = 1
  } else if(w == 1) {
    document.getElementById("welcome").style.display = "block";
    w = 0
  }
}

socket.on("playersNumber", displayPlayers);

function displayPlayers() {
  // qui ci va la gestione degli omini
  // questo sketch riceve dal server il pacchetto di dati "playersData"
  // all'interno c'è:
  // data.pl = numoro di giocatori;
  // data.room = stanza da cui arrivano i dati (data.room è una stringa, non un numero);
}
