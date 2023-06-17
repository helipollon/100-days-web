let lectures = ["JavaScript", "HTML", "CSS"];

// length method - returns the length of the array
console.log(lectures.length); // 3

// toString method - returns a string of the array
console.log(lectures.toString()); // JavaScript,HTML,CSS

// join method - returns a string of the array with a separator
console.log(lectures.join(" - ")); // JavaScript - HTML - CSS

// pop method - removes the last element of the array
console.log(lectures.pop()); // CSS
console.log(lectures); // ["JavaScript", "HTML"]

// push method - adds an element to the end of the array
console.log(lectures.push("CSS")); // 3
console.log(lectures); // ["JavaScript", "HTML", "CSS"]

// shift method - removes the first element of the array
console.log(lectures.shift()); // JavaScript
console.log(lectures); // ["HTML", "CSS"]

// unshift method - adds an element to the beginning of the array
console.log(lectures.unshift("JavaScript")); // 3
console.log(lectures); // ["JavaScript", "HTML", "CSS"]

// slice method - returns a new array from the given start index to the given end index
console.log(lectures.slice(1, 2)); // ["HTML"]
console.log(lectures); // ["JavaScript", "HTML", "CSS"]

// splice method - removes elements from the array and optionally adds new elements in their place
console.log(lectures.splice(1, 1)); // ["HTML"]
console.log(lectures); // ["JavaScript", "CSS"]

console.log(lectures.splice(1, 0, "HTML")); // []
console.log(lectures); // ["JavaScript", "HTML", "CSS"]

console.log(lectures.splice(1, 1, "TypeScript")); // ["HTML"]
console.log(lectures); // ["JavaScript", "TypeScript", "CSS"]

// concat method - returns a new array by merging two or more arrays
let lectures2 = ["React", "Angular"];
console.log(lectures.concat(lectures2)); // ["JavaScript", "TypeScript", "CSS", "React", "Angular"]
console.log(lectures); // ["JavaScript", "TypeScript", "CSS"]
console.log(lectures2); // ["React", "Angular"]

// indexOf method - returns the index of the first occurrence of the given element in the array
console.log(lectures.indexOf("TypeScript")); // 1
console.log(lectures.indexOf("React")); // -1

// includes method - returns true if the array contains the given element
console.log(lectures.includes("TypeScript")); // true
console.log(lectures.includes("React")); // false

// reverse method - reverses the order of the elements in the array
console.log(lectures.reverse()); // ["CSS", "TypeScript", "JavaScript"]
console.log(lectures); // ["CSS", "TypeScript", "JavaScript"]

// sort method - sorts the elements of the array
console.log(lectures.sort()); // ["CSS", "JavaScript", "TypeScript"]
console.log(lectures); // ["CSS", "JavaScript", "TypeScript"]

// fill method - fills the array with the given value from the given start index to the given end index
console.log(lectures.fill("HTML", 1, 2)); // ["CSS", "HTML", "TypeScript"]
console.log(lectures); // ["CSS", "HTML", "TypeScript"]

// forEach method - executes a function for each element in the array
lectures.forEach((lecture) => console.log(lecture)); // CSS HTML TypeScript

// map method - creates a new array by calling the given function for each element in the array
console.log(lectures.map((lecture) => lecture.toUpperCase())); // ["CSS", "HTML", "TYPESCRIPT"]
console.log(lectures); // ["CSS", "HTML", "TypeScript"]

// filter method - creates a new array with the elements that pass the given test
console.log(lectures.filter((lecture) => lecture.length > 3)); // ["HTML", "TypeScript"]
console.log(lectures); // ["CSS", "HTML", "TypeScript"]

// reduce method - executes a reducer function for each element in the array and returns a single value
console.log(lectures.reduce((accumulator, lecture) => accumulator + lecture.length, 0)); // 13

// every method - returns true if all elements in the array pass the given test
console.log(lectures.every((lecture) => lecture.length > 3)); // false

// some method - returns true if at least one element in the array passes the given test
console.log(lectures.some((lecture) => lecture.length > 3)); // true

// find method - returns the value of the first element in the array that passes the given test
console.log(lectures.find((lecture) => lecture.length > 3)); // HTML

// findIndex method - returns the index of the first element in the array that passes the given test
console.log(lectures.findIndex((lecture) => lecture.length > 3)); // 1

// flat method - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
console.log([1, 2, [3, 4]].flat()); // [1, 2, 3, 4]
console.log([1, 2, [3, [4, 5]]].flat(2)); // [1, 2, 3, 4, 5]

// flatMap method - creates a new array by calling the given function for each element in the array and flattening the result
console.log([1, 2, 3].flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 3, 6]

// from method - creates a new array from an array-like or iterable object
console.log(Array.from("JavaScript")); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// of method - creates a new array from the given arguments
console.log(Array.of(1, 2, 3)); // [1, 2, 3]

// isArray method - returns true if the given value is an array
console.log(Array.isArray(lectures)); // true

// includes method - returns true if the array contains the given element
console.log(lectures.includes("TypeScript")); // true
console.log(lectures.includes("React")); // false


