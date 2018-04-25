# Concentration

I made this game as a project for my Front-End Web Development Nanodegree from Udacity. It demonstrates how JavaScript can be used to manipulate the DOM.

## Run live

Run it live at http://concentration.grantiverson.me

### How to play

When you click a card, it will flip over to display a symbol. If you flip over two that match, they will turn green and you can continue looking for another matching pair. If they do not match, they will flip back over. Find all matching pairs to win!

#### Scoring

* 3 stars - 25 moves or less
* 2 stars - 26 to 35 moves
* 1 stars - 36 to 45 moves
* 0 stars - 46 or more moves

## Download

These instructions will allow you to get a copy of the project that runs on your local machine.

### Prerequisites

* [Git](https://git-scm.com/downloads)
* Browser

### Installing

Instructions to clone and run the project:
1. Clone the git project using `$ git clone https://github.com/grantiverson/concentration.git`
2. Navigate to the root directory for the project
3. Open index.html in your favorite browser

## Built with

* [Atom](https://atom.io) - Text Editor
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Markup Language
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) - Styling
* [JavaScript ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming Language
* [Google Chrome](https://www.google.com/chrome/) - Browser and Debugging Tool

### How I made this app

I was given the JavaScript files `index.html` and `css/app.css` that provide the skeleton for this application. I modified the CSS to change the colors, add a custom background image, and apply other styling properties to fit my tastes. I also added content to the HTML file to add a rating, move counter, restart button, and timer.

I wrote the code in `js/app.js`. The code in this file generates the cards in a random order and stores them in an array, populates the DOM with the cards, and controls how cards flip when clicked. It also checks whether cards match or not, records the number of moves, and runs a timer. When all matches have been made, the program displays a window with basic statistics about the game and gives the option of playing again.

## Author

* **Grant Iverson** - [GitHub](https://github.com/grantiverson)

### Acknowledgements

`index.html` and `css/style.css` were provided as part of [Udacity's Front-End Web Development Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?gclid=CjwKCAjwq_vWBRACEiwAEReprL6RuGAkBbe7XRljOzu9GYr_zQ70LKtonUz_Qev-z0rf07jmNrZNMRoCF9sQAvD_BwE).
