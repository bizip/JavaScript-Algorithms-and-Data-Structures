let cars = [
    {
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7
    },
    {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5
    },
];
const isPuple = (car) => {
    return car.color === "purple"
}

// used filter to filter all colors of purple
const purple = cars.filter(isPuple)

// used reduce to add all capacity
const capacity = cars.reduce((sum, car) => {
    return sum += car.capacity;
}, 0)
console.log(capacity);