// OOP
// Create a class Day
// Attribute date, a JS Date object
// Method isTechtonicaDay
// returns true if M-F, false otherwise
// Create a subclass of Day called Holiday
// isTechtonicaDay should return true regardless of day of week
// Create an array of these objects to represent the week beginning with Sunday, 16 Feburary 2020.


// const newWeek = week.map(day => {
//     let tempNum = 16;
//     day = new Day(`Sunday, ${tempNum} Feburary 2020`)
//     tempNum += 1;
//     return day;

// });
class Day {
    constructor(dateString) {
        this.dateString = new Date(dateString);


    }
    isTechtonicaDay(dateString) {
        // okay, i see now that dateString is... an object
        // console.log(this.dateString.getChar(0, 2))
        // console.log(this.dateString.slice(0, 2))
        // console.log(this.dateString[0, 2])
        //console.log(this.dateString.getDay())
        //i give up for now
        console.log(this.dateString.getDay())
        if (this.dateString.getDay() === 0 || this.dateString.getDay() === 6) {
            return false;
        }
        return true;
    }
}
class Holiday extends Day {
    constructor(date) {
        super();
    }
    isTechtonicaDay() {
        return true;
    }
}
const sun = new Day('Sunday, 16 Feburary 2020');
const mon = new Day('Monday, 17 Feburary 2020');
const tue = new Day('Tuesday, 18 Feburary 2020');
const wed = new Day('Wednesday, 19 Feburary 2020');
const thu = new Day('Thursday, 20 Feburary 2020');
const fri = new Day('Friday, 21 Feburary 2020');
const sat = new Day('Saturday, 22 Feburary 2020');
const week = [sun, mon, tue, wed, thu, fri, sat];

console.log(week.map((day) => day.isTechtonicaDay()));
//=>[false, false, true, true, true, true, false]



// FP
// Write a function that creates another function called createPlucker that is very similar to our extractProp method from the previous assessment but that always retrieves the same property name.

// // => [1, 2, 3]
// function createPlucker(funcProp) {
//     return funcProp.map(param => {
//         funcProp.param
//     })

//     // function greaterThan(inputNumber) {
//     if (futureNumber => futureNumber > inputNumber) {
//         return true;
//     } else return false;
//     //   }
//     //   let greaterThan10 = greaterThan(10);
//     //   console.log(greaterThan10(11));
//     //   // → true

//     //     const lengthPlucker = createPlucker('length');
//     // const array = ['a', 'aa', 'aaa'];
//     // console.log(lengthPlucker(array));
//     // // => [1, 2, 3]

//     console.log(test)
//         // returns a function that takes in an array and
//         //   returns an array of the values of each item's property named propName
// }

// const lengthPlucker = createPlucker('length');
// const array = ['a', 'aa', 'aaa'];
// console.log(lengthPlucker(array));
// // // => [1, 2, 3]

// const namePlucker = createPlucker('name');
// const objsWithNames = [{ name: 'Osito', age: 14 }, { name: 'Bella', age: 8 }];
// namePlucker(objsWithNames);
// // // => ['Osito', 'Bella']



// Recursion
// Given data representing files and folders in a filesystem.

// home/
//   desktop/
//     raccoon.jpg
//   .profile
// this represents your .profile file
//   since it's a file (not a folder) it doesn't have any contents
//   but it does have data with the file's data
const dotProfile = {
    name: '.profile',
    data: "alias git...",
    isFolder: false
};

const raccoonPic = {
    name: 'raccoon.jpg',
    data: "101010",
    isFolder: false
};

// this represents your desktop
//   since it's a folder, it has contents which is an array containing
//    either other folders or files
const desktop = {
    name: 'Desktop',
    isFolder: true,
    contents: [raccoonPic]
}

const home = {
    name: 'home',
    contents: [dotProfile, desktop],
    isFolder: true
};

// function containsFileNamed(folder, name) {
//     let result = [];
//     //if (this.isFolder === false){
//     for (let content of folder.contents) {
//         if (content.name === name.name) {
//             // console.log(name.name)
//             // console.log(content.name)
//             result = result.concat(content);

//         }
//     }
//     //}
//     ////for (let nested in folder)    {
//     //// let nestedResult = nested
//     // if (containsFileNamed(folder, name) === true) {
//     //     result = true
//     //     return true;
//     // }
//     //}
//     if (result.length !== 0) { return true }
//     return false;
// }
// Write a function containsFileNamed(folder, name)

//console.log(containsFileNamed(home, desktop));
// // => true

//console.log(containsFileNamed(desktop, '.profile'))
// // => false

// containsFileNamed(desktop, 'raccoon.jpg')
// // => true

//containsFileNamed(home, 'Desktop')
// // => false (because Desktop is a folder, not a file)

// containsFileNamed(home, 'raccoon.jpg')
// // => true
// Promises
// The fetch function provided by the browser returns a Promise. Its API looks like:

// fetch(url) => Promise that resolves with the Response

// Response object has properties, one of which is status (e.g. 200)

// Write a function that takes an array of URLs
// the function should use fetch to request all these URL's immediately, not waiting for any to finish before requesting the next
// Print the status code of each response as soon as it is known
//     const someUrls = [
//         'http://osito.org/bonito',
//         'https://example.com/some/important/path',
//         'https://twitter.com/TackToneEeka'
//     ]

//     function fetchAllUrls(urls) {
//         return fetch(url)
//             .then(res => res.json());

//     }
//     // ....
// }
// Jasmine Testing
// Write Jasmine test cases for the function below. Think of all the possible cases you might need to test.

// function calculateAge(birthDate) {
//     let msDiff = Date.now() - birthDate;
//     let ageDate = new Date(msDiff);
//     return Math.abs(ageDate.getFullYear() - 1970);
// }

// describe("calculateAge()", function() {

//     it("should do something", function() {
//         expect(true).toBe(true);
//     });
//     it("should check that result is equal to a date object subtracted from today's date, divided by milliseconds in a year, then rounded down", function() {
//         expect(calculateAge(3 / 27 / 1990)).toEqual(Math.floor((new Date() - new Date('03/27/1990')) / (1000 * 60 * 60 * 24 * 365)));
//     });
//     it("should not let user's ageDate be the same as a new Date object")
//     expect(ageDate).not.toEqual(new Date());
// });

// HTTP
// What is the difference between a GET request and a POST request?
//GET retrieves information, POST adds information

// Describe why a server responds with 404?
//a 404 error indicates that the server has connected with the client, the client is not lacking any sort of authorization, but the path the client is attempting to access simply does not exist (if the path used to exist but the developer moved its contents, a redirect could be helpful here =]

// A server responds with 599, which you've never seen before. What can you tell about this response even if you don't remember its exact meaning?
//it's a problem on the server end, not the client end