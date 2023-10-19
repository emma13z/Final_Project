// HW-JS8 //

// Ex-1 //

let student = {
    firstName: "John",
    lastName: "Doe",
    faculty: "history",
    year: 3
};

let studentInfo = ({firstName, lastName, faculty, year}) => {
    let fullName = `${firstName} ${lastName}`
console.log([fullName, faculty, year]);
};

studentInfo(student);

// Ex-2 //

let colors = ["red", "green", "blue", "violet"];

let [first, , third] = colors;

console.log(first);
console.log(third);

// Ex-3 //

function numbers(...arguments) {
    console.log(arguments);
}
numbers(1,2,3,4,5,6,7,8,9,10);

// Ex-4 //

let arrayOne = [2, 6, 8];
let arrayTwo = [10, 12, 14];

function newArray(array1, array2) {
    return [...array1, ...array2];
}
let mergedArray = newArray(arrayOne, arrayTwo);
console.log(mergedArray);

// Ex-5 //

let newStudent = {
    name: "John",
    lastName: "Doe",
    faculty: "history",
    year: 3
};

const updatedStudent = {...newStudent, language: "en"};
console.log(updatedStudent);

