/* HW_1

let country = `Moldova`; 
let continent = `Europe`; 
let population = 2.6; 
console.log(country);
console.log(continent);
console.log(population);
let isIsland = false;
let countryDescription = `${country} is located in ${continent}, ${population} million people live here.`;
console.log(isIsland); 
console.log(countryDescription);  */

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

