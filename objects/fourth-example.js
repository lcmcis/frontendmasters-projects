// Objects can have nested objects inside them.

const person = {
    name: {
        first: "John",
        last: "Doe"
    },
    location: {
        city: "Charleston",
        state: "SC",
        country: "USA"
    }
}
console.log(person)
console.log(person.name.last)
console.log(person["location"]["country"])