// Looping over arrays

const cities = [
    "Sacramento",
    "Austin",
    "Charlotte",
    "Atlanta",
    "New York"
]

// Method 1

for(let i = 0; i < cities.length; i++) {
    console.log(cities[i])
}

console.log("--------------")

// Method 2

cities.forEach(function(city, index) {
    console.log(city, index)
})