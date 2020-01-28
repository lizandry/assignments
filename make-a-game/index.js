const die0 = ["A", "A", "E", "E", "G", "N"];
const die1 = ["A", "B", "B", "J", "O", "O"];
const die2 = ["A", "C", "H", "O", "P", "S"];
const die3 = ["A", "F", "F", "K", "P", "S"];
const die4 = ["A", "O", "O", "T", "T", "W"];
const die5 = ["C", "I", "M", "O", "T", "U"];
const die6 = ["D", "E", "I", "L", "R", "X"];
const die7 = ["D", "E", "L", "R", "V", "Y"];
const die8 = ["D", "I", "S", "T", "T", "Y"];
const die9 = ["E", "E", "G", "H", "N", "W"];
const die10 = ["E", "E", "I", "N", "S", "U"];
const die11 = ["E", "H", "R", "T", "V", "W"];
const die12 = ["E", "I", "O", "S", "S", "T"];
const die13 = ["E", "L", "R", "T", "T", "Y"];
const die14 = ["H", "I", "M", "N", "U", "Qu"];
const die15 = ["H", "L", "N", "N", "R", "Z"];
//remember to allow for two letters in "Qu"

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