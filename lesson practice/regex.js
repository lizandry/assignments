function returnStringMatch(originalString, regexToMatch) {
    return regexToMatch.test(originalString);
}
console.log(returnStringMatch('eventonica', /tonica/));
console.log(returnStringMatch('sandwich', /tonica/));


function replaceMatch(originalString, regexToMatch, replacementString) {
    return originalString.replace(regexToMatch, replacementString);
}
console.log(replaceMatch('a symantec argument ', /symantec/gi, 'semantic'));
console.log(replaceMatch('a sandwich argument', /symantec/gi, 'semantic'));


function deletIng(originalString, regexToMatch) {
    originalString = originalString.replace(regexToMatch, '');
    originalString = originalString.split(' ')
    let newString = [];
    for (let element of originalString) {

        if (element !== '') {
            newString.push(element)
        }
    }
    return newString.join(' ');
}
console.log(deletIng('have fun jumping laughing and crying ingloriously', /\w+ing/g));


function arrayMatizeMe(originalString, separatingCharacter) {
    return originalString.split(separatingCharacter);
}
console.log(arrayMatizeMe('Leah, Russell, Michelle', ','));