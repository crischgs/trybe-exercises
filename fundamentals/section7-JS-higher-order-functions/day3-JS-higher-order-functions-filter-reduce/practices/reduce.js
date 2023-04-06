const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const isEven = (number) => number % 2 === 0;
const sum = (accumulator, number) => accumulator + number;

const sumNumbers = (array) => array.filter(isEven).reduce(sum);

console.log(sumNumbers(numbers)); // 152