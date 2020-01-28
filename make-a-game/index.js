document.querySelector('.box');













const dice = {
    'letter': ["A", "A", "E", "E", "G", "N"],
    'letter': ["A", "B", "B", "J", "O", "O"],
    'letter': ["A", "C", "H", "O", "P", "S"],
    'letter': ["A", "F", "F", "K", "P", "S"],
    'letter': ["A", "O", "O", "T", "T", "W"],
    'letter': ["C", "I", "M", "O", "T", "U"],
    'letter': ["D", "E", "I", "L", "R", "X"],
    'letter': ["D", "E", "L", "R", "V", "Y"],
    'letter': ["D", "I", "S", "T", "T", "Y"],
    'letter': ["E", "E", "G", "H", "N", "W"],
    'letter': ["E", "E", "I", "N", "S", "U"],
    'letter': ["E", "H", "R", "T", "V", "W"],
    'letter': ["E", "I", "O", "S", "S", "T"],
    'letter': ["E", "L", "R", "T", "T", "Y"],
    'letter': ["H", "I", "M", "N", "U", "Qu"],
    'letter': ["H", "L", "N", "N", "R", "Z"],
    //remember to allow for two letters in "Qu"
}

const letters = Array.fromCharCode(65 + 90);
//this is nothing, i tried to bind an array of letters by using unicode references
//the idea now is to make an array that can be iterated over to give the characters value
//might also have to look into the math behind boggle, and do a math thing representing the proportions of each letter
//within the boggle board.
//YIKES. reading into it now

//i'm back. helpful link for myself: https://boardgames.stackexchange.com/questions/29264/boggle-what-is-the-dice-configuration-for-boggle-in-various-languages
//yeah, i'm just gonna make a "dice" component and let it get real ugly in there
const boggleEmUp = boggleEmUp() => {
    let
    //this one's gonna be the thing that happens when you shake up the boggle
}

const areTheyTouching = areTheyTouching() => {
    //this one's going to figure out how far the tiles are from each other, to see if the rules check out
}