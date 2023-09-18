// // HW-1 //

// let country = "Moldova"; 
// let continent = "Europe"; 
// let population = 2.6; 
// console.log(country);
// console.log(continent);
// console.log(population);
// let isIsland = false;
// let countryDescription = `${country} is located in ${continent}, ${population} million people live here.`;
// console.log(isIsland); 
// console.log(countryDescription);  

// // HW-2 //

// let weightSarah = 65;
// let weightBob = 93;
// let heightSarah = 1.75;
// let heightBob = 1.8

// console.log (weightSarah);
// console.log (weightBob);
// console.log (heightSarah);
// console.log (heightBob);

// let sarahBMI = weightSarah / (heightSarah**2);
// console.log (sarahBMI);

// if (sarahBMI < 18.5) {
//     console.log("Sarah is underweight");

// } else if (sarahBMI >= 18.5 && sarahBMI <= 25) {
//     console.log("Sarah has normal weight");
// }

// let bobBMI = weightBob / (heightBob**2);
// console.log (bobBMI);

// if (bobBMI <= 18.5 || bobBMI > 25) {
//     console.log("Bob is underweight or overweight");

// } else {
//     console.log("Bob has normal weight");
// }

// // HW-3 //

// // Ternary Operator //

// let number = 10;
// let isEven = number % 2 === 0 ? "Even" : "Odd";
// console.log(number);
// console.log(isEven);

// let isLoggedIn = false;
// let user = isLoggedIn ? "Feel free to check our new offers" : "Please log in first";
// console.log(isLoggedIn);
// console.log(user);

// let pricePerUnit = 20;
// let quantity = 5;
// let availability = true;
// let totalPrice = availability ? pricePerUnit * quantity : "N/A";
// console.log(pricePerUnit);
// console.log(quantity);
// console.log(availability);
// console.log(totalPrice);

// let currentYear = new Date().getFullYear();
// let leapYear = currentYear % 4 === 0 || (currentYear % 400 === 0 && currentYear % 100 === 0) ? "A Leap Year" : "Not A Leap Year";
// console.log(currentYear);
// console.log(leapYear);

// // Switch //

// let countryCode = "MD";
// switch (countryCode) {
//     case "MD":
//         console.log("Moldova");
//         break;
//     case "IN":
//         console.log("India");
//         break;
//     case "IT":
//         console.log("Italy");
//         break;
//     case "US":
//         console.log("United States");
//         break;
//     case "FR":
//         console.log("France");
//         break;
//         default:
//     console.log("Unknown country");
// }

// let points = "65";
// switch (true) {
//     case points >=90:
//         console.log("A");
//         break;
//     case points >=80:
//         console.log("B");
//         break;
//     case points >=70:
//         console.log("C");
//         break;
//     case points >=60:
//         console.log("D");
//         break;
//     case points <=59:
//         console.log("F");
//         break;
//     default:
//         console.log("Not a valid grade");
// }

// // Function //

// //tellFortune exercise //

// function tellFortune (n, z, y, x) {
//     return (`You will be a ${x} in ${y} and will get married to ${z} with ${n} kids`);
// }

// let person1 = tellFortune (2, "John", "London", "CFO");
// console.log(person1);

// let person2 = tellFortune (3, "Jack", "Madrid", "PR Specialist");
// console.log(person2);

// let person3 = tellFortune (4, "Bob", "Paris", "CTO");
// console.log(person3);

// // Dog's age exercise //

// function calculatedDogAge (humanYears, coefficient=7) {
//     let dogAge = humanYears*7;
//     console.log(`Your dog is ${dogAge} years old in dog years`);
// };
// calculatedDogAge (4);
// calculatedDogAge (6);
// calculatedDogAge (1);

// // Calculation Supply //

