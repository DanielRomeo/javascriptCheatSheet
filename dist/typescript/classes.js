class Student {
    constructor(firstname, middlename, lastname) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.fullname = firstname + " " + this.middlename + " " + this.lastname;
    }
}
const greeter = (person) => {
    return `Hello ${person.firstname} ${person.lastname}`;
};
let user = new Student("Daniel", "Romeo", "Mmaphekgo");
document.body.textContent = greeter(user);
console.log("aa");
//# sourceMappingURL=classes.js.map