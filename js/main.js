var deck_list = ["cry.png","cry.png","dat.png","dat.png","drum.png","drum.png","nope.png","nope.png","pepe.png","pepe.png","please.png","please.png","troll.png","troll.png","why.png","why.png"];
var card = document.getElementsByClassName("card");
var backcard = document.getElementsByClassName("backcard");
var first="";
var second="";
var save ="";
var save2 ="";
var max_card=2;

var background=0;
var rotate = 0 ;

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
        document.getElemenById("win").style.display="none";

        //resetting
        tries = 0 ;
        score = 0 ;
        first="";
        second="";
      }

      function resetMaxCard(){
        //set count to 0 to permit player to click on cards
        max_card=0;
      }

      //function to show cards if user is losing to show him the full deck
      function rotateCardEnd(){

        backcard[rotate].style.transform = "rotateY(90deg)";
        //going to the next card
        rotate++;

        //stopping the timer
        if (rotate===card.length){
          clearTimeout(id4);
          rotate = 0;
        }
        else{
          id4=setTimeout(rotateCardEnd,100);
        }
      }

      function rotateCardStart(){
        backcard[rotate].style.transform = "rotateY(0deg)";
        //going to the next card
        rotate++;
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

    //for the first choice
    if (first===""){
      first = deck_list[n];
      save=n;
    }

    //next step
    else {
      second = deck_list[n];
      save2=n;
      //comapring the 2 choices
      id = setTimeout(check,800);
    }
    max_card++;
  }
}

function check(){
  if (first != second){
    //when it's different
    backcard[save].style.transform = "rotateY(0deg)";
    backcard[save2].style.transform = "rotateY(0deg)";
  }

  //reset cards
  first="";
  max_card=0;
}
