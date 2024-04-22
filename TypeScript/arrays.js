// similar to Java :|;
var names = [];
names.push('Zé');
console.log(names);
// readonly
var cars = ['Mustang', 'Santa Fé', 'F-1000'];
// names.push('error'); // Error: Property 'push' does not exist on type 'readonly string[]'.
console.log(cars);
// inference
var numbers = [1, 2, 3];
numbers.push(4); // no error
console.log(numbers[3]);
