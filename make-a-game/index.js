//document.querySelector('.box');











//object is unordered
//array is ordered]

//can loop through an array with i
//can for-in object
//dice[]

const dice = [
        ['A', 'A', 'E,', 'E', 'G', 'N'],
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
        //remember to allow for two letters in 'Qu'
    ]
    // console.log(dice[0]); //-> [ 'A', 'A', 'E,', 'E', 'G', 'N' ]
    // console.log(dice[0][0]); //-> A

function boggleEmUp(diceArray) {
    let sides = 6;
    diceArray = shuffle(diceArray);
    let randomLetter = [];
    console.log(diceArray)
        //console.log(shuffle(diceArray));
        //let dieRandomizer = Math.floor(Math.random() * diceArray.length + 1)
    for (i = 0; i < diceArray.length; i++) {
        //what if i can grab a random number out of the array
        let test = Math.floor(Math.random() * (sides + 1))
            //console.log(test)
            // console.log(diceArray[i]);


    }
}
console.log(boggleEmUp(dice));



// const areTheyTouching = areTheyTouching() => {
//     //this one's going to figure out how far the tiles are from each other, to see if the rules check out
// }

//i genked Durstenfeld shuffle algorithm for this one. and... spent an hour fixing it?

function shuffle(array) {
    let randomArray = [];
    for (i = array.length - 1; i > -1; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        randomArray.push(array[i], i)
    }

    return randomArray;
}
//let testArray = ["a", "b", "c", "d", "e", "f", "g"]
//console.log(shuffle(dice)); //