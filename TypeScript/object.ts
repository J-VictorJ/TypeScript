// objects
const car: {type: string, model: string, year: number, mileage?: number} = {
    type: "Honda",
    model: "CR-V",
    year: 2013
};

console.log(`I had a dream that I was driving a ${car.model}, I appreciate the japaneses engines like ${car.type}. So this car is a little old
and it has ${2024-car.year} years old`);

// optional property
car.mileage = 50463; // ? sign will not give me any error
console.log(`${car.model} mileage ${car.mileage}`);