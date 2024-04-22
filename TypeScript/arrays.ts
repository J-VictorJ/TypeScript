// similar to Java :|;
const names: string[] = [];
names.push('Zé');
console.log(names);

// readonly
const cars: readonly string[] = ['Mustang', 'Santa Fé', 'F-1000'];
// names.push('error'); // Error: Property 'push' does not exist on type 'readonly string[]'.
console.log(cars);

// inference
const numbers: number[] = [1, 2, 3];
numbers.push(4); // no error
console.log(numbers[3]);