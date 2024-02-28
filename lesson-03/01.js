// code
let colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];
let colorsOfGermany = [];

function createColorString() {
    colors.filter((item) => {
      if (item === "черный" || item === "красный" || item === "желтый") {
        colorsOfGermany.push(item);
      }
    })
    
    return colorsOfGermany.join('-');
}

console.log(createColorString());

