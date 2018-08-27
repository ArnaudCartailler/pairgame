var deck_list = ["cry.png","cry.png","dat.png","dat.png","drum.png","drum.png","nope.png","nope.png","pepe.png","pepe.png","please.png","please.png","troll.png","troll.png","why.png","why.png"];
var card = document.getElementsByClassName("card");
var backcard = document.getElementsByClassName("backcard");

//saving choices
var choice1="";
var choice2="";

//saving array positions
var save ="";
var save2 ="";

//used for timeout
var id =""; //for checking cards
var id2=""; //for display timeout
var id4=""; //for rotate timeout
var id6=""; //delay for max_card++

//used to block maximum card click
var max_card=2;

//background ++
var background=0;
//rotate ++
var rotate = 0 ;

//hidding restart button at the start
var restart = document.getElementById("restart_game");
restart.style.display ="none";

//rotation to make a little animation on start
for (i=0;i<card.length;i++){
  backcard[i].style.transform = "rotateY(90deg)";
}

//shufflle randomly
function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;


//randomize the cards.
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

}


      //start function
      function start(){
        time=40;
        shuffle(deck_list);
        id2=setTimeout(display,1800);
        rotateCardStart();
        id6=setTimeout(resetMaxCard,100);

        //avoid player to spam start game function
        document.getElementById("start_game").style.display ="none";
        restart.style.display ="none";
        //resetting
        tries = 0 ;
        score = 0 ;
        choice1="";
        choice2="";
      }

      function resetMaxCard(){
        //set count to 0 to permit player to click on cards
        max_card=0;
      }

      //function to show cards if user is losing to show him the full deck
      function rotateCardEnd(){

        //hide pokeball to show the card hidden behind
        backcard[rotate].style.transform = "rotateY(90deg)";
        //going to the next card
        rotate++;

        //stopping the timer
        if (rotate===card.length){
          clearTimeout(id4);
          rotate = 0;
        }
        //timeout of 0.1 second on our function till the end of display
        else{
          id4=setTimeout(rotateCardEnd,100);
        }
      }

      function rotateCardStart(){
        //show pokeball to hide the card behind
        backcard[rotate].style.transform = "rotateY(0deg)";
        //going to the next card
        rotate++;

        //stopping the timer
        if (rotate===card.length){
          clearTimeout(id4);
          rotate = 0;
        }
        //timeout of 0.1 second on our function till the end of display
        else{
          id4=setTimeout(rotateCardStart,100);
        }
      }

//display all backgroundImage
function display(){

  clearTimeout(id2);
  for (background=0;background<card.length;background++){
    card[background].style.backgroundImage = "url('img/"+deck_list[background]+"')";
  }

}

//will save the two different choices and lanch a check funciton
function compare(n){
  if (max_card <2){

    backcard[n].style.transform = "rotateY(90deg)";

    //saving the first choice
    if (choice1===""){
      choice1 = deck_list[n];
      save=n;
    }

    //when we have tje first choice we go here
    else {
      //saving second choice
      choice2 = deck_list[n];
      save2=n;
      //comapring the 2 choices with 1s timer to let the 2 cards
      id = setTimeout(check,800);
    }
    max_card++;
  }
}

function check(){
  //happen only if the two choices are different
  if (choice1 != choice2){
    //getting back the 2 front images
    backcard[save].style.transform = "rotateY(0deg)";
    backcard[save2].style.transform = "rotateY(0deg)";
  }

  //reset
  choice1="";
  max_card=0;
}
