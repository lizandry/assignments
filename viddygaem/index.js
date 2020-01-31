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

let randomLetter = [];
let boggleIt = document.getElementById('boggleIt');
let dies = document.getElementsByClassName('die');
let box = document.getElementById('dice-box');


//adds one random element from each array into a new (also random) array
//dependency: shuffle()
function boggleEmUp(diceArray) {
    let sides = 6;

    //we want to make things as random as possible
    diceArray = shuffle(diceArray);
    for (i = 0; i < diceArray.length; i++) {
        //returns 0-5
        let a = Math.floor(Math.random() * (sides));
        randomLetter.push(diceArray[i][a]);
    }

    //this prints the letters into the dice containers
    if (randomLetter !== 0) {
        for (i = 0; i < randomLetter.length; i++) {
            dies[i].innerHTML = randomLetter[i];
        }
    }
    //makes the boggle button disappear, to prevent errors from clicking it again
    //clearing out the randomLetter array after calling it would
    boggleIt.style.visibility = 'hidden'
    return randomLetter;
}




// const areTheyTouching = areTheyTouching() => {
//     //this one's going to figure out how far the tiles are from each other, to see if the rules check out
// }

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