//
// document.getElementById("validateenter").onclick = function() {name()};
//
// function name(){
//   var x = document.getElementById("enternameid").value;
//   if(x.length >= 2) {
//      document.getElementById("allentername").style.display="none";
//      document.getElementById("playername").innerHTML = x;
//    }
// }

var divs = document.getElementsByClassName("case");
for(i=0; i < divs.length; i++){
  divs[i].onclick = function(){
    game(this);
}

function before(){

}

function game(element){

/*Banque d'images'*/

var images= [

  {
    "name" = "color",
    "img"='color.jpg',
  },
  {
    "name" = "cry",
    "img" ='img/cry.png',
  },

  {
    "name" = "dat",
    "img"= 'img/dat.jpg',
  },

  {
    "name" = "drum",
    "img"= 'img/drum.jpg',
  },

  {
    "name" = "hope",
    "img" ='img/nope.png',
  },

  {
    "name" = "pepe",
    "img" ='img/pepe.jpg',
  },

  {
    "name" = "please",
    "img" = 'img/please.png',
  },

  {
    "name" = "troll",
    "img"='img/troll.jpg',
  },

  {
    "name" = "why",
    "img" ='img/why.jpg'
  },
];

var position = images[Math.floor(Math.random() * images.length)] /*For shuffling*/

}
