const companies = [
    {name: "COmpany One", category: "Finance", start: 1981, end: 2003},
    {name: "COmpany Two", category: "Retail", start: 1992, end: 2008},
    {name: "COmpany Three", category: "Auto", start: 1999, end: 2007},
    {name: "COmpany Four", category: "Retail", start: 1989, end: 2010},
    {name: "COmpany Five", category: "Technology", start: 2009, end: 2014},
    {name: "COmpany Six", category: "Finance", start: 1987, end: 2010},
    {name: "COmpany Seven", category: "Auto", start: 1986, end: 1996},
    {name: "COmpany Eight", category: "Technology", start: 2011, end: 2016},
    {name: "COmpany Nine", category: "Retail", start: 1981, end: 1989},
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]
 
// For Loop
// ForEach
//filter
//map
//sort
//reduce
//FOR LOOP
//We can use the For Loops instead of the array methods list above, but they are often longer and more complex to write .

 
for (let i = 0; i < companies.length; i++) {

    console.log(companies[i])

}

// forEach ARRAY METHOD

companies.forEach(function (company) {

    console.log(company)
    console.log(company.name)

})
 
// The for loop code above is the same with the forEach array method in the code above, where the forEach array method is a shorter and cleaner code.


// FILTER ARRAY METHOD

//FILTER 21 AND OLDER
//using the FOR LOOP Method

//let canDrink = []
//for ( let i = 0; i < ages.length; i++) {
  //  if (ages[i] >= 21) {
  //      canDrink.push(ages[i]) 
 //   }
//}
 

//const canDrink = ages.filter(function (age){

   // if ( age >= 21) {
   //     return true;
   // }
//})

// The for loop code above is the same with the filter array method code above, where the forEach array method is a shorter and cleaner code.

// Arrow Function 

const canDrink = ages.filter(age => age >= 21)
console.log(canDrink);


// Filter retail companies


//const retailCompanies = companies.filter(function (company) {
   // if (company.category === "Retail") {
     //   return true;
   // }
//})

//Arrow Function
const retailCompanies = companies.filter(company => company.category === "Retail")
console.log(retailCompanies) 

//Filter 80s Companies

const eightiesCompanies = companies.filter( company => (companies.start >= 1980 && company.start < 1990))

console.log(eightiesCompanies)


//Filter companies that lasted 10 years or more

const lastTenYears = companies.filter(company => (company.end - company.start >= 10 ))

console.log(lastTenYears)



//MAP ARRAY METHOD: Instead of filtering, this method creates new array from current array.

//Create array of company names

const companyNames = companies.map(function (company) {
    return company.name
})
console.log(companyNames);

//const testMap = companies.map(function (company) {
 //   return `${company.name} [${company.start} - ${company.end}]`
//})

//ARROW FUNCTION
const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
console.log(testMap);

const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2)

    console.log(ageMap)


//SORT ARRAY METHOD; This method compare two or more variables to sort between as done below
//sort companies by start year

//const sortedCompanies = companies.sort(function (company1, company2) {
   // if (company1.start > company2.start) {
   //     return 1;
   // } else {
   //     return -1
   // }
//})

//Arrow function 

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))

console.log(sortedCompanies)

//sort Ages

const sortAges = ages.sort ((a, b) => a - b )

console.log(sortAges)

//REDUCE ARRAY METHOD


//FOR LOOP for Reduce array method.
//let ageSum = 0
//for (i = 0; i < ages.length; i++) {
 //   ageSum += ages[i]
//}

//Using Reduce Method
//const ageSum = ages.reduce(function (total, age) {
   // return total + age
//}, 0)

//Arrow Function

const ageSum = ages.reduce((total, age) => total + age, 0)

console.log(ageSum)

//GET TOTAL YEARS FOR ALL COMPANIES

//const totalYears = companies.reduce(function (total, company) {
   // return total + (company.end - company.start)
//}, 0)


//Arrow function 

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)


console.log(totalYears)



//Combine methods


const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0)


console.log(combined)