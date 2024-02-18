// code
let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
      country: "USA",
      city: "LA"
  }
};
let newpassportWithAddress = structuredClone(passportWithAddress);
newpassportWithAddress.address.city = "Bobryisk";
console.log(passportWithAddress.address.city);
console.log(newpassportWithAddress.address.city);