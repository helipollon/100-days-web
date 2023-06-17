//objects are a collection of properties and methods 

let myBook = {
    title: '1984',
    page: 326,
    year: 2017,
    author: 'George Orwell'
}

console.log(myBook)
console.log(`${myBook.title} by ${myBook.author}`)
myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)
console.log(myBook)

//challenge area
//name, age, location
//Andrew is 27 and lives in Philadelphia
//increase age by 1 and print message again

let person = {
    name: 'Andrew',
    age: 27,
    location: 'Philadelphia'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
person.age = person.age + 1
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

for (let key in person) {
    console.log(key)
    console.log(person[key])
}

for (let key in person) {
    console.log(`${key} is ${person[key]}`)
}





