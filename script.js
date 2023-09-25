// HW-6 //

 // Ex-1 //

 let myObject = {
    name: "John", 
    age: 30, 
    city: "New-York"
}
const method = (myObject) => {

let keys = Object.keys(myObject);
let i = 0;
while (i < keys.length) {
  let key = keys[i];
  console.log(`${key}: ${myObject[key]}`);
  i++;
}
 }
method(myObject);

// Ex-2 //

let key = "name";

const findKey = (myObject, key) => {
for (let k in myObject) {
    if (k == key) {
        return true;
    }   
}
    return false;
}
console.log(findKey(myObject,key));

// Ex-3 //

let initialObject = { prop1: "Hello", prop2: "World", prop3: "!" };

function concatenateWords(obj) {
    let objKeys = Object.keys(obj);
    let result = ''; 
    let i = 0;
    do {
      let currentKey = objKeys[i];
      let currentValue = initialObject[currentKey];
      result += currentValue;
      i++;
    } while (i < objKeys.length); 

    return result;
} 
console.log(concatenateWords(initialObject));

// Ex-4 //

const getAmount = (str) => {
    let lowerStr = str.toLowerCase();
    let vowels = ["a", "e", "i", "o", "u", "y"];
    let i = 0;
    let vowelsAmount = 0;

    while (i<str.length) {
        if (vowels.indexOf(lowerStr[i]) !== -1) {
            vowelsAmount++;
        }
        i++;
    }
    return vowelsAmount;
}
console.log(getAmount("Hello world, my name is Albert"));

// Ex-5 //

let input = { 
    John: [8, 7, 9],
    Mary: [9, 9, 10],
    Alex: [6, 8, 7],
}

const getMedium = (initialObj) => {
    let resultObject = Object.assign({}, initialObj);

    for (element in initialObj) {
        let value = initialObj[element];
        i = 0;
        let sum = 0;
        let medium = 0;
        let arrayLength = value.length;

        while (i < arrayLength) {
            sum += value[i];
            i++;
        }
        medium = sum / arrayLength;
        resultObject[element] = `medium: ${medium}`;
    }
    return resultObject;
}

console.log(getMedium(input));

// Ex-6 //

const reversedWords = (initialString) => {
    const initialStringArray = initialString.split('');

    const resultStringArray = [];
    let i = initialStringArray.length - 1;
    do {
        resultStringArray.push(initialStringArray[i]);
        i--;
    } while (i >=0);

    let resultString = resultStringArray.join('');
    return resultString;
}

let initialString = 'Hello, world!';
console.log(reversedWords(initialString));

// Ex-7 //

let word = "level";

const polidrom = (word) => {
    let left = 0;
    let right = word.lenth - 1;

    while (left < right) {
        if (word[left] !== word[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(polidrom(word));
 
//