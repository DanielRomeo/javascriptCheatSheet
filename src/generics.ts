

// build a genric type, 
// lets build a genric type function thats gonna allow me to input any
function  identity<T>(arg:T):T{
    return arg;
}
// call it:
let output = identity<string>("hello world");
console.log(output);

// lets create another generic function that returns last item in array:
// this is how i would do it for number:
const last = (arr: Array<number>): number=>{
    return arr[arr.length-1];
}
// instead it should be like this:
const last1 = <T>(arr: Array<T>): T => {
    return arr[arr.length-1];
}
//lets call it
let myvalue = last1([3,4,5]);
let myvalue2 = last1(["a", "c"]);


//------------------------------------------------------------------------------------------

// make my generic function take in different types if it needs to:
const myfunc = <T, Y>(a: T, b: Y) =>{
    return [a, b];
}
//call it
let data = myfunc(5, "aa");
console.log(typeof data);

// but then it returns an array, but really its a tuple: so lets maek it return a tuple:
const myfunc2 = <T, Y>(a: T, b: Y): [T, Y] =>{
    return [a, b];
}
//call it:
let data2 = myfunc2(null, "aa"); // now i know for sure that its gonna be a tuple...
let data3 = myfunc2<string|null, number>("alii", 100); // can sepcify before hand what exactly needs to be psssed in:


// i can set defuly types to functions:
// so Y will always be number:
const myfunc3 = <T, Y = number>(a: T, b: Y): [T, Y] =>{
    return [a, b];
}
//call it:
let data4 = myfunc3<string|null>("alii", 100); // as u can see, we only specified the T's type:


// --------------------------------------------------------------------------------------
// objects:
// say we have a function that takes in an object, but in that object: must be atleast 2 properties... 
// also, i want it to be able to allow an object that has more that those 2 properties...

// the normal function that is restricted:
const makeFullName =(obj: {firstName: string, lastName: string})=>{
    return {
        ...obj,
        fullName: obj.firstName + " "+ obj.lastName
    };
}
//use it...
console.log(makeFullName({
    firstName: "sam",
    lastName: "doe"})
);


// real way: // meaning i have to extend the type,.,
const makeFullName2 =<T extends {firstName: string, lastName: string}>(obj:T)=>{
    return {
        ...obj,
        fullName: obj.firstName + " "+ obj.lastName
    };
}
// use it :
console.log(makeFullName2({
    firstName: "sam",
    lastName: "doe",
    age: 15})// as u can see, we were able to add the age here:
);

//----------------------------------------------------------------------------------------------------------------------------------------------
// interface, using generics with interfaces:


