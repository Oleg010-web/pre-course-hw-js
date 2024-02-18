// code
let passport = {
  name: "Petr",
  surname: "Petrov",
};
let personData = {...passport};
personData.name = "Ivan";
console.log(passport.name);
console.log(personData.name);