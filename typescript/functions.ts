// void functions:
function warnuser() : void{
	console.log("warning");
}

// never functions:::
// these are functions that return errors(for eg)
// also declare never to functions that have an unreachable endpoing... e.g an infinite Loop
const error = (message: string) : never =>{
	throw new Error(message);
}

const infinite = () : never =>{
	while(true){

	}
}




