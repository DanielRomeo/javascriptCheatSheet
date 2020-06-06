var Student = /** @class */ (function () {
    function Student(firstname, middlename, lastname) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.fullname = firstname + " " + this.middlename + " " + this.lastname;
    }
    return Student;
}());
var greeter = function (person) {
    return "Hello " + person.firstname + " " + person.lastname;
};
var user = new Student("Daniel", "Romeo", "Mmaphekgo");
document.body.textContent = greeter(user);
console.log("aa");
