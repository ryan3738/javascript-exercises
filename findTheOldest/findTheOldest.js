const findTheOldest = function(peopleArray) {
    //Find age of people
    //Filter by person with oldest age

    let oldest = peopleArray.sort((a, b) => ((a.yearOfDeath ? a.yearOfDeath : new Date().getFullYear()) - a.yearOfBirth < (b.yearOfDeath ? b.yearOfDeath : new Date().getFullYear()) - b.yearOfBirth) ? 1 : -1);
    return oldest[0]
};

const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]
console.table(findTheOldest(people))

module.exports = findTheOldest;
