// Faça uma lista com as suas frutas favoritas
const specialFruit = ['apple', 'banana', 'kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['açaí', 'canned milk', 'powdered milk'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));