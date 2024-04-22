//  function name  // type
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
// void
function hello() {
    console.log("Hello");
}
hello();
// parameters
function multiply(x, y) {
    return x * y;
}
console.log(multiply(5, 3));
// optional parameter
function add(x, y, z) {
    return x + y + (z || 0);
}
console.log(add(22, 17));
console.log(add(22, 17, 86));
// default parameter
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
console.log(pow(2));
console.log(pow(22, 17));
