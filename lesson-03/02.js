// code
let words = ["яблоко", "банан", "апельсин", "манго", "киви"];

let orange = (words) => {
  if (words.indexOf("апельсин")) {
   return console.log("Ура! нашел")
  }else{
    return console.log("Придется поискать в другом магазине…")
  }
}

orange(words);