var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Zé");
console.log(person);
console.log(person.getName());
// parameters // readonly
var Someone = /** @class */ (function () {
    function Someone(name) {
        this.name = name;
    }
    ;
    Someone.prototype.getName = function () {
        return this.name;
    };
    return Someone;
}());
var someone = new Someone('Zezin');
console.log(someone.getName());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    ;
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.toString = function () {
        return "Rectangle width: ".concat(this.width, ", height: ").concat(this.height);
    };
    return Rectangle;
}());
var rectangle = new Rectangle(20, 10);
console.log(rectangle.getArea());
// extends
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        return _super.call(this, width, width) || this;
    }
    Square.prototype.toString = function () {
        return "Another print [width = ".concat(this.width, "]");
    };
    return Square;
}(Rectangle));
var square = new Square(10);
console.log(square.getArea()); // this getArea was inherited from Shape
// override line 54
console.log(square.toString());
// abstract
var Polygon = /** @class */ (function () {
    function Polygon() {
    }
    Polygon.prototype.toString = function () {
        return "Polygon[area=".concat(this.getArea(), "]");
    };
    return Polygon;
}());
var OtherRectangle = /** @class */ (function (_super) {
    __extends(OtherRectangle, _super);
    function OtherRectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    OtherRectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return OtherRectangle;
}(Polygon));
var newRectangle = new OtherRectangle(10, 10);
console.log(newRectangle.getArea());
console.log(newRectangle.toString());
