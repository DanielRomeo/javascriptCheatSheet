

class Student {
    fullname : string;
    age: number;
	constructor(public firstname: string, public middlename: string, public lastname: string, number age){
        this.fullname = firstname + " " + this.middlename + " " + this.lastname;
        this.age = age;
    }
    
    
}

interface Person {
	firstname: string;
	lastname: string;
}

interface Dog {
    legs: any;
    health:  "healthy" | "stable" | "recovering";
}

const greeter = (person: Person) =>{
	return `Hello ${person.firstname} ${person.lastname}`;
}
