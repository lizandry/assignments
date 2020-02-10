class BoggleBoard {
    constructor() {
        this.randomLetters = []; //16 letters
        this.usedWords = []; //might want this for dictionary reasons

        this.dice = [
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
            ['H', 'L', 'N', 'N', 'R', 'Z']
        ]; //these are the contents of the actual boggle game
    }
    boggleEmUp(diceArray) {
        //adds one random element from each array into a new (also random) array
        //dependency: shuffle()
        let sides = 6;
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
        boggleIt.style.visibility = 'hidden'
        return randomLetters;
    }

    shuffle(array) {
        // Durstenfeld shuffle algorithm
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
    clicked(i) {
        console.log(this.randomLetters[i])
            //let wordString = '';
            //THE RANDOMLETTERS ARRAY IS ALREADY NUMBERED, EACH ONE IS ONE OF THE DICE, IN ORDER

        //turn a color
        //turn surrounding tiles a color
        //can only click one of those
        //wordString = wordString.concat()
        this.usedWords.push(wordString);
    }



    areTheyTouching() {

        //this one's going to figure out how far the tiles are from each other, to see if the rules check out
    }
}
class AvailableDice {
    constructor() {

    }

}
class EventRecommender {
    constructor() {
        this.events = [];
        this.users = [];
    }

    addEvent(event) {
        this.events.push(event);
    }
    addUser(user) {
        this.users.push(user);
    }
}
let boggleIt = document.getElementById('boggleIt');
let dies = document.getElementsByClassName('die');
let box = document.getElementById('dice-box');
//onclick new BoggleBoard



//check if they're touching
//dictionary stretch goal