// let calculationSupply = (age, foodQuantity, maxAge=100) => {
// let result = (maxAge-age)*foodQuantity*365;
// console.log(`You will need ${result} kg of food to survive until you are ${maxAge} years old`);
// };
// calculationSupply (50, 1, 80);
// calculationSupply (30, 2, 90);
// calculationSupply (15, 0.5);

// // HW-4 //

// // Ex-1 //

// let fruits = [];
// fruits.push("apple","banana","orange");
// console.log(fruits.length);
// console.log(fruits);

// // Ex-2 //

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// let removedNo1 = numbers.pop();
// console.log(numbers);

// let removedNo2 = numbers.shift();
// console.log(numbers);

// // Ex-3 //

// let colors = ["red", "green", "blue", "yellow"];
// let index = colors.indexOf("green");
// let hasOrange = colors.includes("orange");

// console.log(colors);
// console.log(index);
// console.log(hasOrange);

// // Ex-4 //

// let names = ["John", "Jane", "Mike", "Jennifer"];
// console.log(names);

// names.unshift ("David");
// console.log(names);

// let index2 = names.indexOf ("Mike");
// console.log(index2);

// // Ex-5 //

//  let numbers2 = [2, 4, 6, 8, 10];
//  console.log(numbers2);

//  let hasNo5 = numbers2.includes(5);
//  console.log(hasNo5);  

//  numbers2.push(12);
//  console.log(numbers2);

// // Ex-6 //

// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// console.log(months);

// // Ex-8 //

// let monthsSliced = months.slice(6,11);
// console.log(monthsSliced); 

// // Ex-6 //

// months.sort();
// console.log(months);

// // Ex-7 //

// let monthsFiltered = months.filter((month) => month.length >3 );
// console.log(monthsFiltered);

// // Ex-9 //

// let monthsFinal= months.filter((month) => month.length >5 );
// console.log(monthsFinal);
// console.log(monthsFinal.join('-'));

// HW-5 //

// Ex-1 //

let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Ex-2 //

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

// Ex-3 // 

let names = ["John", "Jane", "Mikhael", "Jennifer", "Bobby"];
let namesLength = [];
for (let i = 0; i < names.length; i++) {
    namesLength.push(names[i].length);
}
console.log(namesLength);

// Ex-4 // 

let departments = [
  ["Bob", "Steve"],
  ["Kate", "Ronny", "Louis"],
  ["Jacob", "Mickey", "David", "Polly"],
  ["Paula", "Olivia"],
];

let employeesNames = [];

for (let i = 0; i < departments.length; i++) {
    for (let j = 0; j < departments[i].length; j++) {
      console.log(departments[i][j]);
      employeesNames.push(departments[i][j]);
    }
}
employeesNames.sort;
console.log(employeesNames);
    
// Ex-5 //

let person = {
     firstName: "John",
     lastName: "Doe",
     age: 30,
     profession: "Developer"
}
let keys = Object.keys(person);
console.log(keys.length);

// Ex-6 // 

let arrayNumbers = [];
let n = 5;
for (let i = 1; i <= n; i++) {
    arrayNumbers.push(i);
}
console.log(arrayNumbers);

// Ex-7 //

let numbers1 = [10, 25, 13, 144, 74];
let theBiggestNumber = numbers1[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers1[i] > theBiggestNumber) {
        theBiggestNumber = numbers1[i];
    }   
}
console.log(theBiggestNumber);

// Ex-8 //

let grades = {
    math: 7,
    english: 9,
    chemistry: 10,
    physics: 7
}
let total = 0;

for(let subject in grades) {
    total += grades[subject];
}
let avg = total / Object.keys(grades).length;
console.log(avg);

// Ex-9 //
 
let dog = new Object();
dog.name = "Mickey";
dog.age = 2;
dog.color = "white";

function addPuppies(dog, numberPuppies) {
    dog.puppies = [];
    for (let i = 1; i <= numberPuppies; i++){
        dog.puppies.push(`Puppy_${i}`);
    }
}
addPuppies(dog,5);
console.log(dog);
