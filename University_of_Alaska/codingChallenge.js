const between10And20 = (num) => {
    // Handles if something besides a number is entered:
    if (typeof num !== "number") return "Please enter a valid number.";

    // Checks for numbers outside of the range 10-20.
    // Returns false when outside the range and true when inside the range.
    if (num < 10 || num > 20){
        return false;
    } else {
        return true;
    };
};

console.log(between10And20(9))
console.log(between10And20(10))
console.log(between10And20(15))
console.log(between10And20(20))
console.log(between10And20(21))
console.log(between10And20("49"))
console.log(between10And20("University of Alaska"))


const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    const anagramLetters = {};

    // Handles difference in upper and lower case:
    let upper1 = str1.toUpperCase();
    let upper2 = str2.toUpperCase();

    for (let letter of upper1) {
        // Assigns the letters of the first string to an object:
        if (letter in anagramLetters) {
            anagramLetters[letter] += 1;
        } else {
            anagramLetters[letter] = 1;
        };
    }

    for (let letter of upper2) {
        // Removes letters from the object. If a letter is not in the object,
        // it cannot be removed and is therefore not an anagram of the first string.
        if (letter in anagramLetters) {
            anagramLetters[letter] -= 1;
        } else {
            return false;
        };
    }

    return true;
};

console.log(isAnagram("University of Alaska", "Alaska of University"))
console.log(isAnagram("University of Alaska", "Alaska of university"))
console.log(isAnagram("Nanook", "Nanuq"))
console.log(isAnagram("Nanook", "Nook"))
console.log(isAnagram("ant", "tan"))
console.log(isAnagram("apple", "plaep"))
console.log(isAnagram("Seawolf", "wolfsea"))
