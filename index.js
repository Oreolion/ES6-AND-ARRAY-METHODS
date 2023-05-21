

// const people = [
//     {firstName: "Sam", lastName: "Hughes", DOB: "07/07/1978", department: "Development", salary: "45000"},
//     {firstName: "Terri", lastName: "Bishop", DOB: "02/04/1989", department: "Development", salary: "35000"},
//     {firstName: "Jar", lastName: "Burke", DOB: "11/01/1985", department: "Marketing", salary: "38000"},
//     {firstName: "Julio", lastName: "Miller", DOB: "12/07/1991", department: "Sales", salary: "40000"},
//     {firstName: "Chester", lastName: "Flores", DOB: "03/15/1988", department: "Development", salary: "41000"},
//     {firstName: "Madison", lastName: "Marshall", DOB: "09/22/1980", department: "Sales", salary: "32000"},
//     {firstName: "Ava", lastName: "Pena", DOB: "11/02/1986", department: "Development", salary: "38000"},
//     {firstName: "Gabriella", lastName: "Steward", DOB: "08/26/1994", department: "Marketing", salary: "46000"},
//     {firstName: "Charles", lastName: "Campbell", DOB: "09/04/1977", department: "Sales", salary: "42000"},
//     {firstName: "Tiffany", lastName: "Lambert", DOB: "05/11/1990", department: "Development", salary: "34000"},
//     {firstName: "Antonio", lastName: "Gonzalez", DOB: "03/24/1985", department: "Office Management", salary: "49000"},
//     {firstName: "Aaron", lastName: "Garrett", DOB: "09/04/1985", department: "Development", salary: "39000"}
// ];

// Exercises
// 1) what is the average income of all the people in the array?
// 2) who are the people that are currently older than 30?
// 3) Get a list of the people's full name (first name and last name)
// 4) Get a list of people in the array ordered from youngest to oldest
// 5) How many people are there in each department.

// exercise 1:
// function averageIncome (accumulator, person) {
//     people.reduce((accumulator, person) => accumulator + parseInt(person.salary), 0)/people.length

// };

// console.log(averageIncome);
// exercise 2:

// function olderThan30 (people) {
//     let currentDate = new Date ()
//     let currentYear = currentDate.getFullYear()
//     let dob = new Date(person.DOB)
//     console.log(dob)
//     let dobYear = dob.getFullYear()

//     people.map(function(currentDate, dob){
//         if (currentDate ) {}
//     })
// }


// ARROW FUNCTION:
// above30 = () => 
//     people.filter(person => new Date().getFullYear() - new Date(person.DOB).getFullYear() > 30)

// console.log(above30(people))

 

// UNDERSTANDING ARRAY METHODS

// THE FILL ARRAY METHOD: It changes the array on which it  is called upon and it also returns that new modified array
const numbers = [1,2,3,4,5];
const num2 = numbers.fill(0)
console.log(numbers)
console.log(num2)
// in the fill method, we can specify the start index as well as the end index
const num3 = numbers.fill(2, 1, 4); // 1 is the start index and 4 is the end index
console.log(num3)

// THE CONCAT ARRAY METHOD: This allows us to match two or more arrays into one new array which will be returned. Note that the initial array remain unchanged. This can be useful for example in a function when we want to take in an array as a parameter but we dont want to change the array, it can be used to create a new copy of that array.
const a1 = [1,2,3]
const b1 = [4,5,6]
const c1 = a1.concat(b1) // it concats or join all the elements inside the two arrays
const d1 = [7,8,9]
console.log(c1)
const e1 = a1.concat(b1,d1)
console.log(e1)
const f1 = a1.concat(b1,d1,c1)
console.log(f1)
console.log(a1) // we still have the initial arrays unchanged.
const g1 = b1.concat(); // when we dont pass in any parameter we get a copy of the b1 array...
console.log(g1) // g1 is therefore the same as b1 but it is a copy of it.
g1.push(7)
console.log(g1) // here g1 is mutated but the b1 remains the same
console.log(b1) // we can also use the concat method as a push method as seen below
const h1 = b1.concat(7,8);
console.log(h1);

// THE INCLUDES ARRAY METHOD: We use this to check if an element is included inside an array. it returns either true or false e.g
const names = ["Florin", "Ivan", "Liam"];
const res = names.includes("Ivan");
const rep = names.includes("Patrick");
console.log(res);
console.log(rep);
// let's see a real time example
const fruits = ["apple", "orange", "mango"];
let isThere = fruits.includes("orange")

if (isThere) {
    console.log("Yaaay")
} else {
    console.log("sad... we need to buy orange")
}

// THE JOIN ARRAY METHOD: This creates a new string from an array by concatinating all the elements from that array, by default it uses comma as a seperator but you can specify what seperator you want to be added between an item

const countries = ["romania", "usa", "india"];
const join = countries.join();
console.log(join);
const join1 = countries.join("-"); // specifying the seperator
console.log(join1);


