// objects
var car = {
    type: "Honda",
    model: "CR-V",
    year: 2013
};
console.log("I had a dream that I was driving a ".concat(car.model, ", I appreciate the japaneses engines like ").concat(car.type, ". So this car is a little old\nand it has ").concat(2024 - car.year, " years old"));
// optional property
car.mileage = 198672; // ? sign will not give me any error
console.log("".concat(car.model, " has ").concat(car.mileage));
