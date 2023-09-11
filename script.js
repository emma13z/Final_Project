// HW-1 //

let country = `Moldova`; 
let continent = `Europe`; 
let population = 2.6; 
console.log(country);
console.log(continent);
console.log(population);
let isIsland = false;
let countryDescription = `${country} is located in ${continent}, ${population} million people live here.`;
console.log(isIsland); 
console.log(countryDescription);  

// HW-2 //

let weightSarah = 65;
let weightBob = 93;
let heightSarah = 1.75;
let heightBob = 1.8

console.log (weightSarah);
console.log (weightBob);
console.log (heightSarah);
console.log (heightBob);

let sarahBMI = weightSarah / (heightSarah**2);
console.log (sarahBMI);

if (sarahBMI < 18.5) {
    console.log('Sarah is underweight');

} else if (sarahBMI >= 18.5 && sarahBMI <= 25) {
    console.log('Sarah has normal weight');
}

let bobBMI = weightBob / (heightBob**2);
console.log (bobBMI);

if (bobBMI <= 18.5 || bobBMI > 25) {
    console.log('Bob is underweight or overweight');

} else {
    console.log('Bob has normal weight');
}

// HW-3 //

// Ternary Operator //

let number = 10;
let isEven = number % 2 === 0 ? "Even" : "Odd";
console.log(number);
console.log(isEven);

let isLoggedIn = false;
let user = isLoggedIn ? "Feel free to check our new offers" : "Please log in first";
console.log(isLoggedIn);
console.log(user);

let pricePerUnit = 20;
let quantity = 5;
let availability = true;
let totalPrice = availability ? pricePerUnit * quantity : "N/A";
console.log(pricePerUnit);
console.log(quantity);
console.log(availability);
console.log(totalPrice);

let currentYear = new Date().getFullYear();
let leapYear = currentYear % 4 === 0 || (currentYear % 400 === 0 && currentYear % 100 === 0) ? "A Leap Year" : "Not A Leap Year";
console.log(currentYear);
console.log(leapYear);

// Switch //

let countryCode = "MD";
switch (countryCode) {
    case "MD":
        console.log("Moldova");
        break;
    case "IN":
        console.log("India");
        break;
    case "IT":
        console.log("Italy");
        break;
    case "US":
        console.log("United States");
        break;
    case "FR":
        console.log("France");
        break;
        default:
    console.log("Unknown country");
}

let grade = "A";
switch (grade) {
    case "A":
        console.log(">=90");
        break;
    case "B":
        console.log(">=80");
        break;
    case "C":
        console.log(">=70");
        break;
    case "D":
        console.log(">=60");
        break;
    case "F":
        console.log("<=59");
        break;
    default:
        console.log("Not a valid grade");
}

// Function //

//tellFortune exercise //

function tellFortune (n, z, y, x) {
    return (`You will be a ${x} in ${y} and will get married to ${z} with ${n} kids`);
}

let person1 = tellFortune (2, 'John', 'London', 'CFO');
console.log(person1);

let person2 = tellFortune (3, 'Jack', 'Madrid', 'PR Specialist');
console.log(person2);

let person3 = tellFortune (4, 'Bob', 'Paris', 'CTO');
console.log(person3);

// Dog's age exercise //

function calculatedDogAge (humanyears, coefficient=7) {
    return (`Your dog is ${humanyears} years old in dog years`);
}

let dog1 = calculatedDogAge (4*7);
console.log(dog1);

let dog2 = calculatedDogAge (6*7);
console.log(dog2);

let dog3 = calculatedDogAge (1*7);
console.log(dog3);

// Calculation Supply //

let calculationSupply = (age, foodQuantity, maxAge=100) => {
let result = (maxAge-age)*foodQuantity*365;
console.log(`You will need ${result} kg of food to survive until you are ${maxAge} years old`);
};

calculationSupply (50, 1, 80);
calculationSupply (30, 2, 90);
calculationSupply (15, 0.5);

