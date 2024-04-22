// as
let x: unknown='Hello';
console.log((x as string).length);

// <>
let y: unknown='World';
console.log((<string>y).length);

// forced
let z = 'Hello, World';
let $z = 'Hello, World';
console.log(((<unknown>z) as string).length);
console.log((($z as unknown)as string).length);
// to avoid erros, first to unknown > type