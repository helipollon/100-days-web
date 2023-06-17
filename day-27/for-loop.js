// for loop
 for (let i = 0; i < 10; i++) {
     console.log(i)
    }
    
// in the above example, the for loop is made up of 3 parts:
// 1. the initialization: let i = 0
// 2. the condition: i < 10
// 3. the final expression: i++

let cars = ['Ford', 'Chevy', 'Honda', 'Toyota']

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

for(let car in cars) {
    console.log(car)
}

for(let car of cars) {
    console.log(car)
}

// for of loop
// for of loop is used to iterate over arrays or strings

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let number of numbers) {
    console.log(number)
}

// for in loop
// for in loop is used to iterate over objects

let person = {
    name: 'Andrew',
    age: 26,
    city: 'Philadelphia'
}

for (let key in person) {
    console.log(key)
    console.log(person[key])
}



