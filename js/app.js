"use strict"
/*
 * Create a list that holds all of your cards
 */

var cards = [...document.querySelectorAll(".card")];
var selCards = [];
var i = 0;
var count = 0;
var revcount = 0;
var firstClick = true;
var reload = document.querySelector(".restart");
var sec = 0;
var min = 0;
var nansec = 0;
var shfcards = shuffle(cards);
var dec = document.querySelector(".deck");
var x;


// EventListners are added to every card in the list cards
while (i < cards.length) {
  cards[i].addEventListener("click", revealCard);
  i++;
}

/* A reload event is added to the reload button in th html files
 * an instance of that reload button is created in js
*/

reload.addEventListener("click", () => {
  window.location.reload(true);
});

/*
 * A reveal function is added to the cards when it is clicked
 * if the click is the firstClick of th game then the game timer is started
 * all the cards clicked are flipped upto 2 with a time lasp of 250 ms
 * A counter is used increment no of clicks
*/
function revealCard() {
  if (firstClick == true) {
    startTimer();
    firstClick = false;
  }
  this.classList.add("open", "show", "unchan");
  selCards.push(this);
  if (selCards.length == 2) {
    setTimeout(check, 250);
    counter();
  }
}

/*
 * A check function is used to check the two cards that are opened are same or not
 * if the cards are matched then they remain revealed
 * else they are closed
*/
function check() {
  if (selCards[0].children[0].className == selCards[1].children[0].className) {
    revcount++;
    selCards[0].classList.add("match");
    selCards[1].classList.add("match");
  } else {
    selCards[0].classList.remove("open", "show", "unchan");
    selCards[1].classList.remove("open", "show", "unchan");
  }
  selCards = [];
}

/*
 * A counter is added to the html moves attribute
 * it counts no of revealed cards
 * based on given conditions starts are decreased
*/
function counter() {
  count++;
  document.querySelector(".moves").innerHTML = count;
  if (count > 10) {
    document.querySelector(".stars").children[2].children[0].className = "fa fa-star-o";
  }
  if (count > 20) {
    document.querySelector(".stars").children[1].children[0].className = "fa fa-star-o";
  }
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// This section shuffle the list of cards in shfcards again adds to the same list
shfcards.map(()=>{
  [].forEach.call(cards, (list)=>{
    dec.appendChild(list);
  })
});


function startTimer() {
  var int = setInterval(function() {
    nansec++;
    if (nansec == 100) {
      nansec = 0;
      sec++;
    }
    if (sec == 60) {
      min++;
    }
    if(revcount == 8){
      clearInterval(int);
      displayEnd();
    }
    document.querySelector(".timer").innerHTML = min + ":" + sec + ":" + nansec;
  }, 10);
}

function displayEnd() {
  if (count > 10) {
    x = "⭐ ⭐";
  }
  else if (count > 20) {
    x = "⭐";
  }
  else {
    x = "⭐ ⭐ ⭐";
  }
  swal({
    title: "Congratulations",
    type: "success",
    text: "Rating" + x +"\n Moves: "+ count +"\n Time: "+min+" minutes "+sec+" seconds "+nansec+" nano seconds",
    confirmButtonText: "Play Again"
    },
    function reload() {
      window.location.reload();
    })
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
