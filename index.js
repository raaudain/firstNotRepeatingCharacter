// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.


function firstNotRepeatingCharacter(s) {
    const obj = {};
    
    for (let i of s) {
        if (obj[i]) {
            obj[i]++;
        }
        else {
            obj[i] = 1;
        }
    }
    
    for (let i in obj) {
        if (obj[i] === 1) {
            return i;
        }
    }
    
    return "_";
}