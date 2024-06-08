// Start coding here
// Start coding here
let add = (a,b) => {
    return a+b;
}
let subtract = (a,b) => {
    return a-b;
}
let multiply = (a,b) => {
    return a*b;
}
let divide = (a,b) => {
    return a/b;
}

let calculator = {add,subtract,multiply,divide};

let addResult = calculator.add(10,20);
console.log(addResult);
let divideResult = calculator.divide(3000,10);
console.log(divideResult);
