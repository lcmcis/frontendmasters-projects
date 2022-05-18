// Used conjunction with functions

const person1 = {
    name: "John",
    ageRange: "40-50"
}

const person2 = {
    name: "Jane",
    ageRange: "30-40"
}

const person3 = {
    name: "Jill",
    ageRange: "10-20"
}

const person4 = {
    name: "Jack",
    ageRange: "60-80"
}

function suggestMovie(person) {
    if(person.ageRange === "40-50") {
        console.log("We think the movie you'll like is 'Inception'.")
    } else if(person.ageRange === "30-40") {
        console.log("We think the movie you'll like is 'The Intern'.")
    } else if(person.ageRange === "10-20") {
        console.log("We think the movie you'll like is 'Frozen'.")
    } else {
        console.log("We think the movie everyone will like is 'Avengers'.")
    }
} 

suggestMovie(person1)
suggestMovie(person2)
suggestMovie(person3)
suggestMovie(person4)