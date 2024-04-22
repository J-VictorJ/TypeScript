class Person{
    private name: string;

    public constructor(name: string){
        this.name = name;
    }
    public getName(): string{
        return this.name;
    }
}

const person = new Person("Zé");

console.log(person);
console.log(person.getName());


// parameters // readonly
class Someone{
    private readonly age: number; // how it's readonly I cannot modify anymore
    public constructor(private name: string){};
    public getName(): string{
        return this.name;
    }
}

const someone = new Someone('Zezin')
console.log(someone.getName());


// implements
interface Shape{
    getArea: () => number;
}
class Rectangle implements Shape{  // omma "alows" to implements more
    public constructor(protected readonly width: number, protected readonly height: number){};
    public getArea(): number{
        return this.width * this.height;
    }
    public toString(): string{
        return `Rectangle width: ${this.width}, height: ${this.height}`;
    }
}

const rectangle = new Rectangle(20, 10);
console.log(rectangle.getArea());


// extends
class Square extends Rectangle{
    public constructor(width: number){
        super(width,width);
    }
    public override toString(): string {
        return `Another print [width = ${this.width}]`;
    }
}
const square = new Square(10);
console.log(square.getArea()); // this getArea was inherited from Shape

// override line 54
console.log(square.toString())


// abstract
abstract class Polygon{
    public abstract getArea(): number;

    public toString(): string{
        return `Polygon[area=${this.getArea()}]`;
    }
}
class OtherRectangle extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
      super();
    }
  
    public getArea(): number {
      return this.width * this.height;
    }
  }

const newRectangle = new OtherRectangle(10, 10);
console.log(newRectangle.getArea());
console.log(newRectangle.toString());
