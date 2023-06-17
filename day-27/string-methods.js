//striing methods
let name = '  Andrew Mead  '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case 
console.log(name.toLowerCase())

// Includes method - returns true or false if the string includes the given character(s)
console.log(name.includes('Mead'))

// Trim - removes white space from beginning and end
console.log(name.trim())

// Challenge area 
console.log(name.trim().length)

// isValidPassword - only return true if length is more than 8 and it doesn't contain the word password
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

// subString method - returns a substring from the given start index to the given end index
console.log(name.substring(1, 4)); // ndr
console.log(name); // Andrew Mead

// charAt method - returns the character at the given index
console.log(name.charAt(1)); // n
console.log(name); // Andrew Mead

// charCodeAt method - returns the unicode of the character at the given index
console.log(name.charCodeAt(1)); // 110

// split method - returns an array of strings by splitting the string using the given separator
console.log(name.split(" ")); // ["Andrew", "Mead"]

// repeat method - returns a string repeated the given number of times
console.log(name.repeat(3)); // Andrew MeadAndrew MeadAndrew Mead

// replace method - returns a new string with some or all matches of a pattern replaced by a replacement
console.log(name.replace("Andrew", "Jen")); // Jen Mead

// padStart method - returns a new string of a given length with the given string at the beginning
console.log(name.padStart(15, "Hi ")); // Hi  Andrew Mead

// padEnd method - returns a new string of a given length with the given string at the end
console.log(name.padEnd(15, " Hi")); // Andrew Mead Hi

// repeat method - returns a string repeated the given number of times
console.log(name.repeat(3)); // Andrew MeadAndrew MeadAndrew Mead





