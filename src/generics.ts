

// build a genric type, 
// lets build a genric type function thats gonna allow me to input any

function  identity<T>(arg:T):T{
    return arg;
}

// call it:
let output = identity<string>("hello world");

console.log(output);