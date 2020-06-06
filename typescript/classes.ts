

class Student {
	fullname : string;
	constructor(public firstname: string, public middlename: string, public lastname: string){
		this.fullname = firstname + " " + this.middlename + " " + this.lastname;
	}
}

interface Person {
	firstname: string;
	lastname: string;
}

const greeter = (person: Person) =>{
	return `Hello ${person.firstname} ${person.lastname}`;
}

let user = new Student("Daniel", "Romeo", "Mmaphekgo");

document.body.textContent = greeter(user);

console.log("aa");