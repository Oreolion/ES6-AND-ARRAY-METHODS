console.log("Hello there");

// Exercise 1: write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100 // almost correctly done

function checkNumber(a, b) {
  if (a === 100 || b === 100 || a + b === 100) {
    return true;
  } else {
    return false;
  }
}

// arrow function
const isEqualto100 = (a, b) => a === 100 || b === 100 || a + b === 100;

console.log(checkNumber(25, 75));
console.log(checkNumber(900, 75));
console.log(checkNumber(50, 50));
console.log(checkNumber(5, 50));

// Exercise 2: Write a Javascript program to get the extension of a file name.

const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

console.log(getFileExtension("index.js"));
console.log(getFileExtension("index.html"));

// Exercise 3: Write a Javascript program to replace every character in a given string with the character following it in the alphabet
//using string.fromCharCode
//using string.charCodeAt

const moveCharsForward = (str) =>
  str
    .split("") //split our string into ar array
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

console.log(moveCharsForward("abcde"));
console.log(moveCharsForward("remy"));

// Exrecise 4: Write a Javascript program to get the current date. Expected output: mm-dd-yyyy, mm/dd/yyyy, dd/mm/yyyy // correctly done

function getCurrentDate(currentDate, month, day, year) {
  currentDate = new Date();
  //console.log(currentDate)
  month = currentDate.getMonth() + 1; // we use +1 because of the index
  day = currentDate.getDate();
  year = currentDate.getFullYear();
  return `${month}/${day}/${year}`;
}
console.log(getCurrentDate());
//console.log(getCurrentDate(12/06/2021))

