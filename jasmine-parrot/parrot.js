class Parrot {
    constructor(nickName = 'A nameless Parrot') {
        this.nickName = nickName;
    }
    speak(nickName) {
        return `${this.nickName} want a cracker!`;
    }
}
class ApprenticeParrot extends Parrot {
    constructor(sleepiness) {
            super();
            this.sleepiness = 0;
        }
        //it's at least broken in a way that suggests something's happening inside
        //i'll circle back later
    speak() {
        if (this.sleepiness < 3) {
            this.sleepiness++;

            return '😴';

        } else return super.speak();
    }
}

let polly = new Parrot("Polly");
console.log(polly.speak());
// return "Polly want a cracker!"

let apprentice = new ApprenticeParrot("Meg");
console.log(apprentice.speak());
console.log(apprentice.speak());
console.log(apprentice.speak());
console.log(apprentice.speak());
// return "😴"

const me = new ApprenticeParrot("liz");
constructor
me.speak();
// return "😴"

if (typeof module != 'undefined') {
    module.exports = { Parrot, ApprenticeParrot }
}