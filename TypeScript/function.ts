//  function name  // type
function getTime(): number{
    return new Date().getTime();
}
console.log(getTime());


// void
function hello(): void{
    console.log("Hello");
}
hello();

// parameters
function multiply(x: number, y: number){
    return x * y;
}
console.log(multiply(5,3));

// optional parameter

function add(x: number, y: number, z?: number){
    return x+y+(z||0);
}
console.log(add(22, 17));
console.log(add(22, 17, 86));


// default parameter

function pow(value: number, exponent: number = 10){
    return value ** exponent;
}
console.log(pow(2));
console.log(pow(22,17));
