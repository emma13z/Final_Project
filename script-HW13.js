// Ex-1 //

const string = "Today I went to the shop 123 and bought 4 bananas.";
const numbersRegex = /\d+/g;
const numbers = string.match(numbersRegex);
console.log(numbers);

// Ex-2 //

const text = "City postal codes: 12345, 98765, 54321";
const postRegex = /\b[0-9]{5}\b/;

if (postRegex.test(text)) {
    console.log("The postal codes are valid");
}
else {
    console.log("The postal codes are invalid");
}

// Ex-3 //

const movies = [
  "1 The Shawshank Redemption (1994)",
  "2 The Godfather (1972)",
  "3 The Godfather: Part II (1974)",
  "4 Pulp Fiction (1994)",
  "5 The Good, the Bad and the Ugly (1966)",
  "6 The Dark Knight (2008)",
  "7 12 Angry Men (1957)",
  "8 Schindler's List (1993)",
  "9 The Lord of the Rings: The Return of the King (2003)",
  "10 Fight Club (1999)"
];

const moviesPattern = /\d{4}/g;

movies.forEach(movie=> {
const movieYear = movie.match(moviesPattern)

if (movieYear>1990) {
    console.log(movie)
}
});


// Ex-4 //

const colors = `
  AliceBlue #F0F8FF
  AntiqueWhite #FAEBD7
  Aqua #00FFFF
  Aquamarine #7FFFD4
  Azure #F0FFFF"
  12 bit:
  White #FFF
  Red #F00
  Green #0F0
  Blue #00F`
;

const colorsRegex = /[#A-F0-9]{6}/g;
const hex = colors.match(colorsRegex);
console.log(hex);