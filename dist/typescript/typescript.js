let isMale;
const greeter = (person, isMale) => {
    return "Hello, " + person.name + " AND HE IS male: " + isMale;
};
let user = {
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
//# sourceMappingURL=typescript.js.map