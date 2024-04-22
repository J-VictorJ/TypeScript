// aliases used for everything
type carYear = number;
type carType = string;
type carModel = string;

type Car={
    year: carYear,
    type: carType,
    model: carModel
};


const carYear: carYear = 2012;
const carType: carType = "Honda";
const carModel: carModel = "Civic";
const car: Car={
    year: carYear,
    type: carType,
    model: carModel
};
console.log(car);


// interfaces used only for obj
interface Rectangle{
    height: number,
    width: number
};

const rectangle: Rectangle={
    height: 20,
    width: 10
};

console.log(rectangle);

// extend interface
interface ColoredRectangle extends Rectangle{
    color: string
};

const coloredRectangle: ColoredRectangle={
    height: 30,
    width: 15,
    color: "red"
};

console.log(coloredRectangle);