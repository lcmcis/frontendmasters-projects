/* 'map' method can be used whenever you have an array of something 
and you wanna transform it into an array. */

const cities = [
    "Sacramento",
    "Austin",
    "Charlotte",
    "Atlanta",
    "New York"
]

const newCities = cities.map(function(city) {
    return city.toUpperCase()
})
console.log(cities)
console.log(newCities)