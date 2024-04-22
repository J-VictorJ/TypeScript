function printStatusCode(code: string|number){
    console.log(`my status code is: ${code}`);
}
printStatusCode('400'); // my code can be both str
printStatusCode(400); // or a number


// I cannot use expecific methods as .toUpperCase() in this situation because it isn't accepted with numbers
