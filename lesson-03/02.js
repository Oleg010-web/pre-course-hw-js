// code
let words = ["яблоко", "банан", "апельсин", "манго", "киви"];

let orange = (words) => {
  if (words.indexOf("апельсин") != -1) {
   return console.log("Ура! нашел")
  }else if (words.indexOf("апельсин") === -1){
    return console.log("Придется поискать в другом магазине…")
  }
}

orange(words);