var isMale;
var greeter = function (person, isMale) {
    return "Hello, " + person.name + " AND HE IS male: " + isMale;
};
var user = {
    name: "aaaa",
    age: 15,
    gender: "male"
};
if (user.gender === "male") {
    isMale = true;
}
else {
    isMale = false;
}
console.log(greeter(user, isMale));