// THE REVERSE ARRAY METHOD: We use this method to reverse an array where the first element becomes last and the last element becomes the first element. Note that this changes the original array

let number = [1,2,3,4,5];
number.reverse();
console.log(number);
// in order to keep the original array we can use the concat method or spreAd operator then reverse that new copy of the array as seen below:

let number1 = [1,2,3,4,5];
const newArr = number1.concat().reverse();
const myArr = [...number1.reverse()];
console.log(newArr);
console.log(myArr);

// we can also use this to reverse the character inside of a string by first using the split method on the string, reverse it and then use the join method to join it as seen below:
const str = "coding is fun";
const reverse = str.split('').reverse().join("");
console.log(reverse);

// THE EVERY ARRAY METHOD: This executes a given function on every items of an array and returns true only if the callback function returns a true value for all the items in the array, if  false value is found it will return false immediately.

// we are checking if all the numbers are positive
const myNumber = [1,2,3,4,5]; // returns true
const dNumber = [-1,1,2,3,4,5]; //returns false
const result = myNumber.every(isPositive) //it takes in a callback function
 function isPositive(item) {
    return item > 0;
 }

 console.log(result); // returns true as all items are greater than 0

// another example to test an array of object, to check if all the objects in the array have a certain property.

const persons = [
    {
        name: "Florin"
    },
    {
        name: "Ivan"
    },
    {
        name: "Liam"
    },
    {
        surname: "Jai"
    }
];

const dResult = persons.every(person => person.name !== undefined)

console.log(dResult);

// THE SOME ARRAY METHOD: This executes a given function on the elements of an array and returns true if the callback function returns a true value for atleast one element inside of the array, if all the elements returns a false value then the some method returns False.

const newNum = [1,2,3,4,5]; // returns true
const anotherNum = [1,2,3,4]; // returns false
const aresult = newNum.some(greaterThan4)
function greaterThan4 (item) {
    return item > 4;
}

console.log(aresult);

// checking if one person from an array of object is an adult

var dPeople = [
    {
        name: "Florin",
        age: 25
    },
    {
        name: "Ivan",
        age: 20
    },
    {
        name: "Liam",
        age: 16
    }

];

const outcome = dPeople.some(isAdult) // takes a callback function

function isAdult (person) {
    return person.age >= 18;
};

console.log(outcome)

// THE FIND ARRAY METHOD: This search inside of an array and returns the first element for which the caLlback function returns a true value, if it doesn't find one it returns undefined

// we find the name Ivan in the array below

const nameOf = ["florin", "Ivan", "Liam"]
const resultOf = nameOf.find(findIvan) // takes a callback function

function findIvan (name) {
    return name === "Ivan"
}

console.log(resultOf); // it finds and return Ivan from the array.

// another example to find one person from an array of persons and return extra informations about that person

const thePeople = [
    {
        name: "Florin",
        age: 25
    },
    {
        name: "Ivan",
        age: 20
    },
    {
        name: "Liam",
        age: 18
    }

];

let age = thePeople.find(findFlorin).age;

function findFlorin (person) {
    return person.name === "Florin";
};

console.log(age);

// THE FINDINDEX ARRAY METHOD: This is very similar to the find method but the only difference is that the findIndex method will find the element and it returns the index.

const examples = [1,2,3,4,5];

const resultis = number.findIndex(findThree)

function findThree(value) {
    return value === 3;
}

console.log(resultis);


// THE FROM ARRAY METHOD: This creates a new shallow copy array from an array like or iterable object.

// converting a string of numbers to an array of numbers

const ourStr = "1234567";

const resultin = Array.from(ourStr, mapFn);

function mapFn (x) {
    return Number(x)
}

console.log(resultin)

// in arrow function
 arrowFn = Array.from(ourStr, x => Number(x));

 // another example to remove duplicated values from an array

 const numbersArr = [1,2,3,3,2,1,4,4,3,2,1,5]

 const ourOutcome = Array.from(new Set (numbersArr));

 console.log(ourOutcome);


// THE isArray ARRAY METHOD: This checks if the passed value is an array. It lives on the array class

const namelist = ["florin", "Ivan", "Liam"];
const string = "Hello World";
const numberof = 17;

console.log(Array.isArray(namelist));
console.log(Array.isArray(string));
console.log(Array.isArray(numberof));

// THE FLAT ARRAY METHOD: This creates a new array with all the sub arraYs elements concatenated into it. it works recursively up to the specified depth

const myArray = [1,[2, [3,[4]]]]; // we want to flat this into one dimensional or single array

const giveus = myArray.flat(); // what we input in the parenthesis defines our depth for the flat. it's default value is one
console.log(giveus);
const nowgiveus = myArray.flat(3); 
console.log(nowgiveus);

// using flat array method on infinite numbers of nested arrays

const array2 = [1,[2, [3,[4, [5]]]]];
const resultto = array2.flat(Infinity)
console.log(resultto)

