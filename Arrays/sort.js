const numbers = [8,23,5,9,1,0,56,3,20]

// Sorted by string
console.log(numbers.sort())

console.log("-----------------")

// Sorted by number
console.log(numbers.sort(function(num1, num2) {
    if(num1 > num2) {
        return 1
    } else if(num2 > num1) {
        return -1
    }
    return 0
}))

console.log("--------------")

// Sorted by number reverse order
console.log(numbers.sort(function(num1, num2) {
    if(num1 < num2) {
        return 1
    } else if(num2 < num1) {
        return -1
    }
    return 0
}))

console.log("----------------------")

const strings = ["u", "t", "A", "h", "L", "e", "q"]
console.log(strings.map(function(string) {return string.toUpperCase()})
                   .sort())

console.log("----------------------")

//Using Arrow function
const strings1 = ["u", "t", "A", "h", "L", "e", "q"]
console.log(strings1.map((string) => {return string.toUpperCase()})
                    .sort())

console.log("----------------------")

//Using implicit return
const strings2 = ["u", "t", "A", "h", "L", "e", "q"]
console.log(strings2.map((string) => string.toUpperCase())
                    .sort())