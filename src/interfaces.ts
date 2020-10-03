// just an overview:
// simple implementation:
interface information{
    name: string,
    data: string | number
}

// function that takes an object:
function displayPersonalInfo(obj: information){
    return {obj};
}

let myObject = {
    name: "daniel",
    data: 15000
}
let output2 = displayPersonalInfo(myObject);


/*But i can create my very own generic Type,*/
// meaning i want 'For a particular type' that T is a specific type
interface information2<T>{
    name: string,
    data: T
}
// use it:
type InfoNumber = information2<number>;
// use it use it:
let dansInfo: InfoNumber = {
    name: "danny",
    data: 100 // have to use a number here coz thats what the type wants
}
