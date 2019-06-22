# Memory Game Project

Memory game is a logical game where all the cards should be revealed in short interval of time, provided with a timer and star rating
at the end the game a popup menu is displayed.

## Table of Contents

-   [Instructions](#instructions)
-   [Contributing](#contributing)
-   [Referencing](#referencing)
-   [How to play](#howtoplay)
-   [Get the Starter Code](#getthestartercode)
-   [Why to play](<#why to play>)
-   [Project Contents](#projectcontents)
-   [Development Strategy](#developmentstrategy)
    ## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## referencing

The scratch code is downloaded from Github repository <https://github.com/udacity/fend-project-memory-Game>
The zip file is download from

## How to Play

The first Click of the game starts the game timer.

Clicking the card reveals the cards, if the second card revealed matches the first then both are stay revealed, else both of them are again closed

If the player reveal all the cards then the game ends with a popup menu displaying stars scored and no of moves used to complete

A refresh button is available to restart the game at any timer

## Get the Starter Code

If you'd like to start from scratch without any files, you are encouraged to do so! You learn the most by developing on your own! But, it can be a bit challenging having to start from scratch, so we do provide a starter project to use.
You can download the starter code through either:

The Memory Game project repository on GitHub <https://github.com/udacity/fend-project-memory-game>

This zipped folder:<https://github.com/udacity/fend-project-memory-game/archive/master.zip>

This starter code has a static, non-interactive version of the project so you can get a jump-start on development.

## Why to play

Memory Games are the basic learning means of present generation childern

Helps in growth of mental abilities

Acquires Logical thinking abilities

## Project Contents

fend-project-memory-game-master
  \-->fend-project-memory-game-master
    \-->CSS
      \-->app.CSS
    \-->img
      \-->geometry2.png
    \-->js
      \-->app.js
    \-->.gitattributes
    \-->.gitignore
    \-->.CONTRIBUTING.md
    \-->index.html
    \-->README.md

## Development Strategy

    * For this project, you will be writing most of your code in js/app.js. Note that it's very important that you plan your project before you start writing any code! Break your project down into small pieces of work and strategize your approach to each one. With these bite-sized amounts, it'll be easier to debug and fix any issues that appear.

    * Feel free to implement your own design workflow, but if you get stuck -- here is a walkthrough to get you up and running!

    * Start by building a grid of cards. The rest of your game's functionality depends on this grid.

    * How many total pairs of cards would you have?

    * Take a quick look at all the HTML elements in index.html. Note the values for their `classattributes`. To manipulate the DOM, you'll be using many of the tools and methods you've learned on these elements (and on those that you will create)

    * Which data structure can you use to store these individual cards? This data structure can represent your entire list of cards, so it might be a good idea to save it to a variable

    * How you would iterate (i.e., loop) over this data structure?

    * Think about how you can create, say, an unordered list (i.e., bulleted list) in HTML from this structure
    Are your cards randomly placed onto the grid? Note that the provided `shuffle()` function takes in an array parameter, and returns a shuffled version of that array

    * Figure out the HTML needed to represent a card. Remember, you have to represent two sides of the card, and the symbols are faced down

    * How can you use CSS properties like transform or opacity to represent the sides of a card?

    * Add the functionality to handle clicks. This should reveal the "hidden" side of each card. Clicking on the first card should turn it over, show the symbol, and remain turned over. Clicking on a different card must also turn it over and show the symbol.

    * Which event are you listening for (hint: you were just reading it)?

    * How can that event affect CSS? Hint: Look at the static page (index.html) provided in the starter code. Pay special attention to the class values on open/shown cards, matched cards, and the rest of the cards (i.e., those without their symbols shown). Which `classListmethods` can you use to change the value of an element's class upon that event happening?

    * Recall what you know about event delegation. Rather than adding an event listener to each individual card (which can be a costly operation), is there a way to add just one to a common parent node? Take a closer look at index.html to see which node that could be
    Toggling cards will happen pretty often in this game. To keep your code clean and DRY, consider refactoring this operation into its own function

    * Work on the matching logic. At this point, your users can flip over cards on the grid! Now the question is: how does your game "know" if a player guesses correctly or incorrectly?

    * Think about how you can temporarily store opened cards. After all, one card turned over needs to be compared to another card turned over. Which data structure would be great to temporarily hold these turned-over cards? Make sure this data structure doesn't hold too many cards! We're only looking for a match between two cards; it wouldn't make sense to store and compare, say, three cards at the same time

    * How can you prevent the user from selecting the same card twice?
    When comparing two different cards for a match, what exactly can you compare? (hint: open up index.html and look at the child of each <li> element)

    * If the two cards match, they stay turned over

    * How does a match affect the class of these cards? (hint: check the class values of the two matched cards in the static index.html file from the starter code)

    * If the two cards do not match, they turn back

    * How does this affect the data structure that temporarily stored these cards?
    All this logic to match cards seems like it'll be used quite often. Consider refactoring the code for checking for a match into its own function

    * Create the winning condition. How does your game “know” if a player has won?

    * Your user should see a modal when the game ends

    * What information can this modal show? See below!

    * Implement additional functionality:
    * Move counter. The game should display the number of moves the player has made
    * Declaring a variable with an initial value 0 is a good start
    * How can you use `innerHTML` to actually display that value?
    * Timer. This timer should start when the player starts a game, and end when the player wins the game
    * Hint: How can `setTimeout()` come into play here?

    * Star rating. The player should begin with a certain number of stars displayed on the screen. The number of moves made during the game should visually decrease this star rating
    `Hint: You'll probably want to build this only after you've build the move counter`

    * Reset button. This should allow the player to reset the entire grid as well as all the above
    * We recommend saving most of the styling until the very end. Allow your game logic and functionality to dictate the styling.
