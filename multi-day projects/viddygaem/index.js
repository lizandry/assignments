//these are the contents of the actual boggle game
const dice = [
    ['A', 'A', 'E', 'E', 'G', 'N'],
    ['A', 'B', 'B', 'J', 'O', 'O'],
    ['A', 'C', 'H', 'O', 'P', 'S'],
    ['A', 'F', 'F', 'K', 'P', 'S'],
    ['A', 'O', 'O', 'T', 'T', 'W'],
    ['C', 'I', 'M', 'O', 'T', 'U'],
    ['D', 'E', 'I', 'L', 'R', 'X'],
    ['D', 'E', 'L', 'R', 'V', 'Y'],
    ['D', 'I', 'S', 'T', 'T', 'Y'],
    ['E', 'E', 'G', 'H', 'N', 'W'],
    ['E', 'E', 'I', 'N', 'S', 'U'],
    ['E', 'H', 'R', 'T', 'V', 'W'],
    ['E', 'I', 'O', 'S', 'S', 'T'],
    ['E', 'L', 'R', 'T', 'T', 'Y'],
    ['H', 'I', 'M', 'N', 'U', 'Qu'],
    ['H', 'L', 'N', 'N', 'R', 'Z'],
]

let randomLetters = [];
let score = 0
let scoreField = document.getElementById('scoreField');
let boggleIt = document.getElementById('boggleIt');
let dies = document.getElementsByClassName('die');
let box = document.getElementById('dice-box');
let letterField = document.getElementById('letterField');
let checkedWords = document.getElementById('checkedWords');



//adds one random element from each array into a new (also random) array
//dependency: shuffle()
function boggleEmUp(diceArray) {
    let sides = 6;

    //we want to make things as random as possible
    diceArray = shuffle(diceArray);
    //randomly selects an element from each array, mimicking the roll of a 6-sided die
    for (let eachDie of diceArray) {
        let a = Math.floor(Math.random() * (sides));
        randomLetters.push(eachDie[a]);
    }

    //this prints the letters into the dice containers
    if (randomLetters !== 0) {
        for (i = 0; i < randomLetters.length; i++) {
            dies[i].innerHTML = randomLetters[i];
        }
    }
    //makes the boggle button disappear, to prevent errors from clicking it again
    //clearing out the randomLetters array after calling it would be a lot of work
    boggleIt.style.visibility = 'hidden'
    return randomLetters;
}

//adds the letter on the clicked die to word field
//i'm trying to get functionality so the buttons stay clicked
function clicked(i) {
    //die[i].disabled = true;
    letterField.innerHTML += randomLetters[i];
    die[i].disabled = true;
}

//there isn't a dictionary check
//but you'll never know, if you're playing by the rules
//this changes the score
function dictionaryCheck() {
    if (letterField.innerHTML.length < 3) {
        letterField.innerHTML = '';
        alert('a word must be 3 letters or more');

    } else
        checkedWords.innerHTML += `${letterField.innerHTML}, `;
    score += letterField.innerHTML.length;
    letterField.innerHTML = '';
    scoreField.innerHTML = score;

}
//letter selection & storage & color change
//check if they're touching
//dictionary stretch goal
//
//
//
//this one seems like so much work
function areTheyTouching() {

    //this one's going to figure out how far the tiles are from each other, to see if the rules check out
}



//i genked Durstenfeld shuffle algorithm for this one. and... spent an hour fixing it?
//shuffles the order of the input array elements
//boggleEmUp() uses it
function shuffle(array) {
    let randomArray = [];
    for (i = array.length - 1; i > -1; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        randomArray.push(array[i])
    }

    return randomArray;
}