const formatDate = (date = new Date()) => {
  const days = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${month}/${days}/${year}`;
};

console.log(formatDate());

// Exercise 5: Write a Javascript program to create a new string adding "New!" in front of a given string. If the given string begins with "New!" already then return the original string/ correctly done

function createString(str) {
  var firstSeg = str.indexOf("New!");
  if (firstSeg !== -1) {
    return str;
  } else {
    return str = "New! " + str;
  }
}

console.log(createString("New! here"));
console.log(createString("come"));
console.log(createString("house"));

// arrow function 
const addNew = (str) => str.indexOf("New!") === 0 ? str : `New! ${str}`;

console.log(addNew("shoe"));
console.log(addNew("name"));
console.log(addNew("New! picture"));


// Exercise 6: Write a Javascript program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. The string length must be 3 or more, if not, the original string is returned // almost correct

function newString (str) {
    var first3Character = str.slice(0,3);
    var last3Character = str.slice(-3) // -3 gets the last three characters, note that we didnt specify the end of the slice
  
    if (str.length >= 3) {
        return first3Character + last3Character;
    } else {
        return str;
    }

};

console.log(newString("My rich hommie"));
console.log(newString("rice and beans"));
console.log(newString("ric"));
console.log(newString("ri"));

//arrow function
const makeNewString = (str) => str.length  < 3 ? str : str.slice(0,3) + str.slice(-3);

console.log(makeNewString("abc"));
console.log(makeNewString("abcdef"));
console.log(makeNewString("abc123abc123"));
console.log(makeNewString("ab"));


// Exercise 7: Write a program to extract the first half of a string of even length // correctly done


function firstHalfOfEven (str) {
    if (str.length % 2 === 0) {
        return str.slice(0, str.length/2)
    } else {
        return "Not even length"
    }
}

console.log(firstHalfOfEven("richdude"));
console.log(firstHalfOfEven("richdudes"));
console.log(firstHalfOfEven("wearerichdudes"));

//arrow function

const firstHalf = (str) => str.slice(0, str.length/2);

console.log(firstHalf("temp"));
console.log(firstHalf("temple"));
console.log(firstHalf("temples")); // temples is 7 chars long which is an odd number of seven characters long. the half of it ger rounded to a whole number which and we still get half of the string

// Exercise 8: Write a javascript program to concatenate two strings except their first character // correctly done

function concatLastStrings (str1, str2) {
    let str1First = str1.slice(0,1);
    let str1Last = str1.slice(1);
    let str2First = str2.slice(0,1);
    let str2Last = str2.slice(1);
    return str1Last + str2Last
}

console.log(concatLastStrings("hello", "Remy"));
console.log(concatLastStrings("Rich", "Remy"));
console.log(concatLastStrings("junior", "developer"));
// arrow function

const concatenate = (str1, str2) => 
    str1.slice(1) + str2.slice(1)


console.log(concatenate("abc", "def"));
console.log(concatenate("junior", "developer"));


// Exercise 9: Given two values, write a javascript program to find out which one is nearest to 100 // correctly done

function nearestTo100 (number1, number2) {
    let number1CloseTo100 = 100 - number1 ;
    let number2CloseTo100 = 100 - number2 ;
    if (number1CloseTo100 < number2CloseTo100) {
        return number1
    } else {
        return number2
    }
}

console.log(nearestTo100(45, 90));
console.log(nearestTo100(80, 20));
console.log(nearestTo100(5, 6));
console.log(nearestTo100(10, 20));

// arrow function

const closestTo100 = (a, b) => (100 - a) < (100 - b) ? a : b;

console.log(closestTo100(99, 1));
console.log(closestTo100(49, 51));
console.log(closestTo100(5, 6));

// exercise 10: Write a javascript program to check a given string contains 2 to 4 occurences of a specified character

function checkOccurence (str) {
    let chars = str.split("")
    if (str[chars] === 2 && str[chars] === 4) {
        return true
    }

} // not correct

console.log(checkOccurence("ade remy oreo"));

// arrow function 
const countChars = (str, char) => 
    str.split("").filter(ch => ch === char).length;

const contains2to4 = (str, char) => 
    countChars (str, char) >= 2 && countChars(str, char) <= 4;


    console.log(contains2to4("ade remy oreo", "o"));
    console.log(contains2to4("ade remy oreo", "e"));
    console.log(contains2to4("ooooh", "e"));
    console.log(contains2to4("ooooh", "o"));
    console.log(contains2to4("oooooh", "o"));

// Exercise 11: Write a program to find the number of even digits in an array of integers

function findEvenDigits (arr) {
    // myArray = [];
    
     arr.filter(function (number) {
        number % 2 === 0 
            
    }).length
    //return evenDigits.length
} // not correct


 console.log(findEvenDigits([2,5,7,34,22, 45, 12]))

// arrow function

const countEventNumbers = (arr) => 
    arr.filter(num => num % 2 === 0).length;

    console.log(countEventNumbers([2,5,7,34,22, 45, 12]));
    console.log(countEventNumbers([1,2,3,4,5,6]));
    console.log(countEventNumbers([3,5,7,9,10,100]));


// Exercise 12: Write a program to find the number of even values up to a given number

const countEvenNumbers = (arr) => 
    arr.filter(num => num % 2 === 0).length;

const createArrayOfNumbers = (num) => {
    const returnArray = [];
    for (let i = 1; i <= num; i++) {
        returnArray.push(i);
    }
    return returnArray;
}

console.log(createArrayOfNumbers(6));
console.log(countEvenNumbers(createArrayOfNumbers(6)));
console.log(createArrayOfNumbers(30));
console.log(countEvenNumbers(createArrayOfNumbers(30)));

// Exercise 13: Write a Javascript program to check whether a given array of integers is sorted in ascending order

// function checkAscending (arr) {
//     Array.filter(function (number) {
//             if (number++) {
//             return true
//         }
//     })
// }

//console.log(checkAscending([1,2,3,4,5,6]))

//arrow function

const isAscending = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i+1] < arr[i]) return false;
    }
    return true;
}

console.log(isAscending ([1,2,3,4,5,6]));
console.log(isAscending ([6,5,4,4,2,1]));
console.log(isAscending ([1,2,5,4,3,6]));

// Exercise 14: Write a javascript program to get the largest even number from an array of integers

// function largestEvenNumber (arr) {
//     Array.filter(function(number) {

//     })
// }

const largestEven = (arr) => Math.max(...arr.filter(num => num % 2 === 0)); // Math.max helps to find the largest number in a collection

console.log(largestEven([1,2,3,4,5,6]));
console.log(largestEven([1,2,33,4,5,6]));
console.log(largestEven([1,2,3,44,55,6]));

// Exercise 15: write a javascript program to replace the first digit in a string (should contain atleast a digit) with $ character.

// function replaceFirstDigit (str) {
//     str.splice(i, )
// }

// arrow function
const replaceFirstDigit = (str) => str.replace(/[0-9]/, "$");


console.log(replaceFirstDigit("Abcd1Abcde"));
console.log(replaceFirstDigit("A123Abcde"));
console.log(replaceFirstDigit("A1cd1Abcd1")); 


// Exercise 16: Given a year, report if it is a leap year. note that leap year is a year divisible by 4 without a remainder

function isALeapYear (year) {
    const date = new Date()
    const getYear = date.getFullYear()

    
}

// arrow function

const isLeapYear = (year) => year % 4 === 0;

console.log(isLeapYear(2014));
console.log(isLeapYear(2015));
console.log(isLeapYear(2016));
console.log(isLeapYear(2017));

// exercise 17: Write a javascript program to compare two objects to determine if the first one contains the same properties as the second one (which may also have additional properties)

const objA = {a: 1, b: 2, c: 1};
const objB = {a: 1, b: 1, c: 1};
const objC = {a: 1, b: 1, d: 1};

// arrow function

const objectsEqual = (a, b) =>
    Object.keys(a).every(key => b[key]);

console.log(objectsEqual(objA, objB));
console.log(objectsEqual(objA, objC));
console.log(objectsEqual(objB, objC));

// exercise 18: Write a javascript program to convert a comma-seperated values (csv) string to a 2D array. A new line indicates a new row in the array.

// examples: 
// abc, def, ghi
// jkl, mno, Pqr
// stu, vwx, yza

// arrow function

const parseCSV = (csvString) => 
    csvString.split("\n").map(row => row.split(','));

const str = `abc, def, ghi
jkl, mno, Pqr
stu, vwx, yza`;

console.log(parseCSV(str));

// exercise 19: Write a javascript program to generate a random hexadecimal color code.

const getRandomHexNumber = () =>
    Math.floor(Math.random()*16).toString(16); // .toString(16) helps to convert our number into a string and the string into an hexadecimal string because we are dealing with base 16 numbers. it therefore converts numbers larger than 10 into hexadecimal numbers

const getRandomHexColor = () => "#" + Array.from({length: 6}).map(getRandomHexNumber).join('');

console.log(getRandomHexColor());
console.log(getRandomHexColor());
console.log(getRandomHexColor());

// exercise 20: Write a javascript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

//arrow function

const isEveryElement = (arr, fn) => {
    for (let i = 0; i<arr.length; i++) {
        if (!fn(arr[i])) {
            return false;
        }
    }
    return true;
};

console.log(isEveryElement([1,2,3,4,5], (x) => x >0));
console.log(isEveryElement([1,2,3,4,5], (x) => x >3));


// using every high order function

console.log([1,2,3,4,5].every(x => x >0));
console.log([1,2,3,4,5].every(x => x >3));

// exercise 21: Write a javascript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster'
// Expected output: 'abeemrstw'

const alphaabeticalOrder = (str) =>
    str.split('')
    .sort((a,b) => a > b ? 1 : -1)
    .join("");

    console.log(alphaabeticalOrder("webmaster"));
    console.log(alphaabeticalOrder("javascript"));


// exercise 22: Write a javascript function that accepts a string as a parameter and counts the number of vowels within the string

// function countVowels (str) {
//     let vowels = ["a", "e", "i", "o", "u"]
//     let newStr = str.split("")
//     let vowelCount;
//     vowelCount = newStr.filter(function(s) {
//         if ([vowels] === [newStr]) {
//             return s
//         } 
//     })
//     console.log(s)
//     return vowelCount.length
// }
 
// console.log(countVowels("halleluyah"))
// console.log(countVowels("aderemyoreo"))

// arrow function
const countLetters = (
    str, letters = ["a","e","i","o","u"]) => str
    .split("")
    .filter(s => letters.indexOf(s) > -1)
    .length;
    
console.log(countLetters("halleluyah"));
console.log(countLetters("aderemyoreo"));
console.log(countLetters("abcde"));
console.log(countLetters("abcde", ["c"])); // when we add a second argument then we are passing a new default parameter which overwrites the default parameter stated in our function.


// exercise 23: Write a javascript function to convert an amount to coins.
//  example input: 46 and possible coins 25, 10, 5, 2, 1. output: 25, 10, 10, 1;

// arrow function
const countCoins = (money, coins = [25, 10, 5, 2, 1]) => 
{

    const totalCoins = [];
    for (let i = 0; i < coins.length; i+=1) {
        const thisCoinNum = Math.floor(money/coins[i]);
        for (let y = 0; y < thisCoinNum; y+=1) {
            totalCoins.push(coins[i]);
        }
        money -= coins[i] * thisCoinNum;
    }
    return totalCoins;

}
console.log(countCoins(46));

//  Exercise 24: Write a javasript function to extract unique characters from a string.

// arrow function

const getUniqueChars = (str) => 
    str.split("").filter(
        (item, index, arr) => 
            arr.slice(index + 1).indexOf(item) === -1
    )

console.log(getUniqueChars("aaaabbbccc"));


//  Exercise 25: Write a javascript function to find the first not repeated character
// example string: "abacddbec"
// expected output: "e"

// arrow function:
const getNonRepeatedChars = (str) => 
        str.split("")
        .filter((item, index, arr) => 
            arr.filter(arrItem => arrItem === item).length === 1
        );

console.log(getNonRepeatedChars("abacddbec"));